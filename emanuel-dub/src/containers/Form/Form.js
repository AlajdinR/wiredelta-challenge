import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import classes from './Form.css';
import Input from '../../components/UI/Input/Input';
import TextBlock from '../../components/Text/TextBlock';

class Form extends Component {
  state = {
    orderForm: {
      firstName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        label: 'First Name',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      lastName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        label: 'Last Name',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'denmark', displayValue: 'Denmark' },
            { value: 'sweeden', displayValue: 'Sweeden' },
            { value: 'norway', displayValue: 'Norway' },
            { value: 'finland', displayValue: 'Finland' },
          ],
        },

        label: 'Country',
        value: '',
        validation: {},
        valid: true,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        label: 'Street',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        label: 'Zip Code',
        value: '',
        validation: {
          required: true,
          minLength: 4,
          maxLength: 4,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
        },
        label: 'E-mail',
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      skills: {
        elementType: 'checkbox',
        label: 'Skills',
        validation: {},
      },
      gender: {
        elementType: 'radio',
        label: 'Gender',
        value: 'male',
      },
      telephone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
        },
        label: 'Telephone No.',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      comments: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
        },
        label: 'Comments and other relevant Experiences',
        value: '',
        validation: {},
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  submitHandler = event => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }

    formData['skills'] = [];
    for (let checkboxElemendIdentifier in this.props.skillState) {
      if (this.props.skillState[checkboxElemendIdentifier].isChecked) {
        formData['skills'].push([checkboxElemendIdentifier]);
      }
    }

    console.log(formData);
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value =
      inputIdentifier === 'gender' ? event : event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );

    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementsArrayColumn1 = [];
    const formElementsArrayColumn2 = [];
    for (let key in this.state.orderForm) {
      if (
        [
          'firstName',
          'country',
          'street',
          'zipCode',
          'email',
          'skills',
        ].includes(key)
      ) {
        formElementsArrayColumn1.push({
          id: key,
          config: this.state.orderForm[key],
        });
      } else {
        formElementsArrayColumn2.push({
          id: key,
          config: this.state.orderForm[key],
        });
      }
    }

    let form = (
      <form onSubmit={this.submitHandler}>
        <div className={classes.formContainer}>
          <div className={classes.flexItem}>
            {formElementsArrayColumn1.map(formElement => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event =>
                  this.inputChangedHandler(event, formElement.id)
                }
                label={formElement.config.label}
              />
            ))}
          </div>
          <div className={classes.flexItem}>
            {formElementsArrayColumn2.map(formElement => (
              <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={event =>
                  this.inputChangedHandler(event, formElement.id)
                }
                label={formElement.config.label}
              />
            ))}
          </div>
        </div>

        <Button btnType="Success" disabled={!this.state.formIsValid}>
          SUBMIT
        </Button>
      </form>
    );

    return (
      <div className={classes.Form}>
        <TextBlock>
          So tell us a bit about yourself filling up the form bellow:
        </TextBlock>
        {form}
      </div>
    );
    // return form;
  }
}

const mapStateToProps = state => {
  return {
    skillState: state,
  };
};

//connect(mapStateToProps)(Form)

export default connect(mapStateToProps)(Form);
