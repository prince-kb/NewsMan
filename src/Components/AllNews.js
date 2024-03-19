import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
// import L from './Loading'
import r1 from './Pictures/PoxLPX9DzF.gif'
export class AllNews extends Component {
  constructor() {
    super()
    this.state = {
      u1: `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e0ff21b7cda4cc3b194045a79b96df1`,
      articles: [
        {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "TOI Lifestyle Desk",
          "title": "Over 6,000 chickenpox cases, nine deaths in Kerala: Symptoms and prevention tips - The Times of India",
          "description": "Kerala witnesses a surge in chickenpox cases with 6744 infections and spread through respiratory droplets or blisters' fluid. Vaccination and good hyg",
          "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/over-6000-chickenpox-cases-nine-deaths-in-kerala-symptoms-and-prevention-tips/articleshow/108578984.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-108579006,width-1070,height-580,imgsize-479054,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-03-18T06:31:00Z",
          "content": null
          },
          {
          "source": {
          "id": null,
          "name": "News18"
          },
          "author": "Pragati Pal",
          "title": "2 Dead As Five-storey Under-construction Building Collapses in Kolkata, 14 Rescued - News18",
          "description": "Kolkata Building Collapse: West Bengal BJP president leader of the opposition in the state legislative assembly, Suvendu Adhikari shared pictures from the collapse site and slammed the ruling TMC government over the incident",
          "url": "https://www.news18.com/india/kolkata-under-construction-5-storey-building-collapse-multiple-dead-trapped-under-rubble-rescued-rescue-op-underway-latest-8819236.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/03/kolkata-building-collapse-1-2024-03-5009b6530224d55af73da34223180b22-16x9.jpg?impolicy=website&width=1200&height=675",
          "publishedAt": "2024-03-18T05:47:15Z",
          "content": "A five-story under-construction building collapsed in Kolkata leaving four people dead and many others trapped under the rubble on Sunday night. A part of the five-storey building collapsed on the ad… [+3361 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Livemint"
          },
          "author": "Sounak Mukhopadhyay",
          "title": "Electoral bonds: Disclose all details, Supreme Court tells SBI, asks bank not to be selective in disclosing data | Mint - Mint",
          "description": "Electoral bonds: The Supreme Court said in its judgment that it has asked the SBI to disclose all details",
          "url": "https://www.livemint.com/news/india/electoral-bonds-disclose-all-details-supreme-court-tells-sbi-asks-bank-not-to-be-selective-in-disclosing-data-11710739519032.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/The-Supreme-Court-of-India---File-_1710739756395_1710739884880.jpg",
          "publishedAt": "2024-03-18T05:32:39Z",
          "content": "Electoral Bonds: The Supreme Court said in its judgment on Monday, March 18, that it had asked the State Bank of India (SBI) to disclose all details and to include the electoral bond numbers as well.… [+6176 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Financial Express"
          },
          "author": "The Financial Express",
          "title": "Stock Market LIVE: Sensex, Nifty trade lower today! Nifty below 22,000, Sensex near 72,600; Media and Metal stocks shine - The Financial Express",
          "description": null,
          "url": "https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-share-market-live-sensex-nifty-may-open-negative-gift-nifty-up-asian-markets-trade-mixed-march-18-2024-monday-3428011/",
          "urlToImage": null,
          "publishedAt": "2024-03-18T05:30:14Z",
          "content": null
          },
      ],
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

    // const refresh=()=>{
    //   console.log("Refresh clicked")
    //   setTimeout(()=>{
    //     this.componentDidMount();
    //   },300)
    //   imgProvider(r1);
    // }
    // const imgProvider=(r2)=>{
    //   return r2;
    // }
    return (
      <div className="container"  >
          <div className="container d-flex justify-content-center align-items-center">
          <h1 className="text-center my-3">Trending News : {this.capitalizer(this.props.category)}</h1>
          <button style={{marginRight : "2vh" ,marginLeft: "2vh",borderRadius: "12vh",padding : "2vh"}} onClick={this.refr}>REFRESH</button>
          </div>
        <InfiniteScroll
          dataLength={this.state.articles ? this.state.articles.length : 8}
          next={this.fetchMoreData}
          hasMore={this.state.articles ? this.state.articles.length : 8 !== this.state.totalNo}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} 
          // inverse={true} 
          // loader={<L/>}
          scrollableTarget="scrollableDiv"
        >
    {!this.state.networkStatus && <div className='container my-3'>
          <h2 style={{color : 'red',textAlign : 'center',margin : '30px 0px 10px 0px'}}>Failed to fetch news</h2>
          <h4 style={{color : 'blue',textAlign : 'center',margin : '5px 0px 10px 0px'}}>Make sure you are connected to a wifi or mobile network</h4>
          <img src={r1} alt="Unavialable"/>
          </div>}

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
        </InfiniteScroll>
      </div>
    );
  }}

export default AllNews;
