import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"



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

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0 // Initialize totalResults here
    };
  }
  async updateNews () {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=9`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articlesL:  parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,

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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  previousPage = async () => {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  nextPage = async () => {
    try {
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
        // Handle case when trying to go beyond available pages
        return;
      }

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=9`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchMoreData = async () => {
    // Add a delay of 2 seconds before proceeding
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



  render() {
    let { mode } = this.props;
    let { articles } = this.state;

    if (articles.length === 0) {
      return <Spinner/>; // Or any loading indicator
    }

    return (
      <>
        <div className="container" style={{marginTop:"10px"}}>
        {/* <span style={{ height:"40px",width:"45px", marginTop:'20px'}} class="badge rounded-pill text-bg-primary"  id="hoverSpan"> <img style={{left:"20px", width: "30px", height: "30px", borderRadius: '30%', border:"2px solid black" }} src={svg} alt="" />
        <div id="additionalText" class="hiddenText">Additional text here</div>
       </span> */}

          <h2 className="text-center"><strong>NewsPigeon -  Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</strong></h2>

       
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          
        >
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
          </InfiniteScroll>
         
        </div>
      </>
    );
  }
}
