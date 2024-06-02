import React, { Component } from 'react';

export default class NewsItem extends Component {


  componentDidMount() {
    // Simulating a delay to show the card loading effect
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 500); // Adjust the delay time as needed
  }

  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date } = this.props;
  
    return (
      <>
        <div
          className={`card my-3`}
          data-aos="slide-right" 
           
        >
          <img
            src={
              imageUrl !==
              'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png'
                ? imageUrl
                : 'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png'
            }
            className="card-img-top"
            style={{ width: 'auto', height: '15rem' }}
            alt=""
            onError={(e) =>
              (e.target.src =
                'https://cdn.pixabay.com/photo/2023/12/14/12/51/ai-generated-8448864_1280.png')
            }
          />

          <div
            className="card-body"
            data-aos="zoom-in"
            style={{
              backgroundColor: mode === 'dark' ? '#202020' : 'white',
              color: mode === 'dark' ? 'white' : 'black',
              height: "265px"
            }}
          >
            <h5 className="card-title">{title}..</h5>
            <p className="card-text"
            style={{height:"60px"}}>{description}...</p>
            <p className="card-text" style={{height:"50px"}}>
              <small
                style={{
                  backgroundColor: mode === 'dark' ? '#202020' : 'white',
                  color: mode === 'dark' ? 'white' : 'black',
                  
                
                }}
              >
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <div className="text-center" >
              <a
                href={newsUrl}
                target="blank"
                className={`btn btn-sm btn-${
                  mode === 'dark' ? 'primary' : 'outline-primary'
                }`}
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
