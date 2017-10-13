import React, { PropTypes } from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tags:[],
            dropdownHidden: true
        }
    }
    render () {
        const {name,username,profile}=this.props.user;
        const {dropdownHidden}=this.state;
        return(
            <div className="editor-header">
                <div className="left-side">
                    <div className="user-info">
                        <div className="user-img">
                            <img className="profile-img-md" src={profile} />
                        </div>
                        <div className="user-cred">
                            <label className="user-name">{name}</label>
                            <label className="username">{username}</label>
                            <label className="draft-label text-muted">Draft</label>
                        </div>
                    </div>
                </div>
                <div className="right-side">

                </div>
            </div>
        )
    }
}

export default Header;
