import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import renderHtml from 'react-render-html';
import unixDate from 'unix-date';
import {prettyName} from '../../helpers/helpers';
class Post extends React.Component {
    constructor(props){
        super(props);
        this.state={
            created_date: unixDate.parseDay(this.props.post.created_date.low),
            profile: 'http://www.bouncepen.com/wp-content/themes/twentyfifteen/uploads/user-photo/dummy-image.png',
            tags: [],
            liked: false,
            shared:false,
        }
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
        const {created_date}=this.state;
        const {title,text,username,media,first_name,last_name}=this.props.post;
        let name=prettyName(first_name,last_name);
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
                                <Link to={{pathname:`/u/${username}`, query:{username}}}  className="name-post">{name}</Link>
                                <Link to={{pathname:`/u/${username}`, query:{username}}} className="username-post">{username}</Link>
                                <Link to={{pathname:`/u/${username}`, query:{username}}} className="text-muted">{created_date}</Link>
                            </div>
                            <div className="post-input">
                                    <h2 className="title">{title}</h2>
                                    {media && <img src={media} alt="post-img" className="img-post" /> }
                                    <p className="text-post">{renderHtml(text)}</p>
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
