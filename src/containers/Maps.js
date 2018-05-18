import React, {Component} from 'react';
import apiKey from '../../api/api.js';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

export class Maps extends Component {

    constructor() {
        super();
        this.state = {
            selectedPlace: {
                name: ""
            }
        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <Map google={this.props.google} zoom={14} style={style}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: apiKey.api,
})(Maps);