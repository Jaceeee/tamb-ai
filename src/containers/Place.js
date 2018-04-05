import React, {Component} from 'react';

function PlacesList(props) {
  const places = props.places;
  const placeItems = places.map((place) => {
    return <PlaceItem value={place.name}
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
      console.log(place.target.attributes["place_id"].nodeValue);
      this.setState({details: this.props.places[place.target.attributes["place_id"].nodeValue - 1]});
      console.log(this.state.details);
    }

    render() {
      console.log(this.state.details);
      return(
        <div>
          <h3>
            Select Place
          </h3>
          <PlacesList places={this.props.places}
                      displayDetails={this.displayDetails.bind(this)}/>
          <div>
            {this.state.details ? `${this.state.details.name}, ${this.state.details.location}: ${this.state.details.type}: Contact at ${this.state.details.contact_number}`
                     : "Hey"}
          </div>
        </div>
      );
    }
}

export default Place;
