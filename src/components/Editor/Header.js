import React, { PropTypes } from 'react';
import Tags from './Tags';
import cn from 'classnames';
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tags:[],
            dropdownHidden: true
        }
    }
    handleTag=(tags)=>{
        this.setState({tags});
    }
    toggle=()=> {
        this.setState({dropdownHidden: !this.state.dropdownHidden});
    }
    componentWillMount() {
        const ddHolder=document.getElementById('dd-inspire-holder');
        const ddCont=document.getElementById('x');
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
                    <div id="dd-inspire-holder" className="dd-holder">
                        <div className="dd-trigger">
                                Inspire
                                <img className="icon icon-arrow-down" src="/images/ic_down.svg" />
                        </div>
                        <div className={cn('dd-content',{hide: dropdownHidden})} >
                            <div className="dd-margin">
                                <h3>Done?</h3>
                                <p>Add up to 5 tags, in order for your story to reach more readers</p>
                                <Tags handleTag={this.handleTag} />
                                <br/>
                                <button type="submit" className="btn btn-md inspire-btn" onClick={this.props.handleSubmit}>Inspire</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
