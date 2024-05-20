import React, { Component } from 'react'


export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl,mode,author,date } = this.props;
    return (
      <>
        <div className="card my-3" >
        <img 
    src={imageUrl !== 'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png' ? imageUrl : 'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png'} 
    className="card-img-top" 
    style={{width:"auto", height: "15rem"}} 
    alt="" 
    onError={(e) => e.target.src = "https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png"} 
/>

          <div className="card-body" style={{backgroundColor: mode === 'dark'? 'black' : 'white',color: mode === 'dark'? 'white' : 'black'}}>
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author? "Unknown" : author } on {new Date(date).toGMTString()}</small></p>
            <div className="text-center">

            <a href={newsUrl} target='blank' className={`btn btn-sm btn-${mode === 'dark'? 'primary' : 'outline-primary'}`}>Read More</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  
}
  