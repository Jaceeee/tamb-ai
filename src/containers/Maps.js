import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

var dest = {
    latitude: 10.3186,
    longitude: 123.9005
}    

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
            componentDidMount() {
                const google=window.google;
                const DirectionsService = new google.maps.DirectionsService();
                var originlat = null;
                var originlng = null;
                var error = null;

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        originlat = position.coords.latitude;
                        originlng = position.coords.longitude;
                        error = null;

                        DirectionsService.route(
                        {
                            origin: new google.maps.LatLng(originlat, originlng),
                            destination: new google.maps.LatLng(dest.latitude, dest.longitude),
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
                    (error) => error = error.message,
                    { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },    
                )
            }
        })
    )(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter= {{lat: -34.397, lng: 150.644}} 
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
    
);

class Maps extends Component {    
   
    componentDidUpdate() {
        dest.latitude = this.props.location.latitude;
        dest.longitude = this.props.location.longitude;       

        console.log(dest.latitude + " this is dest latitude");
        console.log(dest.longitude + " this is dest longitude");
    }

    render() {
        return (
            <MapWithADirectionsRenderer />
        )
    }
}

export default Maps;
