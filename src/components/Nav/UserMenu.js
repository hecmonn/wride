import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {prettyName} from '../../helpers/helpers';
class UserMenu extends React.Component {
    render () {
        const {username,fname,lname}=this.props.auth;
        return(
            <div className="un-cont profile-img-md profile-img-nav dropdown-holder">
                <div className="user-menu-trigger align-middle">
                    <span className="fa fa-user fa-lg" aria-hidden="true"></span>
                </div>
                <div className="dropdown-content light-shadow">
                    <ul>
                        <li>
                            <Link to={`/u/${username}`}>
                                <strong>{prettyName(fname,lname)}</strong><br/>
                            </Link>
                                <span className="text-muted">{username}</span>
                            <hr/>
                        </li>
                        <li><Link to='/underlines'>Underlines</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

let mapStateToProps=state=>{
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps)(UserMenu);
