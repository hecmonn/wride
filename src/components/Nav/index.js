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
                        <SearchBar />
                        <div className="right-side">
                            <Link to='/inspire' className="link nav-link inspire-link">Inspire</Link>
                            <Link to='/inspire' className="link nav-link not-link">Not</Link>
                            <UserMenu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
