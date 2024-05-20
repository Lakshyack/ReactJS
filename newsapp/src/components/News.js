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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page}&pageSize=9`;
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
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page}&pageSize=9`;
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
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page - 1}&pageSize=9`;
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

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page + 1}&pageSize=9`;
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
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page}&pageSize=9`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
 
      
    });

    
  };
  

  render() {
    let { mode } = this.props;
    let { articles } = this.state;

    if (articles.length === 0) {
      return <div>Loading...</div>; // Or any loading indicator
    }

    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsPigeon - Platform for News</h2>
          this.state.
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
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
