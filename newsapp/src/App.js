import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
constructor(){
super();
this.state = {
  mode: 'light'
}
}

   toggleMode = ()=>{
   
    console.log("toole");
    if(this.state.mode === 'light'){
      this.setState({
        mode : 'dark'
      })
      console.log("toole1");
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
      // showAlert("Dark Mode Enable","success")
    }
    else if(this.state.mode === 'dark'){
      this.setState({
        mode : 'light'
      })
      console.log("toole2");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // showAlert("Light Mode Enable","success")

    }
  }

  render() {
    return (
      <>
      <Router>
        <NavBar mode={this.state.mode} toggleMode={this.toggleMode}></NavBar>
        <hr style={{margin: '0px'}} class="thick-line"/>
        <hr style={{margin: '0px'}} class="thick-line"/>
        <hr style={{margin: '0px'}} class="thick-line"/>

        {/* <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} /> */}
        <Routes>
          <Route exact path="/" element={<News key="general" mode={this.state.mode}  category="general" country="in" />}/>
          <Route exact path="/business" element={<News key="business" mode={this.state.mode}  category="business" country="in" />}/>
          <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode}  category="entertainment" country="in" />}/>
          <Route exact path="/health" element={<News key="health" mode={this.state.mode}  category="health" country="in" />}/>
          <Route exact path="/sciences" element={<News key="sciences" mode={this.state.mode}  category="sciences" country="in" />}/>
          <Route exact path="/sports" element={<News key="sports" mode={this.state.mode}  category="sports" country="in" />}/>
          <Route exact path="/technologys" element={<News key="technologys" mode={this.state.mode}  category="technologys" country="in" />}/>
                  
        </Routes>
        </Router>
      </>
    );
  }
}
