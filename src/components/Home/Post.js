import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
class Post extends React.Component {
    constructor(props){
        super(props);
        this.state={
            created_date: this.props.post.created_date,
            username: this.props.post.username,
            profile: 'http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg',
            name: this.full_name(this.props.post.first_name,this.props.post.last_name),
            text: '',
            media: this.props.post.media,
            tags: [],
            liked: false,
            shared:false,
        }
    }

    full_name=(fname,lname)=>{
        let first=fname.replace(/\b\w/g, l => l.toUpperCase());
        let last=lname.replace(/\b\w/g, l => l.toUpperCase());
        return name= first+" "+last;
        //this.setState({name});
    }
    pretty_date=date=>{
        return datef('dd mmm', date)
    }
    handleLike(){
        //
    }
    handleShare(){
        //
    }
    showModal(){

    }
    render () {
        return(
                <div className="post-holder" onClick={this.showModal}>
                    <div className="post-right">
                        <div className="user-img-holder">
                            <img src={this.state.profile} alt="usr-img" className="profile-img profile-img-md" />
                        </div>
                    </div>

                    <div className="post-left">
                        <div className="post-content">
                            <div className="post-info">
                                <Link to={{pathname:`/u/${this.state.username}`, query:{username: this.state.username}}}  className="name-post">{this.state.name}</Link>
                                <Link to={{pathname:`/u/${this.state.username}`, query:{username: this.state.username}}} className="username-post">{this.state.username}</Link>
                                <Link to={{pathname:`/u/${this.state.username}`, query:{username: this.state.username}}} className="text-muted">{this.state.created_date}</Link>
                            </div>
                            <div className="post-input">
                                    <img src={this.state.media} alt="post-image" className="img-post" />
                                <p className="text-post">{this.props.post.text}</p>
                            </div>
                            <div className="cta-holder">
                                <div className="cta-btns text-muted">
                                    <span className="post-opt">...</span>
                                    <span className={classnames('cta-btn',{ctaActive: this.state.shared})} onClick={this.handleShare}>share</span>
                                    <span className={classnames('cta-btn',{ctaActive: this.state.liked})} onClick={this.handleLike}>heart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}

export default Post;
