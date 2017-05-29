import React, { PropTypes } from 'react'

class LoginForm extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{},
            isLoading:false
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    onSubmit(e){
        e.preventDefault();
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render () {
        const {username,password,errros,isLoading}=this.state;
        return(
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
                    <button className="btn btn-lg" disabled={isLoading}>Login </button>
                </form>
            </div>
        )
    }
}

export default LoginForm;
