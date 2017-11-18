import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google}
           style={{width: '100%', height: '300px', top: 0, left: 0}}
           initialCenter={{
             lat: 14.857142,
             lng: 120.382439
           }}
           zoom={14}>
        <Marker name={'Current location'}
                position={{lat: 14.857142, lng: 120.382439}}
                title={'You can find me here'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDleZPkR4Vz9wG5kjcXvBFV50F77HAdF9M')
})(MapContainer)