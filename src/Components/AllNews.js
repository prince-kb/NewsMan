import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import r1 from './Pictures/PoxLPX9DzF.gif'
import r2 from './Pictures/Screenshot.png'
export class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      u1: `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e0ff21b7cda4cc3b194045a79b96df1`,
      articles: [
        {
        "source": {
        "id": null,
        "name": "India TV News"
        },
        "author": "Saumya Nigam",
        "title": "Vijay Sales 'Apple Days Sale' goes live: Offers on iPhone 15, iPads and more - India TV News",
        "description": "Vijay Sales is offering special deals on higher storage variants of the iPhone 15 Pro and iPhone 15 Pro Max. The iPhone 15 series starts at Rs 66,490, inclusive of an instant discount of Rs 4000 for HDFC Bank cardholders.",
        "url": "https://www.indiatvnews.com/technology/news/vijay-sales-apple-days-sale-goes-live-offers-on-iphone-15-ipads-and-more-2024-03-17-921930",
        "urlToImage": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/vijay-sales-2-1710671502.jpg",
        "publishedAt": "2024-03-17T11:53:15Z",
        "content": "Vijay Sales, an Indian electronics retail brand has officially announced the Apple Days Sale, which will be offering exciting deals on a wide range of Apple products. The sale will kickstart on March… [+1843 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WION"
        },
        "author": null,
        "title": "Scientists harness food by-products to fight antimicrobial resistance - WION",
        "description": "Scientists are embarking on a £1.1 million project aimed at revolutionising drug production by using food by-products to develop new antimicrobial drugs.\n\nLed by the University of Strathclyde in collaboration with the University of Surrey and GSK, the researc…",
        "url": "https://www.wionews.com/science/scientists-harness-food-by-products-to-fight-antimicrobial-resistance-701123",
        "urlToImage": "https://cdn.wionews.com/sites/default/files/2023/01/03/322980-wion-images-15.png",
        "publishedAt": "2024-03-17T11:49:36Z",
        "content": "Scientists are embarking on a £1.1 million project aimed at revolutionising drug production by using food by-products to develop new antimicrobial drugs.\r\nLed by the University of Strathclyde in coll… [+2227 chars]"
        },],
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
          console.log(data);
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
    let ii=this.state.i;
    this.setState({i : ii+1})
    document.title="News-"+this.capitalizer(this.props.category);
    let url =this.state.u1 +`&category=${this.props.category}&page=${(this.state.i)+1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout(async()=>{
      this.setState({ articles: this.state.articles.concat(parsedData.articles)})
    },1000)
  }
  refr=async()=>{
    document.title="News-"+this.capitalizer(this.props.category);

    let url =this.state.u1 +`&category=${this.props.category ? this.props.category : 'general'}&page=${this.state.i}&pageSize=${this.state.pageSize}`;
      setTimeout(()=>{
        fetch(url)
        .then(async()=>{
          let data = await fetch(url)
          let parsedData = await data.json();
          console.log("p==================",parsedData.articles)
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
    let leng=0;
    return (
      <div className="container"  >
          <div className="container d-flex justify-content-center align-items-center">
          <h1 className="text-center my-3">Trending News : {this.capitalizer(this.props.category)}</h1>
          <button style={{marginRight : "2vh" ,marginLeft: "2vh",borderRadius: "12vh",padding : "2vh"}} onClick={this.refr}>REFRESH</button>
          </div>
        <InfiniteScroll
          dataLength={this.state.totalNo ? this.state.articles.length : leng}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length ? this.state.articles.length : leng !== this.state.totalNo}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} 
          // inverse={true} 
          // loader={<L/> && console.log(this.state.articles.length !== this.state.totalNo)}
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
