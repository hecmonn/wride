import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import Post from './Post';
//postsList

//all posts

export default function NewsFeed({posts}) {
    const empty=(
        <div>
            <div className="empty-posts">
                <h3>There are no posts, yet.</h3>
                </div>
            <hr/>
        </div>
    );
    const postsList=(
        <div>
            {posts.map(post=><Post post={post} key={post.pid.low} />)}
        </div>
    )
    return(
        <div className="newsfeed">
            <div className="all-posts">
                {posts.length===0?empty:postsList}
            </div>
            <div className="wride-loader">
                <span className="logo">Wride.</span><span className="blink-caret">|</span>
            </div>
        </div>
    )
}

NewsFeed.propTypes={
    posts: React.PropTypes.array.isRequired
}
