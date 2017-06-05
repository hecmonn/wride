import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import Post from './Post';
//postsList

class NewsFeed extends React.Component {
    constructor(props){
        super(props);
    }
    empty=(
        <div>
            <div className="empty-posts">
                <h3>There are no posts, yet.</h3>
                </div>
            <hr/>
        </div>
    );
    postsList=({posts})=>(
        <div>
            {this.props.posts.map(post=><Post post={post} key={post.pid.low} />)}
        </div>
    )
    handleModalClick=(e)=>{
        e.preventDefault();
        console.log('modal');
    }

    render () {

        return(
            <div className="newsfeed">
                <div className="all-posts">
                    {this.props.posts.length===0?this.empty:this.postsList(this.props.posts)}
                </div>
                <div className="wride-loader">
                    <span className="logo">Wride.</span><span className="blink-caret">|</span>
                </div>
            </div>
        )
    }
}

NewsFeed.propTypes={
    posts: React.PropTypes.array.isRequired
}

export default NewsFeed;
