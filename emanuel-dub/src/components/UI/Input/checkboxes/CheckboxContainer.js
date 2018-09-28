import React from 'react';
import Aux from '../../../../hoc/Auxx/Auxx';

import classes from './CheckboxContainer.css';
import * as actionTypes from '../../../../store/actions';
import { connect } from 'react-redux';

class CheckboxContainer extends React.Component {
  handleChange(e, id) {
    let value = e.target.checked;
    switch (id) {
      case 'certifiedPlumber':
        this.props.plumberChanged(value);
        break;
      case 'carpentryExperience':
        this.props.carpentryChanged(value);
        break;
      case 'certifiedElectrician':
        this.props.electricianChanged(value);
        break;
      case 'bartendingExperience':
        this.props.bartendingChanged(value);
        break;
      case 'foodHygiene':
        this.props.foodChanged(value);
        break;
      case 'firstAid':
        this.props.firstAidChanged(value);
        break;
      case 'forkLiftDrive':
        this.props.forkLiftChanged(value);
        break;
      case 'driversLicence':
        this.props.driversChanged(value);
        break;
      default:
        this.props.plumberChanged(false);
        this.props.carpentryChanged(false);
        this.props.electricianChanged(false);
        this.props.bartendingChanged(false);
        this.props.foodChanged(false);
        this.props.firstAidChanged(false);
        this.props.forkLiftChanged(false);
        this.props.driversChanged(false);
        break;
    }
  }

  render() {
    const mapHolder = [];
    for (let key in this.props.skills) {
      mapHolder.push({
        id: key,
        config: this.props.skills[key],
      });
    }

    const checkbox = mapHolder.map(item => (
      <label key={item.id} className={classes.container}>
        {item.config.label}
        <input
          type="checkbox"
          defaultChecked={item.config.isChecked}
          onClick={event => this.handleChange(event, item.id)}
        />
        <span className={classes.checkmark} />
      </label>
    ));

    return <Aux className={classes.checkBoxGroup}>{checkbox}</Aux>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    plumberChanged: val =>
      dispatch({ type: actionTypes.CERTIFIED_PLUMBER, payload: val }),
    carpentryChanged: val =>
      dispatch({ type: actionTypes.CARPENTRY_EXPERIENCE, payload: val }),
    electricianChanged: val =>
      dispatch({ type: actionTypes.CERTIFIED_ELECTRICIAN, payload: val }),
    bartendingChanged: val =>
      dispatch({ type: actionTypes.BARTENDING_EXPERIENCE, payload: val }),
    foodChanged: val =>
      dispatch({ type: actionTypes.FOOD_HYGIENE, payload: val }),
    firstAidChanged: val =>
      dispatch({ type: actionTypes.FIRST_AID, payload: val }),
    forkLiftChanged: val =>
      dispatch({ type: actionTypes.FORKLIFT_DRIVE, payload: val }),
    driversChanged: val =>
      dispatch({ type: actionTypes.DRIVERS_LICENCE, payload: val }),
  };
};

const mapStateToProps = state => {
  return {
    skills: state,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxContainer);
