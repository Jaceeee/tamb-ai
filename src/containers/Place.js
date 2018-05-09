import React, {Component} from 'react';

function PlacesList(props) {
  const places = props.places;  
  const placeItems = places.map((place) => {    
    return <PlaceItem value={place.placeName}
                     key={place.id.toString()}
                     displayDetails={props.displayDetails.bind(this)}
                     place_id={place.id}/>
  });

  return(
    <div>
      <select>
        {placeItems}
      </select>
    </div>
  );
}

function PlaceItem(props) {
  return(<option place_id={props.place_id} onClick={props.displayDetails.bind(this)}>{props.value}</option>);
}

class Place extends Component {
    constructor() {
      super();
      this.state = {
        places: [],
        details: {}
      }
    }

    componentWillMount() {
      this.setState({
        details: {
          name: "",
          location: "",
          type: "",
          contact_number: ""
        }
      })
    }

    displayDetails(place) {      
      this.setState({details: this.props.places[place.target.attributes["place_id"].nodeValue - 1]});      
      this.props.setPlace(place);
    }

    render() {      
      return(
        <div>
          <h3>
            Select Place
          </h3>
          <PlacesList places={this.props.places}
                      displayDetails={this.displayDetails.bind(this)}/>
          <br />
          <div>
            {this.state.details.placeName !== "" ? `${this.state.details.placeName}, ${this.state.details.location}: ${this.state.details.type}: Contact at ${this.state.details.contactNumber}`
                     : "No place currently selected"}
          </div>
        </div>
      );
    }
}

export default Place;
