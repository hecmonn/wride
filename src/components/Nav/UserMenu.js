import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default function UserMenu(){
    return(
        <div className="un-cont profile-img-sm profile-img-nav dropdown-holder ">
            <img className="profile-img profile-img-sm" src="http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg" alt="profile-img profile-img-sm "/>
            <div className="dropdown-content light-shadow">
                <ul>
                    <li><Link to ="/a">Username</Link></li>
                    <li><Link to ="/b">Username</Link></li>
                </ul>
            </div>
        </div>
    )
}
