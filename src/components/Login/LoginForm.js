import React from 'react';
import TextFieldGroup from '../../helpers/TextFieldGroup';
import {validateInput,setAuthToken} from '../../helpers/helpers';
import { connect } from 'react-redux';
import { login,validateAuth } from '../../actions/authActions';
import {Link, Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
      redirect: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const {identifier,password}=this.state;
    const { errors, isValid } = validateInput({identifier,password});

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state)
      .then(
          r=>{
              if(r.data.access){
                  const token=r.data.token;
                  localStorage.setItem('token',token);
                  setAuthToken(token);
                  let decodedToken=jwtDecode(token);
                  this.props.validateAuth(decodedToken);
                  this.setState({isLoading:false,redirect:true});
                  window.location.reload();
              }
              else {
                  const {errors}=r.data;
                  this.setState({errors,isLoading:false})
              }
          }
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading, redirect} = this.state;
    return (
        !redirect?
            <div>
              <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  field="identifier"
                  value={identifier}
                  error={errors.identifier}
                  onChange={this.onChange}
                  className="login-input"
                  placeholder="Username"
                />

                <TextFieldGroup
                  field="password"
                  value={password}
                  error={errors.password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  className="login-input"
                />
                { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                {isLoading && <span>loading...<br/></span>}
                <button className="btn btn-lg login-btn" disabled={isLoading}>Login</button><br/>
                <Link to='/register'><button className="btn btn-lg login-btn">Register</button></Link>
             </form>
            </div>
        :
            <Redirect to='/' />
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}
/*
LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}*/
//export default LoginForm;
export default connect(null, { login,validateAuth })(LoginForm);
