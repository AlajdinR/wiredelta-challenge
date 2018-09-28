import React from 'react';
import classes from './TextBlock.css';

const TextBlock = props => {
  const output = props.bold ? (
    <div className={classes.MainTextContainer}>
      <h1 className={classes.MainText}>{props.children}</h1>
    </div>
  ) : (
    <div>
      <h3 className={classes.SubText}>{props.children}</h3>
    </div>
  );
  return output;
};

export default TextBlock;
