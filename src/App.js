import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Feed from './components/Feed';

class App extends Component {
  render() {        
    return (
      <div className="container-fluid">
        <div id="mainpage">
          <div className="row">
            <div className="main">
              <Header />
              <br />
              <br />              
              <LeftNav />            
              <Feed />              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
