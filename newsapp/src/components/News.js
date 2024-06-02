import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
// import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"
import Typed from 'typed.js'; // Import Typed.js

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    totalResults: 0
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  };

  constructor() {
    super();
  
    this.headlineRef = React.createRef();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0 // Initialize totalResults here
    };
  }
  nextPage = async()=> {
    if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){
  
    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page +1}&pageSize=12`;
      let data =await fetch(url);
      let parsedata = await data.json()
      window.scrollTo({ top: 0 });
    this.setState({
      page : this.state.page+1,
      articles : parsedata.articles
    
    })
    }
  }
  
  priviousPage = async()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page-1}&pageSize=12`;
    let data =await fetch(url);
    let parsedata = await data.json()
    window.scrollTo({ top: 0 });
    this.setState({
      page : this.state.page-1,
      articles : parsedata.articles
    })
  }

  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      });
      this.initTyped(); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchMoreData = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=9`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: true
    });
  };

  initTyped() {
    const options = {
      strings: [`Top ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines`],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };
    this.typed = new Typed(this.headlineRef.current, options);
  }

  render() {
    let { mode } = this.props;
    let { articles } = this.state;

    if (articles.length === 0) {
      return <Spinner/>; // Or any loading indicator
    }

    return (
      <>
        <div className="container" style={{marginTop:"10px"}}>
          <h2 className="text-center"><strong>NewsPigeon - </strong><span className='headline' ref={this.headlineRef}></span></h2>
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        mode={mode}
                        author={element.author}
                        date={element.publishedAt}
                        title={element.title ? element.title.slice(0, 45) : 'Description Not add'}
                        description={element.description ? element.description.slice(0, 88) : 'Description Not add'}
                        imageUrl={element.urlToImage ? element.urlToImage : 'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png'}
                        newsUrl={element.url}
                      />
                    </div>
                  )
                })}
              </div>
              
            </div>
        
            <div className={"container d-flex justify-content-between"}>
         <button disabled={this.state.page<=1} type="button" className={"btn btn-dark"} onClick={this.priviousPage}>Privious</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/12)}   type="button" className={"btn btn-dark"} onClick={this.nextPage}>Next</button>

         </div>

        </div>
      </>
    );
  }
}
