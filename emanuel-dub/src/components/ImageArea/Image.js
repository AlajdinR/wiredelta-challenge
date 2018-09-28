import React from 'react';
import classes from './Image.css';

const Image = props => {
  return (
    <div className={classes.ImageContainer}>
      <img src={props.source} className={classes.Image} alt={''} />
      <div className={classes.TextContainer} />

      <h3 className={classes.Text1}>{props.line1}</h3>
      <h3 className={classes.Text2}>{props.line2}</h3>
      <h3 className={classes.Text3}>{props.line3}</h3>
    </div>
  );
};

export default Image;
