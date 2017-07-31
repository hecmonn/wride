import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
class Stats extends React.Component {
    constructor(props){
        super(props);
        this.state={
            following:this.props.stats.following_stat,
            followers:this.props.stats.followers_stat,
            posts:this.props.stats.posts_stat,
            hearts:this.props.stats.hearts_stat,
            entries_active:true,
            following_active:false,
            followers_active:false,
            hearts_active: false
        }
    }
    handleActive=e=>{
        console.log(e.target.name);
    }
    render () {
        const {username}=this.props.stats;
        return(
            <div className="stats-holder">
                <div name='entries' onClick={this.handleActive} className="posts-stat">
                    <Link to={`/u/${username}`} className="stat-link">
                        <div name='entries' className={cn("single-stat", {activeStat:this.state.entries_active})}>
                            <h3 name='entries' className="stat-title">Entries</h3>
                            <p name='entries' className="stat-number">{this.state.posts}</p>
                        </div>
                    </Link>
                </div>
                <div onClick={this.handleActive} className="following-stat">
                    <Link to={`/u/${username}/following`} className="stat-link">
                        <div className={cn("single-stat", {activeStat:this.state.following_active})}>
                            <h3 className="stat-title">Following</h3>
                            <p className="stat-number">{this.state.following}</p>
                        </div>
                    </Link>
                </div>
                <div onClick={this.handleActive} className="followers-stat">
                    <Link to={`/u/${username}/followers`} className="stat-link">
                        <div className={cn("single-stat", {activeStat:this.state.followers_active})}>
                            <h3 className="stat-title">Followers</h3>
                            <p className="stat-number">{this.state.followers}</p>
                        </div>
                    </Link>
                </div>
                <div className="hearts-stat">
                    <Link to={`/u/${username}/hearts`} className="stat-link">
                        <div onClick={this.handleActive} className={cn("single-stat", {activeStat:this.state.followers_active})}>
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
