import React, { Component } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import RightNav from './components/RightNav';
import Feed from './components/Feed';

class App extends Component {    
  constructor() {
    super();
    this.state = {
      displayState: 1
    }
  }

  changeDisplayState(newState) {
    this.setState({
      ...this.state,
      displayState: newState
    });
  }

  render() {            
    return (      
      <div className="main">
        <LogSwitcher displayState={this.state.displayState}
                     changeDisplayState={this.changeDisplayState.bind(this)}/>        
      </div>      
    );
  }
}


const LogSwitcher = (props) => {
  switch(props.displayState) {
    case 0:
      return  (
        <Login changeDisplayState={props.changeDisplayState}/>
      )
    case 1: 
    default:
      return (
          <div>
          <Header changeDisplayState={props.changeDisplayState}/>
          <br />
          <br />
          <LeftNav />
          <Feed />         
          <RightNav />  
        </div>
      )
  }
  return null;
}
export default App;
