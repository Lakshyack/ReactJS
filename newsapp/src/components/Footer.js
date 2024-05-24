import React, { Component } from 'react'
import Second  from './img/152.png';
import Insta from './img/Insta.jsx'
import Twitter from './img/Twitter.jsx'
import Github from './img/GitHub.jsx'

export default class Footer extends Component {
    render() {
        let {mode } = this.props;
      return (
        <>
          <div  style={{position:"relative",bottom:"0",backgroundColor: mode === 'dark'? '#202020' : '#c1c1c1',color: mode === 'dark'? '#c1c1c1' : '#202020',  padding: '5px', marginTop:"20px",zIndex: '1000', height:"60px",
              width:"100%", borderRadius:"10px",display:"flex",}}>
                <div className="container" style={{display:"flex",  gap:"5px",justifyContent: "center",marginTop:"10px"}}>
              <div className="text-center" style={{display:"flex",  gap:"5px"}} >
              <a className="navbar-brand" href="/about"><img style={{ width: "40px", height: "40px", borderRadius: '50%' }} src={Second} alt="vad" /></a>
                <h3>Developed By @Lakshya</h3>
                <h2>/</h2>
                </div>
                <div className="" style={{ display:"flex", gap:"2px",right:"0",padding:"6px",position:"relative"}}>
                <a className="navbar-brand" href="/about"><Insta mode={mode}/></a>            
                <a className="navbar-brand" href="/about"><Twitter mode={mode}/></a>
                <a className="navbar-brand" href="/about"><Github mode={mode}/></a>
                </div>
                </div>

        </div>
        </>
        )
  }
}