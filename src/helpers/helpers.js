import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'Don\'t be shy, tell us your username!';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Seriously?';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
