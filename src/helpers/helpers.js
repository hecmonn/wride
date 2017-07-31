import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

export function setAuthToken(token){
    if(token){
        axios.defaults.headers.common['Auth'] = `Bearer ${token}`;
    } else {
        console.log('no token');
        delete axios.defaults.headers.common['Auth'];
    }
}

export function validateInput(data) {
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

export function prettyName(fname,lname){
    let capFname=fname.charAt(0).toUpperCase() + fname.slice(1);
    let capLname=lname.charAt(0).toUpperCase() + lname.slice(1);
    let fullName=`${capFname} ${capLname}`;
    return fullName;
}

export function initials (fname,lname){
    let capFname=fname.charAt(0).toUpperCase();
    let capLname=lname.charAt(0).toUpperCase();
    let initials=`${capFname}${capLname}`;
    return initials
}
