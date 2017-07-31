import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {submitUser} from '../../actions/registration';
import TextFieldGroup from '../../helpers/TextFieldGroup';
class Registration extends React.Component {
    constructor(){
        super();
        this.state={
            fname:'',
            lname:'',
            username:'',
            email:'',
            password: '',
            password_conf:'',
            bod:'',
            sex:'',
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=e=>{
        e.preventDefault();
        const data=this.state;
        this.props.submitUser(data);
    }
    render () {
        const {fname,lname,username,email,password,password_conf,bod,sex,errors}=this.state
        return (
            <div className="global-holder">
                <div className="registration-header">
                    <h1>Registration</h1>
                </div>
                <div className="registration-body">
                    <form>
                    <div className="reg-inline">
                        <TextFieldGroup
                          label="First Name"
                          field="fname"
                          value={fname}
                          error={errors.password}
                          onChange={this.onChange}
                          type="text"
                          placeholder="First Name"
                          className="login-input"
                        />
                        <TextFieldGroup
                          label="Last Name"
                          field="lname"
                          value={lname}
                          error={errors.lname}
                          onChange={this.onChange}
                          type="text"
                          placeholder="Last Name"
                          className="login-input"
                        />
                </div>
                    <TextFieldGroup
                      label="Username"
                      field="username"
                      value={username}
                      error={errors.email}
                      onChange={this.onChange}
                      type="text"
                      placeholder="Username"
                      className="login-input"
                    />
                <TextFieldGroup
                      label="Email"
                      field="email"
                      value={email}
                      error={errors.email}
                      onChange={this.onChange}
                      type="text"
                      placeholder="Email"
                      className="login-input"
                    />
                <div className="reg-inline">
                    <TextFieldGroup
                      label="Password"
                      field="password"
                      value={password}
                      error={errors.password}
                      onChange={this.onChange}
                      type="password"
                      placeholder="Password"
                      className="login-input"
                    />
                    <TextFieldGroup
                      field="password_conf"
                      value={password_conf}
                      error={errors.password_conf}
                      onChange={this.onChange}
                      type="password"
                      placeholder="Password confirmation"
                      className="login-input"
                    />
                </div>
                <div className="reg-inline">
                    <TextFieldGroup
                      field="sex"
                      value={sex}
                      error={errors.sex}
                      onChange={this.onChange}
                      type="radio"
                      className="login-input"
                    />
                    <TextFieldGroup
                      field="sex"
                      value={sex}
                      error={errors.sex}
                      onChange={this.onChange}
                      type="radio"
                      className="login-input"
                    />
                </div>
                    <TextFieldGroup
                      label="Birthday"
                      field="bod"
                      value={bod}
                      error={errors.bod}
                      onChange={this.onChange}
                      type="date"
                      placeholder="BOD"
                      className="login-input"
                    />
                <div className="registration-footer">
                    <button className="btn btn-lg login-btn" onClick={this.onSubmit}>Create Account</button>
                </div>
            </form>
                </div>
            </div>
        )
    }
}


export default connect(null,{submitUser})(Registration);
