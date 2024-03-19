import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
// import L from './Loading'
import r1 from './Pictures/PoxLPX9DzF.gif'
import r2 from './Pictures/Screenshot.png'
export class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      u1: `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e0ff21b7cda4cc3b194045a79b96df1`,
      articles: [],
      totalNo : 0,
      i: 1,
      pageSize: 8,
      networkStatus : true,

    };
  }

    async componentDidMount() {
      let url =this.state.u1 +`&category=${this.props.category ? this.props.category : 'general'}&page=${this.state.i}&pageSize=${this.state.pageSize}`;
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
      },500)
  }
  capitalizer=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  fetchMoreData=async()=>{
    this.setState({i : (this.state.i)+1})
    let url = this.state.u1 +`&category=${this.props.category}&page=${this.state.i + 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout(async()=>{
      this.setState({ articles: this.state.articles.concat(parsedData.articles)})
    },1000)
    document.title="News-"+this.capitalizer(this.props.category);
  }
  refr=async()=>{
    
    let url =this.state.u1 +`&category=${this.props.category ? this.props.category : 'general'}&page=${this.state.i}&pageSize=${this.state.pageSize}`;
    setTimeout(()=>{
      fetch(url)
        .then(async()=>{
          let data = await fetch(url)
          let parsedData = await data.json();
          // console.log(parsedData);
          this.setState({ articles: parsedData.articles ,
            totalNo : parsedData.totalResults, 
          });
          document.title="News-"+this.capitalizer(this.props.category);
        })
        .catch(e =>{
          this.setState({networkStatus: false});
        })
      },500)
  }
  


  render() {

    const refresh=()=>{
      console.log("Refresh clicked")
      setTimeout(()=>{
        this.componentDidMount();
      },300)
      imgProvider(r1);
    }
    const imgProvider=(r2)=>{
      return r2;
    }
    return (
      <div className="container"  >
          <div className="container d-flex justify-content-center align-items-center">
          <h1 className="text-center my-3">Trending News : {this.capitalizer(this.props.category)}</h1>
          <button style={{marginRight : "2vh" ,marginLeft: "2vh",borderRadius: "12vh",padding : "2vh"}} onClick={this.refr}>REFRESH</button>
          </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalNo}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} 
          // inverse={true} 
          // loader={<L/>}
          scrollableTarget="scrollableDiv"
        >
    {!this.state.networkStatus && <div className='container my-3'>
          <h2 style={{color : 'red',textAlign : 'center',margin : '30px 0px 10px 0px'}}>Failed to fetch news</h2>
          <h4 style={{color : 'blue',textAlign : 'center',margin : '5px 0px 10px 0px'}}>Make sure you are connected to a wifi or mobile network</h4>
          <img src={imgProvider(r2)} alt="Unavialable" onClick={refresh}/>
          </div>}

        <div className="container row">
          {this.state.articles.map((e) => {
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
        </InfiniteScroll>
      </div>
    );
  }}

export default AllNews;
