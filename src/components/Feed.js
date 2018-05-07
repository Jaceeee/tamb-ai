import React, { Component } from 'react';
import User from '../containers/User';
import Place from '../containers/Place';
import AddPlace from './AddPlace';
import WriteComment from './WriteComment';
import Comments from '../containers/Comment';
import FeedItem from '../containers/FeedItem';

class Feed extends Component {
	constructor() {
    super();
    this.state = {
      currentUser: {},
      currentPlace: {},
      places: [],
      users: [],
      currentAction: 0,
      comments: [
        {id: 1, entries: ["Hello world"]},
        {id: 2, entries: ["Hello crush"]},
        {id: 3, entries: ["Hello friend"]},
        {id: 4, entries: ["Hello phils"]},
        {id: 5, entries: ["Hello sleep"]}
      ],
      commentsVisibility: 0
    };
  }

  componentDidMount() {
    
  }

  componentWillMount() {
    this.setState({
      places: [
        {id: 1, placeName: "Kawasan Falls", location: "Cebu", contactNumber: "09171241723", type: "Ecological"},
        {id: 2, placeName: "Taoist Temple", location: "Cebu", contactNumber: "09253451723",  type: "Religious"},
        {id: 3, placeName: "Maribago Resort", location: "Cebu", contactNumber: "09809212323", type: "Resort"},
        {id: 4, placeName: "Silogan ni Gian", location: "Cebu", contactNumber: "09171296723", type: "Restaurant"},
        {id: 5, placeName: "Plaza Independencia", location: "Cebu", contactNumber: "09412241723", type: "Restaurant"},
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
      },
      currentPlace: {
        placeName: ""
      }
    });
  }

  selectCurrentUser(user) {    
    this.setState({currentUser: this.state.users[user.target.attributes["user_id"].nodeValue-1]});
    // console.log(user.target.value);
  }

  selectCurrentPlace(place) {
    this.setState({currentPlace: this.state.places[place.target.attributes["place_id"].nodeValue-1]}); 
  }

  createNewPlace(place) {
    let places = this.state.places;
    places.push(place);
    this.setState({...this.state, places});
  }

  addComment(comment) {    
    let comments = this.state.comments;
    comments[this.state.currentPlace.id - 1].entries.push(comment);
    this.setState({...this.state, comments});    
  }

  changeAction() {
    if(this.state.currentAction == 1) {
      this.setState({...this.state, currentAction: 0});
    } else {
      this.setState({...this.state, currentAction: 1});
    }
  }

  changeVisibility() {
    if(this.state.commentsVisibility == 1) {
      this.setState({...this.state, commentsVisibility: 0});
    } else {
      this.setState({...this.state, commentsVisibility: 1});
    }
  }
  getActionButtonText() {
    switch(this.state.currentAction) {
      case 0:
        return "Write Comment";
      case 1:
        return "Add Place";
    }
    return "";
  }

  getVisibilityButtonText() {
    switch(this.state.commentsVisibility) {
      case 0:
        return "See comments";
      case 1: 
        return "Hide comments";
    }
    return "";
  }


	render () {		

		return (
			<div className="col-sm-7" style={{backgroundColor: "lavenderblush"}}>
				<FeedsList  places={this.state.places}/>

				<User users={this.state.users}
		              setUser={this.selectCurrentUser.bind(this)}
		              places={this.state.places}/>
		      <h2>Current User:</h2>        
		      <p>{this.state.currentUser.first_name !== "" ? `${this.state.currentUser.last_name}, ${this.state.currentUser.first_name}` : "No user currently selected"}</p>

		      <h2>Current Place</h2>
		      <p>{this.state.currentPlace.placeName !== "" ? `${this.state.currentPlace.placeName}` : "No place currently selected"} </p>
		      <Place places={this.state.places}
		             setPlace={this.selectCurrentPlace.bind(this)}/>     
		      <button onClick={this.changeAction.bind(this)}>{this.getActionButtonText()}</button>

		      <RenderAction currentAction={this.state.currentAction}
		                    currentPlace={this.state.currentPlace}
		                    createNewPlace={this.createNewPlace.bind(this)} 
		                    places={this.state.places}
		                    currentSelectedPlace={this.state.currentPlace}
		                    addComment={this.addComment.bind(this)}/>

		      <br />
		      <button onClick={this.changeVisibility.bind(this)}>{this.getVisibilityButtonText()}</button>
		      
		      <SeeComments commentsVisibility={this.state.commentsVisibility}
		                   comments={this.state.comments}                     
		                   currentPlace={this.state.currentPlace}/> 
	    </div>
    )
	}
}

const RenderAction = (props) => {
  switch(props.currentAction) {
    case 0:
      return (<AddPlace createNewPlace={props.createNewPlace}
                  places={props.places}/>);
    case 1:
      return (<WriteComment currentPlace={props.currentPlace}
                            addComment={props.addComment}/>)
  }

  return null;
}

const SeeComments = (props) => {
  switch(props.commentsVisibility) {
    case 0: 
      return null;
    case 1: 
      return <Comments comments={props.comments[props.currentPlace.id - 1]}/>
  }
}

function FeedsList(props) {
	const feed = props.places;
	const feedItems = feed.map((feedItem) => {
		return (
			<FeedItem name={feedItem.placeName} 
								key={feedItem.id.toString()} />
		);
	});

	return (
		<ul>			
			{feedItems}
		</ul>
	)
}

export default Feed;