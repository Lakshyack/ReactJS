import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

import TextForm from './components/TextForm';


export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
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
      document.body.style.backgroundColor = '#202020';
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
     <div className="main" style={{height:"100%"}}>
     <Router>
        <NavBar mode={this.state.mode} toggleMode={this.toggleMode}></NavBar>
        <hr style={{margin: '0px'}} class="thick-line"/>
        <hr style={{margin: '0px'}} class="thick-line"/>
        <hr style={{margin: '0px'}} class="thick-line"/>


        {/* <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} /> */}
        <Routes>
          <Route exap path='/textform' element={<TextForm mode={this.state.mode}/>}/>
          <Route exact path="/about" element={<About  mode={this.state.mode} />} />
          <Route exact path="/" element={<News apikey={this.apikey} key="general" mode={this.state.mode}  category="general" country="in" />}/>
          <Route exact path="/business" element={<News apikey={this.apikey} key="business" mode={this.state.mode}  category="business" country="in" />}/>
          <Route exact path="/entertainment" element={<News apikey={this.apikey} key="entertainment" mode={this.state.mode}  category="entertainment" country="in" />}/>
          <Route exact path="/health" element={<News apikey={this.apikey} key="health" mode={this.state.mode}  category="health" country="in" />}/>
          <Route exact path="/science" element={<News apikey={this.apikey} key="science" mode={this.state.mode}  category="science" country="in" />}/>
          <Route exact path="/sports" element={<News apikey={this.apikey} key="sports" mode={this.state.mode}  category="sports" country="in" />}/>
          <Route exact path="/technology" element={<News apikey={this.apikey} key="technology" mode={this.state.mode}  category="technology" country="in" />}/>
                  
        </Routes>
        <Footer mode={this.state.mode}/>

        </Router>
     </div>
      </>
    );
  }
}
