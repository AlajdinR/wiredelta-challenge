import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import TextBlock from '../../components/Text/TextBlock';

import classes from './Contact.css';


import Aux from '../../hoc/Auxx/Auxx';

class Contact extends Component {
  render() {
    const style = {
      width: '60%',
      height: '50%',
    };
    return (
      <Aux className={classes.MapStyle}>
        <Map
          google={this.props.google}
          style={{
            width: '50%',
            height: '50%',
          }}
          className={classes.MapStyle}
          zoom={14}
          initialCenter={{
            lat: 55.7044597,
            lng: 12.5530405,
          }}
        >
          <Marker
            title={'Exact Location of Wiredelta'}
            name={'SOMA'}
            position={{ lat: 55.7044597, lng: 12.5530405 }}
          />
        </Map>
        <TextBlock>
          Phone: +39 71 629 647; Address: Titangade 11, 2200 København
        </TextBlock>
      </Aux>
    );
  }
}
//AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
})(Contact);
