import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

            
const MapWithADirectionsRenderer = compose(
  withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCO3b5rD3tihXWtAHp_R6GD35qsj9OC4r8&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
    lifecycle({
        componentWillUnmount() {

        },
        componentDidMount() {
            const google=window.google;
            const DirectionsService = new google.maps.DirectionsService();
            var originlat = null;
            var originlng = null;            

            navigator.geolocation.getCurrentPosition(
                (position) => {                    
                    originlat = position.coords.latitude;
                    originlng = position.coords.longitude;
                                        

                    DirectionsService.route({
                        origin: new google.maps.LatLng(originlat, originlng),
                        destination: new google.maps.LatLng(this.props.defaultCenter.lat, this.props.defaultCenter.lng),
                        travelMode: google.maps.TravelMode.DRIVING,
                    }, (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                          this.setState({
                              directions: result,
                          });
                        } else {
                          console.error(`error fetching directions ${result}`);
                        }
                    });
                },
                ( error) => error = error.message,
                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },    
            )
        }
    })
  )(props =>
  <GoogleMap
      defaultZoom={props.defaultZoom}
      defaultCenter= {props.defaultCenter} //{new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    <Marker position={props.defaultCenter} />
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);


class Maps extends Component {      
  render() {        
    return (
        <MapWithADirectionsRenderer defaultCenter={this.props.focus}        
                                    defaultZoom={15}
                                    originLng={this.props.originLng}
                                    originLat={this.props.originLat}/>
    )
  }
}

export default Maps;