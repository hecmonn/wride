import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class WTF extends Component {
    componentDidMount(){
        //ajax fetch
    }
    render(){
        return(
            <div className="wtf-holder">
                <div className="header">
                    <p>Who To Follow</p><hr/>
                </div>
                <div className="wtf-content">
                    <div className="wtf-usr-holder">
                        <div className="wtf-img">
                            <img className="profile-img profile-img-md" src="http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg" alt="wtf-img"/>
                        </div>
                        <div className="wtf-info">
                            <Link to="/u/bsmith"><strong>Name</strong></Link>
                            <Link to="#">Username</Link>
                        </div>
                        <div className="wtf-follow">
                            <button className="btn btn-md">Follow</button>
                        </div>
                    </div>

                    <div className="wtf-usr-holder">
                        <div className="wtf-img">
                            <img className="profile-img profile-img-md" src="http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg" alt="wtf-img"/>
                        </div>
                        <div className="wtf-info">
                            <Link to="#"><strong>Name</strong></Link>
                            <Link to="#">Username</Link>
                        </div>
                        <div className="wtf-follow">
                            <button className="btn btn-md">Follow</button>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default WTF;
