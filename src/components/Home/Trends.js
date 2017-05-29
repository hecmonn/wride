import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Trends extends Component {
    render(){
        return(
            <div className="trends-holder">
                <div className="header">
                    <h3>Trends</h3><hr/>
                </div>
                <div className="trends-content">
                    <Link className="trend-link" to="/asd">Something</Link>
                    <p className="trend-info text-muted">85 K Talking about this</p><br/>

                    <Link className="trend-link" to="/login">Something</Link>
                    <p className="trend-info text-muted">85 K Talking about this</p><br/>


                    <Link className="trend-link" to="#">Something</Link>
                    <p className="trend-info text-muted">85 K Talking about this</p><br/>
                </div>
            </div>
        )
    }
}

export default Trends;
