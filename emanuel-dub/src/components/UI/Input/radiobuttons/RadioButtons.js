import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

import classes from './RadioButtons.css';

const RadioButtons = props => {
  return (
    <RadioGroup
      name="gender"
      selectedValue={props.selected}
      onChange={props.changed}
      className={classes.RadioGroup}
    >
      <label className={classes.container}>
        <Radio value="male" />
        Male
        <span className={classes.checkmark} />
      </label>
      <label className={classes.container}>
        <Radio value="female" />
        Female
        <span className={classes.checkmark} />
      </label>
    </RadioGroup>
  );
};

export default RadioButtons;
