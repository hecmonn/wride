import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
    render () {
        return(
            <div className="login-holder">
                <div className="login-logo-holder">
                    <span className="logo-front">Wride.</span><span className="blink-caret">|</span>
                </div>
                <div className="form-holder">
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Login;
