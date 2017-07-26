import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
class Register extends React.Component {
    render () {
        return (
            <div className="registration-holder">
                <div className="registration-header">
                    <h1>Registrarion</h1>
                </div>
                <div className="registration-body">
                </div>
                <div className="registration-footer">
                </div>
            </div>
        )
    }
}

export default connect(null)(Register);
