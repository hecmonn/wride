import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import UserMenu from './UserMenu';
import Search from './Search';
import LowerNav from './LowerNav';
class Nav extends Component {
    render(){
        return(
            <div className="nav-holder light-shadow">
                <div className="nav-content">
                    <div className="upper-nav">
                        <div className="un-cont logo-title"> <Link to="/">Wride.</Link></div>
                        <Search />
                        <Link to='/inspire' className="link nav-link">fuck this shit lill ass nigh Inspire</Link>
                        <UserMenu /><hr/>
                    </div>
                    <LowerNav/>
                </div>
            </div>
        )
    }
}

export default Nav;
