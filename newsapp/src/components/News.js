import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general"
  }

  static propTypes ={
    country: PropTypes.string,
    category: PropTypes.string,
   

  }

constructor() {
  super();
 
  this.state = {
    articles: [],
    loading: false,
    page: 1

  }
}

  async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=1&pageSize=12`;
  let data =await fetch(url);
  let parsedata = await data.json()
  this.setState({articles : parsedata.articles,totalResults: parsedata.totalResults})
}

priviousPage = async()=> {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page-1}&pageSize=12`;
  let data =await fetch(url);
  let parsedata = await data.json()
  this.setState({
    page : this.state.page-1,
    articles : parsedata.articles
  })
}
nextPage = async()=> {
  if(this.state.page+1 > Math.ceil(this.state.totalResults/12)){

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78f041b112a94a118be18b741982dd68&page=${this.state.page +1}&pageSize=12`;
    let data =await fetch(url);
    let parsedata = await data.json()
  
  this.setState({
    page : this.state.page+1,
    articles : parsedata.articles
  
  })
  }
}
  render() {
    let { mode} = this.props;
    return (
      <>
      <div className="container my-3">
        <h2 className={"text-center"}>NewsPigeon - Platform for News</h2>
        
         <div className="row">
         {this.state.articles.map((element)=>{
         return  <div className="col-md-4" key={element.url}> 
         <NewsItem mode={mode}  title={element.title?element.title.slice(0,45): "Description Not add"} description={element.description?element.description.slice(0,88): "Description Not add"} imageUrl={element.urlToImage?element.urlToImage : "https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png"} newsUrl={element.url}/>
       </div>
        })}
         
         </div>
         <div className={"container d-flex justify-content-between"}>
         <button disabled={this.state.page<=1} type="button" className={"btn btn-dark"} onClick={this.priviousPage}>Privious</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/12)}   type="button" className={"btn btn-dark"} onClick={this.nextPage}>Next</button>

         </div>
      </div>
      </>
    )
  }
}
