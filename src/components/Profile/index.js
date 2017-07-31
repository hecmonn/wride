import React, { PropTypes } from 'react'
import {Route,render} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserPosts} from '../../actions/posts';
import {getUser} from '../../actions/users';
import {prettyName} from '../../helpers/helpers';
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
            /*name: '',
            username: '',
            bio:'A fool who plays it cool', */
            cover:'http://t.wallpaperweb.org/wallpaper/nature/1600x1200/Mazatlan_Sunset_Mexico.jpg',
            profile:'http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg',
            posts:[],
            posts_stat:500,
            followers_stat:100,
            following_stat: 212,
            hearts_stat:3,
            private: false,
            own_profile:false,
            following:false,
            isLoading:false
        }
    }

    componentWillMount() {
        this.setState({isLoading:true});
        this.props.getUser(this.props.match.params.username)
        .then(r=>{
            console.log(r.user[0])
            this.setState({
                username: r.user[0].username,
                name: prettyName(r.user[0].fname,r.user[0].lname),
                bio: 'A fool who plays it cool',//r.user[0].bio,
                isLoading:false,
                cover:'http://t.wallpaperweb.org/wallpaper/nature/1600x1200/Mazatlan_Sunset_Mexico.jpg',
                profile:'http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg',
                posts_stat:500,
                followers_stat:100,
                following_stat: 212,
                hearts_stat:3,
                private: false
            })
        });
        this.props.fetchUserPosts();
        //const {fname,lname,username,bod,bio}=this.props.user
    }
    render () {
        const {name,username,bod,bio}=this.state;
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
                                    <h3>{name}</h3>
                                    <p className="username-info">{username}</p>
                                    {bio && <p className="bio-info">{this.state.bio}</p>}
                                </div>
                                <Trends/>
                                <WTF />
                            </div>
                            <div className="profile-feed">
                                <Route exact path="/u/:username/following" component={Following} />
                                <Route exact path="/u/:username" posts={this.props.posts} render={(props)=>{
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
    return {
        user: state.users[0],
        posts: state.posts,
        auth:state.auth
    }
}

export default connect(mapStateToProps,{fetchUserPosts,getUser})(Profile);
