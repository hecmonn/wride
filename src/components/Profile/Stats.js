import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';

class Stats extends React.Component {
    constructor(props){
        super(props);
        this.state={
            following:this.props.stats.following_stat,
            followers:this.props.stats.followers_stat,
            posts:this.props.stats.posts_stat,
            hearts:this.props.stats.hearts_stat,
            username:this.props.stats.username
        }
    }
    render () {
        return(
            <div className="stats-holder">
                <div className="posts-stat">
                    <Link to={`/u/${this.state.username}`} className="stat-link">
                        <div className="single-stat active-stat">
                            <h3 className="stat-title">Entries</h3>
                            <p className="stat-number">{this.state.posts}</p>
                        </div>
                    </Link>
                </div>
                <div className="following-stat">
                    <Link to={`/u/${this.state.username}/following`} className="stat-link">
                        <div className="single-stat">
                            <h3 className="stat-title">Following</h3>
                            <p className="stat-number">{this.state.following}</p>
                        </div>
                    </Link>
                </div>
                <div className="followers-stat">
                    <Link to={`/u/${this.state.username}/followers`} className="stat-link">
                        <div className="single-stat">
                            <h3 className="stat-title">Followers</h3>
                            <p className="stat-number">{this.state.followers}</p>
                        </div>
                    </Link>
                </div>
                <div className="hearts-stat">
                    <Link to={`/u/${this.state.username}/hearts`} className="stat-link">
                        <div className="single-stat">
                            <h3 className="stat-title">Hearts</h3>
                            <p className="stat-number">{this.state.hearts}</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

Stats.propTypes={
    stats: React.PropTypes.object.isRequired
}
export default Stats;
