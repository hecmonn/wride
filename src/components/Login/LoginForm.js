import React from 'react';
import TextFieldGroup from '../../helpers/TextFieldGroup';
import validateInput from '../../helpers/helpers';
import { connect } from 'react-redux';
import { login } from '../../actions/login';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, identifier, password, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        { errors.form && <div className="alert alert-danger">{errors.form}</div> }

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

        <button className="btn btn-lg login-btn" disabled={isLoading}>Login</button>
      </form>
    );
  }
}
/*
LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}*/
//export default LoginForm;
export default connect(null,{login})(LoginForm);
