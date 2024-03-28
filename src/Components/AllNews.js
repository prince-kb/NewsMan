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
          "id": null,
          "name": "News18"
          },
          "author": "Kavya Mishra",
          "title": "After Dodging 8 ED Notices in Liqour Policy Case, Arvind Kejriwal Now Skips Summons in Jal Board Matter - News18",
          "description": "This is the second case registered under the anti-money laundering law in which Arvind Kejriwal has been summoned",
          "url": "https://www.news18.com/politics/after-dodging-8-ed-notices-in-liqour-policy-case-arvind-kejriwal-now-skips-summons-in-jal-board-matter-8819350.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/03/untitled-design-15-2024-03-735e4e4bf3c445f3083ecd89b9da8b6c-16x9.jpg?impolicy=website&width=1200&height=675",
          "publishedAt": "2024-03-18T08:28:58Z",
          "content": "Delhi Chief Minister and AAP supremo Arvind Kejriwal on Monday skipped another summons issued by the Enforcement Directorate (ED) in connection with a money laundering case linked to alleged irregula… [+1482 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "Diabetes: 10 Unusual Signs Of High Blood Sugar In Men - NDTV",
          "description": "Below we share a list of unusual signs of high blood sugar you should look out for and how to deal with them.",
          "url": "https://www.ndtv.com/health/diabetes-10-unusual-signs-of-high-blood-sugar-in-men-5261135",
          "urlToImage": "https://c.ndtvimg.com/2023-12/pppj6ppo_diabetes_625x300_22_December_23.jpg",
          "publishedAt": "2024-03-18T08:25:57Z",
          "content": "Get regular check-ups to monitor blood sugar levels if you experience any of these signs\r\nHigh blood sugar, also known as hyperglycemia, can have various symptoms. While some of these signs may be co… [+3768 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "123telugu.com"
          },
          "author": null,
          "title": "Premalu creates a record in Telugu states – Deets inside - 123telugu",
          "description": "Telugu cinema news, Movie reviews, OTT News, OTT Release dates, Latest Movie reviews in Telugu, telugu movie reviews, Box office collections",
          "url": "https://www.123telugu.com/mnews/premalu-creates-a-record-in-telugu-states-deets-inside.html",
          "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
          "publishedAt": "2024-03-18T07:32:00Z",
          "content": "Mollywood’s recent hit Premalu also made its debut in Telugu cinema under the same title, thanks to SS Karthikeya, son of SS Rajamouli, presenting the film. Directed by Girish AD, the movie starred N… [+668 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "Reuters",
          "title": "Pakistan carried out two air strikes inside Afghanistan, killed 8 people, says Taliban - Hindustan Times",
          "description": "A Taliban spokesman ‘strongly’ condemned the strikes on Afghan soil, calling it a violation of the country's sovereignty. | World News",
          "url": "https://www.hindustantimes.com/world-news/pakistan-carried-out-two-air-strikes-inside-afghanistan-killed-8-people-says-taliban-101710746305127.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/pak_1710746840008_1710746851234.png",
          "publishedAt": "2024-03-18T07:28:22Z",
          "content": "Eight people, all women and children, were killed on Monday in \"reckless\" air strikes by the Pakistani military in the border regions of Afghanistan, the Taliban government's spokesman said.\r\nPakista… [+2436 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "Telangana Governor Resigns, May Contest Lok Sabha Polls As BJP Candidate - NDTV",
          "description": "Telangana Governor and Puducherry Lieutenant-Governor Tamilisai Soundararajan resigned from both posts Monday morning.",
          "url": "https://www.ndtv.com/india-news/telangana-governor-resigns-likely-to-contest-lok-sabha-elections-from-tamil-nadu-5260452",
          "urlToImage": "https://c.ndtvimg.com/2022-07/3fqabt_tamilisai-soundararajan-twitter_625x300_23_July_22.jpg",
          "publishedAt": "2024-03-18T07:26:00Z",
          "content": "Tamilisai Soundararajan resigned as Telangana Governor and Puducherry Lieutenant Governor Monday morning. Sources told NDTV Ms Soundararajan - the leader of the Bharatiya Janata Party's Tamil Nadu un… [+3393 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Sports Desk",
          "title": "Virat Kohli's internet-breaking gesture fell flat as Smriti Mandhana 'didn't hear anything' during video call - Hindustan Times",
          "description": "Smriti Mandhana's comment in the post-match press conference revealed that the women's team will be present at the RCB Unbox event on March 19 | Cricket",
          "url": "https://www.hindustantimes.com/cricket/virat-kohli-internet-breaking-gesture-fell-flat-smriti-mandhana-did-not-hear-anything-video-call-rcb-wpl-2024-final-dc-101710744214019.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/mandhana_kohli_video_1710744964194_1710744980168.jpg",
          "publishedAt": "2024-03-18T07:16:58Z",
          "content": "Just as Richa Ghosh went for a lofted drive over extra cover to score the match-winning run for Royal Challengers Bangalore in the WPL 2024 final on Sunday against Delhi Capitals at the Arun Jaitley … [+2018 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "Sumanti Sen",
          "title": "Donald Trump's ‘bloodbath’ comment misquoted? Maga on the defensive; Elon Musk posts 'full context' - Hindustan Times",
          "description": "Former president Donald Trump recently warned that there will be a “bloodbath” if he loses in November, triggering a row",
          "url": "https://www.hindustantimes.com/world-news/us-news/donald-trumps-bloodbath-comment-misquoted-maga-on-the-defensive-elon-musk-posts-full-context-101710742895315.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/AP03-17-2024-000022B-0_1710743609498_1710743637453.jpg",
          "publishedAt": "2024-03-18T06:45:56Z",
          "content": "Former president Donald Trump recently warned that there will be a bloodbath if he loses in November, triggering a row. While many blasted him for his comments, some came to defend him, including Elo… [+3934 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "Deeksha Somani",
          "title": "Garena Free Fire MAX codes for March 18, 2024: Win free gifts and rewards - The Times of India",
          "description": "GAMING News: Garena Free Fire MAX, with its unique redemption codes and captivating gameplay, continues to engage Indian gamers. The time-sensitive rewards and dai",
          "url": "https://timesofindia.indiatimes.com/technology/gaming/garena-free-fire-max-codes-for-march-18-2024-win-free-gifts-and-rewards/articleshow/108579313.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-108579327,width-1070,height-580,imgsize-35702,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-03-18T06:41:00Z",
          "content": "Garena Free Fire MAX, with its unique redemption codes and captivating gameplay, continues to engage Indian gamers. The time-sensitive rewards and daily claim system enhance the gaming experience, fo… [+1638 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Gadgets360.com"
          },
          "author": "David Delima",
          "title": "Qualcomm Snapdragon 8s Gen 3 With Support for On-Device Generative AI, 200-Megapixel Camera Support Launc... - Gadgets 360",
          "description": "Qualcomm Snapdragon 8s Gen 3 has been launched by the chipmaker as the latest mobile processor. The new chip offers support for over 30 on-device generative AI models including Gemini Nano and Llama 2 according to Qualcomm. It features support for capturing i…",
          "url": "https://www.gadgets360.com/mobiles/news/snapdragon-8s-gen-3-platform-soc-specifications-features-launch-5244659",
          "urlToImage": "https://i.gadgets360cdn.com/large/snapdragon_8s_gen_3_qualcomm_1710509448555.jpg",
          "publishedAt": "2024-03-18T06:30:01Z",
          "content": "Qualcomm on Monday announced the launch of the Snapdragon 8s Gen 3, the company's latest flagship-grade chipset that is equipped with several on-device artificial intelligence (AI) capabilities. The … [+3341 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT News Desk",
          "title": "Electoral Bonds: Supreme Court rebukes SBI, says don't be ‘selective’ - Hindustan Times",
          "description": "Electoral Bonds: Senior advocate Harish Salve, appearing for the SBI, said it should not seem that “we are playing with court”. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/electoral-bonds-sc-rebukes-sbi-says-dont-be-selective-sets-new-deadline-101710742496502.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/03/18/1600x900/The-Supreme-Court-of-India---File-_1710742542243_1710742554336.jpg",
          "publishedAt": "2024-03-18T06:17:09Z",
          "content": "New Delhi: The State Bank of India (SBI) can't be selective in disclosing information linked to electoral bonds, the Supreme Court of India said on Monday, directing the bank to submit full details o… [+2536 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "DNA India"
          },
          "author": "Shivam Verma",
          "title": "7 stunning images captured by NASA James Webb Space telescope - DNA India",
          "description": "Check out 7 stunning images captured by NASA James Webb Space telescope",
          "url": "https://www.dnaindia.com/web-stories/viral/7-stunning-images-captured-by-nasa-james-webb-space-telescope-1710739841430",
          "urlToImage": null,
          "publishedAt": "2024-03-18T05:54:35Z",
          "content": "Mar 18, 2024, 11:24 AM IST"
          },
          {
          "source": {
          "id": null,
          "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Apple in talks with Google for using Gemini to bring generative AI features to iPhones | Mint - Mint",
          "description": "Apple and Google in talks to use Gemini for generative AI features on iPhones, potential game changer for Google's chatbot. Apple's AI efforts not as advanced as believed, considering partnership with Google for generative AI capabilities.",
          "url": "https://www.livemint.com/technology/tech-news/googles-gemini-could-power-generative-ai-features-on-iphone-16-tim-cook-heres-what-we-know-11710739843784.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2024/03/18/1600x900/APPLE-LAWSUIT-COMPENSATION-0_1707356185453_1710740401619.JPG",
          "publishedAt": "2024-03-18T05:41:49Z",
          "content": "Apple and Google are actively negotiating the use of Gemini to power some of the generative AI features coming to iPhones this year, according to a recent report by Bloomberg's Mark Gurnman. The deal… [+5850 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Moneycontrol"
          },
          "author": "Moneycontrol",
          "title": "Exercise tips: Don’t make these post-workout mistakes - Moneycontrol",
          "description": "Exercise tips: Incorporating these post-workout steps into your routine will not only enhance the recovery process but also contribute to your overall fitness journey.",
          "url": "https://www.moneycontrol.com/health-and-fitness/exercise-and-fitness-exercise-tips-fitness-tips-exercise-mistakes-how-to-lose-weight-fast-how-to-build-muscles-best-dont-make-these-post-workout-mistakes-to-lose-weight-build-muscles-fast-visual-story-1922121.html",
          "urlToImage": "https://images.news18.com/webstories/2024/03/Exercise-and-fitness-Exercise-tips-Dont-make-these-mistakes-4-2024-03-755d791020bca35ee7af55443d937463.jpg",
          "publishedAt": "2024-03-18T05:30:12Z",
          "content": "These electrolytes can prevent and relieve muscle cramping, ensuring your body stays in top form. However, it’s crucial to avoid sugary, caffeinated, and alcoholic drinks as they can lead to dehydrat… [+38 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Moneycontrol"
          },
          "author": "Avishek Banerjee",
          "title": "EV policy likely to attract Tesla, BYD, VinFast and global OEMs, claim industry analysts - Moneycontrol",
          "description": "Auto industry analysts reckon that the new policy offers immense opportunity for the EV market, and will bring in foreign investment, boost domestic manufacturing, and offer consumers a wider range of electric vehicle options",
          "url": "https://www.moneycontrol.com/news/business/ev-policy-likely-to-attract-tesla-byd-vinfast-and-global-oems-claim-industry-analysts-12472791.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/03/Tesla-Outlet-652x435.jpg",
          "publishedAt": "2024-03-18T05:28:19Z",
          "content": "At a time when automakers like Mahindra and Mahindra (M&amp;M), Tata Motors, Hyundai Motor India Limited (HMIL), and MG Motor India (partly owned by JSW Group) are boosting its electric vehicle (EV) … [+4143 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "India Today"
          },
          "author": "Arvind Ojha",
          "title": "YouTuber Elvish Yadav admits to arranging snake venom at parties: Sources - India Today",
          "description": "Big Boss OTT winner and YouTuber Elvish Yadav has reportedly confessed to the police that he ordered snakes and snake venom for the rave parties",
          "url": "https://www.indiatoday.in/india/story/youtuber-elvish-yadav-snake-rave-party-noida-2516223-2024-03-18",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202403/man-who-flagged-elvish-yadavs-snakes-party-files-complaint-alleging-threats-111601321-16x9_1.jpg?VersionId=vNmGIV1jBl5vjYb2TpiFJffA1DE2S2oi",
          "publishedAt": "2024-03-18T05:19:42Z",
          "content": "Big Boss OTT winner and YouTuber Elvish Yadav has confessed to the police that he ordered snakes and snake venom for the rave parties, sources informed India Today TV on Monday.\r\nThe 26-year-old YouT… [+1185 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Moneycontrol"
          },
          "author": "Moneycontrol News",
          "title": "No crisis, hard to assess flows into small-caps: Quant MF's Sandeep Tandon on stress test - Moneycontrol",
          "description": "The stress test is a theoretical exercise and a good form of transparency that will give investors perspective about how liquid fund schemes are and the risks running in them, says founder and CIO of Quant MF.",
          "url": "https://www.moneycontrol.com/news/business/markets/no-crisis-hard-to-assess-flows-into-small-caps-quant-mfs-sandeep-tandon-on-stress-test-12478441.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/03/sandeep-tandon-770x433.jpg",
          "publishedAt": "2024-03-18T05:09:25Z",
          "content": "Sandeep Tandon, market veteran and founder and CIO of Quant Mutual Fund,  said the stress test on liquidity was only a theoretical exercise to assess liquidity in mutual fund schemes, but signals no … [+2888 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "NDTV News"
          },
          "author": null,
          "title": "\"Misogynistic\": Rahul Gandhi's \"Shakti\" Remark At Mumbai Rally Sparks Row - NDTV",
          "description": "In a war of words between the BJP and Congress ahead of the Lok Sabha elections, BJP leader Nalin Kohli on Monday criticized Congress leader Rahul Gandhi for his recent comments questioning the integrity of Electronic Voting Machines",
          "url": "https://www.ndtv.com/india-news/misogynistic-rahul-gandhis-shakti-remark-at-mumbai-rally-sparks-row-5260144",
          "urlToImage": "https://c.ndtvimg.com/2024-03/4ukbmlu8_rahul-gandhi_625x300_07_March_24.jpg",
          "publishedAt": "2024-03-18T05:00:18Z",
          "content": "Rahul Gandhi had raised concerns about the operation of EVMs.\r\nMumbai: In a war of words between the BJP and Congress ahead of the Lok Sabha elections, BJP leader Nalin Kohli on Monday criticized Con… [+2409 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Asia Times"
          },
          "author": "Gabriel Honrada",
          "title": "China building giant hypersonic railgun for space launches - Asia Times",
          "description": "In a hypersonic race for rapid-fire satellite-launching supremacy, China and the US are unveiling dueling futuristic technologies that could be crucial in",
          "url": "http://asiatimes.com/2024/03/china-building-giant-hypersonic-railgun-for-space-launches/",
          "urlToImage": "https://asiatimes.com/wp-content/uploads/2024/03/Spaceplane-China.jpg",
          "publishedAt": "2024-03-18T04:39:21Z",
          "content": "In a hypersonic race for rapid-fire satellite-launching supremacy, China and the US are unveiling dueling futuristic technologies that could be crucial in a war scenario where satellites are targeted… [+6922 chars]"
          },
          {
          "source": {
          "id": null,
          "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "140-foot asteroid to pass Earth at a close distance today, reveals NASA; Know how fast it is approaching - HT Tech",
          "description": "The orbit of a 140-foot asteroid is predicted to bring it to the closest point to Earth today, March 18. From size, speed to distance of approach, know all about this upcoming asteroid.",
          "url": "https://tech.hindustantimes.com/tech/news/140foot-asteroid-to-pass-earth-at-a-close-distance-today-reveals-nasa-know-how-fast-it-is-approaching-71710735745242.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2024/03/18/1600x900/g1b69efea58486d7510946e54_1708083615031_1710735929409.jpg",
          "publishedAt": "2024-03-18T04:35:36Z",
          "content": "Two asteroids passed Earth yesterday at the closest points in their orbit. Now, NASA has revealed that four more asteroids are expected to pass by Earth today, March 18. These space rocks often come … [+2013 chars]"
          },
          {
          "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
          },
          "author": "TIMESOFINDIA.COM",
          "title": "Russia: Vladimir Putin wins big amid massive 'Noon Against Putin' protests - The Times of India",
          "description": "On Sunday, thousands gathered for the symbolic 'Noon Against Putin' protests in anticipation of Vladimir Putin's anticipated reelection as President. Navalny's allies shared images of long queues forming for the protests. Due to Russia's extensive te",
          "url": "https://timesofindia.indiatimes.com/videos/toi-original/russia-vladimir-putin-wins-big-amid-massive-noon-against-putin-protests/videoshow/108575404.cms",
          "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-108575404,imgsize-102246.cms",
          "publishedAt": "2024-03-18T04:28:33Z",
          "content": "Mar 18, 2024, 09:58AM ISTSource: TOI.inOn Sunday, thousands gathered for the symbolic 'Noon Against Putin' protests in anticipation of Vladimir Putin's anticipated reelection as President. Navalny's … [+517 chars]"
          }
      ],
      totalNo : 0,
      i: 1,
      pageSize: 8,
      networkStatus : true,
      deployed : true
    };
  }

    async componentDidMount() {
      if(this.state.deployed===false){
      let url =this.state.u1 +`&category=${this.props.category ? this.props.category : 'sports'}&page=${this.state.i}&pageSize=${this.state.pageSize}/`;
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
  }
  capitalizer=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  fetchMoreData=async()=>{
    this.setState({i : (this.state.i)+1})
    let url = this.state.u1 +`&category=${this.props.category}&page=${this.state.i + 1}&pageSize=${this.state.pageSize}/`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTimeout(async()=>{
      this.setState({ articles: this.state.articles.concat(parsedData.articles)})
    },1000)
    document.title="News-"+this.capitalizer(this.props.category);
  }
  refr=async()=>{
    if(this.state.deployed === false){
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
          document.title="News-"+this.capitalizer(this.props.category);
        })
        .catch(e =>{
          this.setState({networkStatus: false});
        })
      },500)
    }
  }

  depl=()=>{
    // console.log(this.state.deployed)
    this.state.deployed ? this.setState({deployed : false}) : this.setState({deployed : true})
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
          <h3 className="text-center my-3">Trending News : {this.capitalizer(this.props.category)}</h3>
          {!this.state.deployed && <button style={{marginRight : "2vh" ,marginLeft: "2vh",borderRadius: "12vh",padding : "1vh"}} onClick={this.refr}>REFRESH</button>}          <div className="form-check form-switch d-flex justify-content-center align-items-center">
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
                />
          </div>
            );
          })}
          </div>

        }
        {!this.state.networkStatus && <div className='container my-3'>
          <h2 style={{color : 'red',textAlign : 'center',margin : '30px 0px 10px 0px'}}>Failed to fetch news</h2>
          <h4 style={{color : 'blue',textAlign : 'center',margin : '5px 0px 10px 0px'}}>Make sure you are connected to a wifi or mobile network</h4>
          <img src={r1} alt="Unavialable"/>
          </div>}
      </div>
    );
  }}

export default AllNews;
