import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Add this import statement
import first from './img/first.png';
import Home from './img/Home.jsx';
import Aboutus from './img/Aboutus.jsx';
import Bussiness from './img/Bussiness.jsx';
import Entertainment from './img/Entertainment.jsx';
import Health from './img/Health.jsx';
import Science from './img/Science.jsx';
import Tech from './img/Technology.jsx';
import Sport from './img/Sports.jsx';
import Category from './img/Category.jsx'
import Text from './img/Text.jsx'




export default class NavBar extends Component {
  static propTypes = {
    toggleMode: PropTypes.func,
    mode: PropTypes.string,
  };

  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}
        style={{ position: 'sticky', top:"0", background: 'yellow', padding: '5px', zIndex: '1000', height:"50", width:"100%"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/about"><img style={{ width: "40px", height: "40px", borderRadius: '50%' }} src={first} alt="vad" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li  className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" aria-current="page" to="/"><Home  mode={this.props.mode}/>Home</Link>
                </li>
                <li  className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" aria-current="page" to="/TextForm"><Text  mode={this.props.mode}/>TextUtils</Link>
                </li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/about"><Aboutus mode={this.props.mode}></Aboutus> About Us</Link></li>
                
             
                  <li className="nav-item dropdown">
          <Link style={{display:"flex",gap:"2px"}} className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Category  mode={this.props.mode}/>
          News Categories

          </Link>
          <ul className="dropdown-menu" style={{backgroundColor: this.props.mode === 'dark'? '#202020' : 'white',color: this.props.mode === 'dark'? 'white' : 'black'}}>
          <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/Business"><Bussiness  mode={this.props.mode}/> Business</Link></li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/Entertainment"><Entertainment  mode={this.props.mode}/>Entertainment</Link></li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/health"><Health  mode={this.props.mode}/> health</Link></li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/science"><Science  mode={this.props.mode}/> Sciences</Link></li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/sports"><Sport  mode={this.props.mode}/> Sports</Link></li>
                <li className="nav-item">
                  <Link style={{display:"flex",gap:"2px"}} className="nav-link active" to="/technology"><Tech  mode={this.props.mode}></Tech>Technology</Link></li>
                 
          </ul>
        </li>

              </ul>
              
              <div className="form-check form-switch" style={{position:'relative', marginLeft: 'auto'}}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={this.props.toggleMode} id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{marginBottom:"5px"}}> Dark Mode {this.props.mode === 'dark' ? 'Disable': " Enable"}</label>
            </div>
            </div>
            
          </div>
        </nav>
      </>
    )
  }
}
