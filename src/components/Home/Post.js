import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classnames from 'classnames';
import renderHtml from 'react-render-html';
import unixDate from 'unix-date';
import {prettyName} from '../../helpers/helpers';
import {unHeart,unShare,getHearted,getShared} from '../../actions/cta';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state={
            created_date: unixDate.parseDay(this.props.post.created_date.low),
            profile: 'http://www.bouncepen.com/wp-content/themes/twentyfifteen/uploads/user-photo/dummy-image.png',
            tags: [],
            hearted: false,
            shared:false,
        }
    }
    handleHeart=(e)=>{
        e.preventDefault();
        const au_username=this.props.auth.username;
        const {username}=this.props.post;
        const pid=this.props.post.pid.low;
        const {hearted}=this.state;
        this.props.unHeart({au_username,username,pid,hearted})
        .then(r=>{
            this.setState({hearted:this.props.cta.hearted})
        })
    }
    handleShare=(e)=>{
        e.preventDefault();
        const au_username=this.props.auth.username;
        const {username}=this.props.post;
        const pid=this.props.post.pid.low;
        const {shared}=this.state;
        this.props.unShare({au_username,username,pid,shared})
        .then(r=>{
            this.setState({shared:this.props.cta.shared})
        })
    }
    handleModal=()=>{
        const {created_date,hearted,shared}=this.state;
        const {title,text,username,media,first_name,last_name}=this.props.post;
        console.log(title);
        const postData={
            created_date,
            hearted,
            shared,
            title,
            text,
            username,
            media,
            first_name,
            last_name
        }
        this.props.openModal(postData);

    }
    componentWillMount() {
        const au_username=this.props.auth.username;
        const pid=this.props.post.pid.low;
        this.props.getHearted({au_username,pid})
        .then(r=>{
            this.setState({hearted:this.props.cta.hearted})
        });
        this.props.getShared({au_username,pid})
        .then(r=>{
            this.setState({shared:this.props.cta.shared})
        })
    }
    render () {
        const {created_date,hearted,shared}=this.state;
        const {title,text,username,media,first_name,last_name}=this.props.post;
        let name=prettyName(first_name,last_name);
        return(
                <div className="post-holder" onClick={this.handleModal}>
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
                                    <span className={classnames('cta-btn',{ctaActive: shared})} onClick={this.handleShare}>share</span>
                                    <span className={classnames('cta-btn',{ctaActive: hearted})} onClick={this.handleHeart}>heart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}
let mapStateToProps=state=>{
    return{
        auth: state.auth,
        cta: state.cta
    }
}

export default connect(mapStateToProps,{unHeart,unShare,getHearted,getShared})(Post);
