import React from 'react';
import download from '../../assets/images/download.jpg';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={download} alt="MyVoluneer" />
  </div>
);

export default logo;
