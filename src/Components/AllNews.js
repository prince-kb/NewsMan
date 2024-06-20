import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import nn from './FixedNews'
import Navbar from "./Navbar";
import loadingGif from './Pictures/loading.gif'
export class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      u1: `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e0ff21b7cda4cc3b194045a79b96df1`,
      articles: nn,
      totalNo : 0,
      i: 1,
      pageSize: 8,
      networkStatus : true,
      deployed : true,
      category : 'general'
    };
  }

    async componentDidMount() {
      if(!this.state.deployed){
      let url =this.state.u1 +`&category=${this.props.category ? this.props.category : 'general'}&page=${this.state.i}&pageSize=${this.state.pageSize}/`;
      setTimeout(()=>{
        fetch(url)
        .then(async()=>{
          let data = await fetch(url)
          let parsedData = await data.json();
          // console.log(parsedData);
          this.setState({ articles: parsedData.articles ,
          totalNo : parsedData.totalResults, 
        });
        })
        .catch(e =>{
          this.setState({networkStatus: false});
        })
      },200)
      this.refr(0);
    }
  }
  capitalizer=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
  x=false;

  fetchMoreData=async()=>{
    this.setState({i : (this.state.i)+1})
    let url = this.state.u1 +`&category=${this.props.category}&page=${this.state.i + 1}&pageSize=${this.state.pageSize}/`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    setTimeout(async()=>{
      // console.log(this.articles)
      this.setState({ articles: this.state.articles.concat(parsedData.articles)})
    },200)
    document.title="News-"+this.capitalizer(this.props.category);
  }
  refr=async(n)=>{
    if(!this.state.deployed){
      this.x=true;
      if(n===1) this.setState({i : 1});
      console.log(n);
      setTimeout(()=>{
      let url =this.state.u1 +`&category=${this.props.category}&page=${this.state.i}&pageSize=${this.state.pageSize}/`;
      fetch(url)
        .then(async()=>{
          let data = await fetch(url)
          let parsedData = await data.json();
          this.setState({ articles: parsedData.articles ,
            totalNo : parsedData.totalResults, 
          });
          document.title="News-"+this.capitalizer(this.props.category);
          this.x=false;
        })
        .catch(e =>{
          this.setState({networkStatus: false});
          this.x=false;
        })
      },200)
    }
  }

  depl=()=>{
    this.state.deployed ? this.setState({deployed : false}) : this.setState({deployed : true})
    this.x=true;
    setTimeout(()=>{
    if(!this.state.deployed) this.refr(0);
    this.x=false;
    },300)
  }

  render() {

    return (
      <>
    <Navbar title={"News App"} refr={this.refr}/>
      
      <div className="container"  >
          <div className="container d-flex justify-content-center align-items-center">
          <h3 className="text-center my-3">Trending News : {this.capitalizer(this.props.category)}</h3>
          {/* {!this.state.deployed && <button style={{marginRight : "2vh" ,marginLeft: "2vh",borderRadius: "12vh",padding : "1vh"}} onClick={this.refr}>REFRESH</button>}           */}
          <div className="form-check form-switch d-flex justify-content-center align-items-center">
            <input style={{marginRight : "2vh" ,marginLeft: "2vh",transform : "scale(2)"}} className="form-check-input " type="checkbox" role="switch" id="ccc" onChange={this.depl}/>
            <label style={{marginLeft: "0.5vh",fontSize : "2vh"}} className="form-check-label" htmlFor="ccc">DEPLOYED</label>
          </div>
          </div>
        {
          !this.state.deployed ? <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 8}
          next={this.fetchMoreData}
          hasMore={this.state.articles ? this.state.articles.length : 8 !== this.state.totalNo}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} 
          // inverse={true} 
          // loader={<L/>}
          scrollableTarget="scrollableDiv"
        >

        <div className="container row">
          {this.state.articles && this.state.articles.map((e) => {
            return (
              <div className="col-md-3" key={e.title}>
                <NewsItem
                  title={e.title}
                  desc={e.description}
                  imgurl={e.urlToImage}
                  url={e.url}
                  date={e.publishedAt}
                  author={e.author}
                  source={e.source.name}
                />
        </div>
            );
          })}
        </div>
        {this.x && <img src={loadingGif} alt="loading" style={{width : "100px",height : "100px",margin : "auto",display : "block"}}/>}

        </InfiniteScroll> :

          <div className="container row">
          {this.state.articles && this.state.articles.map((e) => {
            return (
              <div className="col-md-3" key={e.title}>
                <NewsItem
                  title={e.title}
                  desc={e.description}
                  imgurl={e.urlToImage}
                  url={e.url}
                  date={e.publishedAt}
                  author={e.author}
                  source={e.source.name}
                  key={e.title}
                />
          </div>
            );
          })}
          </div>

        }
        {!this.state.networkStatus && <div className='container my-3'>
          <h2 style={{color : 'red',textAlign : 'center',margin : '30px 0px 10px 0px'}}>Failed to fetch news</h2>
          <h4 style={{color : 'blue',textAlign : 'center',margin : '5px 0px 10px 0px'}}>Make sure you are connected to a wifi or mobile network, or the API limit may have exhausted.</h4>
          </div>}
      </div>
      </>
    );
  }}

export default AllNews;
