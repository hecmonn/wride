import React, { PropTypes } from 'react'
import {Route,render} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserPosts} from '../../actions/posts';
import {getUser} from '../../actions/users';

import Nav from '../Nav';

import Cover from './Cover';
import Stats from './Stats';
import NewsFeed from '../Home/NewsFeed';
import Following from './Following';
import Trends from '../Home/Trends';
import WTF from '../Home/WTF';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            username: 'this.props.users.username',
            cover:'http://t.wallpaperweb.org/wallpaper/nature/1600x1200/Mazatlan_Sunset_Mexico.jpg',
            profile:'http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg',
            bio:'A fool who plays it cool',
            posts:[],
            posts_stat:500,
            followers_stat:100,
            following_stat: 212,
            hearts_stat:3,
            private: false,
            own_profile:false,
            following:false
        }
    }

    componentDidMount() {
        const userParam=this.props.match.params.username;
        this.props.fetchUserPosts();
        this.props.getUser(userParam);
    }
    render () {
        return(
            <div>
                <Nav />
                <div className="global-holder">
                    <div className="profile-holder">
                        <div className="profile-header">
                            <Cover cover={this.state.cover} profile={this.state.profile} />
                            <Stats stats={this.state} />
                        </div>
                        <div className="profile-content">
                            <div className="info-content">
                                <div className="user-info">
                                    <h3>{this.state.name}</h3>
                                    <p className="username-info">{this.state.username}</p>
                                    <p className="bio-info">{this.state.bio}</p>
                                </div>
                                <Trends/>
                                <WTF />
                            </div>
                            <div className="profile-feed">
                                <Route path="/:username/following" component={Following} />
                                <Route exact path="/:username" posts={this.props.posts} render={(props)=>{
                                        return(
                                            <div>
                                                <NewsFeed {...this.props} />
                                            </div>
                                        )
                                    }}>
                                </Route>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profile.propTypes={
    fetchUserPosts: React.PropTypes.func.isRequired,
    getUser: React.PropTypes.func.isRequired,
}
let mapStateToProps=state=>{
    console.log(state);
    return {
        posts: state.posts,
        users: state.users[0]
    }
}
export default connect(mapStateToProps,{fetchUserPosts,getUser})(Profile);
