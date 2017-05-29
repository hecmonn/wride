import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default function LowerNav(){
    return(
        <div className="lower-nav">
            <div className="nav-sections">
                <ul>
                    <li><Link to="#" className="active">Home</Link></li>
                    <li><Link to="#">Inspiration</Link></li>
                </ul>
            </div>
        </div>
)
}
