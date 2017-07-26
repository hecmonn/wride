import React,{Component} from 'react';

import {BrowserRouter,Route, Link,label,to,activeOnlyWhenExact} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Login from './Login/Login';
import Register from './Register';

class App extends Component {
    render(){
        return(
            <div>
                <Route exact path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Home} />
                <Route path="/u/:username" component={Profile} />
            </div>
        )
    }
}

export default App;
