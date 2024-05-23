import React, { Component } from 'react'
import Second  from './img/152.png';
import insta from './img/insta.svg'
import twitter from './img/Twitter.svg'
import Github from './img/GitHub.svg'

export default class Footer extends Component {
    render() {
        let {mode } = this.props;
      return (
        <>
        <div  style={{position:"relative",bottom:"0",backgroundColor: mode === 'dark'? '#202020' : '#c1c1c1',color: mode === 'dark'? '#c1c1c1' : '#202020',  padding: '5px', marginTop:"20px ",zIndex: '1000', height:"50",
          width:"100%", borderRadius:"10px",display:"flex",}}>
            <div className="container" style={{display:"flex",  gap:"5px",justifyContent: "center"}}>
           <div className="text-center" style={{display:"flex",  gap:"5px"}} >
           <a className="navbar-brand" href="/about"><img style={{ width: "40px", height: "40px", borderRadius: '50%' }} src={Second} alt="vad" /></a>
            <h3>Developed By @Lakshya</h3>
            <h2>/</h2>
            </div>
            <div className="" style={{right:"0",padding:"6px",position:"relative"}}>
            <a className="navbar-brand" href="/about"><img style={{ width: "25px", height: "25px", borderRadius: '50%' }} src={insta} alt="vad" /></a>
            <a className="navbar-brand" href="/about"><img style={{ width: "25px", height: "25px", borderRadius: '50%' }} src={twitter} alt="vad" /></a>
            <a className="navbar-brand" href="/about"><img style={{ width: "25px", height: "25px", borderRadius: '50%' }} src={Github} alt="vad" /></a>
            </div>
            </div>

        </div>
        </>
      )
    }
  }
  
