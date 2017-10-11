import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import UserMenu from './UserMenu';
import Search from './Search';
import LowerNav from './LowerNav';
import SearchBar from './SearchBar';
class Nav extends Component {
    render(){
        return(
            <div className="nav-holder light-shadow">
                <div className="nav-content">
                    <div className="upper-nav">
                        <div className="un-cont logo-title"> <Link to="/">Wride.</Link></div>
                        <div className="right-side">
                            <Link to='/inspire' className="nav-link inspire-link"><span className="link-gradient">inspire</span></Link>
                            <span className="icon not-icon"></span>
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
