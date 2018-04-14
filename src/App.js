import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './containers/User';
import Place from './containers/Place';
import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      places: [],
      users: []
    };
  }

  componentDidMount() {
  }

  componentWillMount() {
    this.setState({
      places: [
        {id: 1, name: "Kawasan Falls", location: "Cebu", contact_number: "09171241723", type: "Ecological"},
        {id: 2, name: "Taoist Temple", location: "Cebu", contact_number: "09253451723",  type: "Religious"},
        {id: 3, name: "Maribago Resort", location: "Cebu", contact_number: "09809212323", type: "Resort"},
        {id: 4, name: "Silogan ni Gian", location: "Cebu", contact_number: "09171296723", type: "Restaurant"},
        {id: 5, name: "Plaza Independencia", location: "Cebu", contact_number: "09412241723", type: "Restaurant"},
      ],
      users: [
        {id: 1, first_name: "Juan Carlos", last_name: "Roldan", location: "Cebu", email: "anonymous@anonymous.com"},
        {id: 2, first_name: "John Caesar", last_name: "Patac", location: "Cebu", email: "anonymous2@anonymous.com"},
        {id: 3, first_name: "Paul Christian", last_name: "Kiunisala", location: "Cebu", email: "anonymous3@anonymous.com"},
        {id: 4, first_name: "Michael Loewe", last_name: "Alivio", location: "Cebu", email: "anonymous4@anonymous.com"}
      ],
      currentUser: {
        first_name: "",
        last_name: "",
        location: "UNK",
        email: "UND"
      }
    });
  }

  selectCurrentUser(user) {
      console.log(user.target.attributes["user_id"].nodeValue);
      this.setState({currentUser: this.state.users[user.target.attributes["user_id"].nodeValue-1]});
      // console.log(user.target.value);
  }

  render() {
    console.log("Hello",this.state);
    return (
      <div>
        <User users={this.state.users}
              setUser={this.selectCurrentUser.bind(this)}
              places={this.state.places}/>
        <h2>Current User:</h2>
        <p>{this.state.currentUser.first_name !== "" ? `${this.state.currentUser.last_name}, ${this.state.currentUser.first_name}` : ""}</p>
      </div>
    );
  }
}

export default App;
