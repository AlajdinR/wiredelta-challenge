import React from 'react';

import classes from './Input.css';
import CheckboxContainer from './checkboxes/CheckboxContainer';
import RadioButtons from './radiobuttons/RadioButtons';

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  const divClasses = [classes.Input];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  if (props.label === 'Last Name') {
    divClasses.push(classes.Kot);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          rows={11}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    case 'checkbox':
      inputElement = <CheckboxContainer />;
      break;
    case 'radio':
      inputElement = (
        <RadioButtons changed={props.changed} selected={props.value} />
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={divClasses.join(' ')}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
