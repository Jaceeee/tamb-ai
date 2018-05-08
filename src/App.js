import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Feed from './components/Feed';

class App extends Component {    
  render() {            
    return (      
      <div className="main">
        <Header />
        <br />
        <br />
        <LeftNav />
        <Feed />           
      </div>      
    );
  }
}


const LogSwitcher = (props) => {
  switch(props.displayState) {

  }
}
export default App;
