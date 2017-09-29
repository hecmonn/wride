import React, { PropTypes } from 'react';
import Tags from './Tags';
import Dropdown,{DropdownTrigger,DropdownContent} from 'react-simple-dropdown';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tags:[]
        }
    }
    handleTag=(tags)=>{
        this.setState({tags});
    }
    render () {
        const {name,username,profile}=this.props.user;
        return(
            <div className="editor-header">
                <div className="left-side">
                    <div className="user-info">
                        <div className="user-img">
                            <img className="profile-img-md " src={profile} />
                        </div>
                        <div className="user-cred">
                            <label className="user-name">{name}</label>
                            <label className="username">{username}</label>
                            <label className="draft-label text-muted">Draft</label>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <Dropdown className="dd-holder">
                        <DropdownTrigger className="dd-trigger">Inspire<img className="icon icon-arrow-down" src="/images/ic_down.svg" /></DropdownTrigger>
                        <DropdownContent className="dd-content">
                            <div className="dd-margin">
                                <h3>Done?</h3>
                                <p>Add up to 5 tags, in order for your story to reach more readers</p>
                                <Tags handleTag={this.handleTag} />
                                <br/>
                                <button type="submit" className="btn btn-md inspire-btn" onClick={this.props.handleSubmit}>Inspire</button>
                            </div>
                        </DropdownContent>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default Header;
