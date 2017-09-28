import React, { PropTypes } from 'react'
import {Route,render} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUserPosts} from '../../actions/posts';
import {followingUser,unFollow} from '../../actions/following';
import {getUser} from '../../actions/users';
import {prettyName} from '../../helpers/helpers';
import cn from 'classnames';
import {BeatLoader} from 'react-spinners';
//mycomponents
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
            username:'',
            cover:'http://t.wallpaperweb.org/wallpaper/nature/1600x1200/Mazatlan_Sunset_Mexico.jpg',
            profile:'http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg',
            posts:[],
            posts_stat:500,
            followers_stat:100,
            following_stat: 212,
            hearts_stat:3,
            private: false,
            own_profile:true,
            isLoading:false,
            following_p: {
                loading:false,
                following:false
            }
        }
    }
    handleFollow=(e)=>{
        e.preventDefault();
        const {following}=this.state.following_p;
        const {username}=this.state;
        const au_username=this.props.auth.username;
        this.setState({following_p:{loading:true}});
        this.props.unFollow({following,username,au_username})
        .then(r=>{
            this.setState({
                following_p:{
                    following:this.props.following,
                    loading:false
                }
            })
        })
    }
    componentWillMount=async()=> {
        this.setState({isLoading:true});
        await this.props.getUser(this.props.match.params.username)
        .then(r=>{
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
                private: false,
            });
        })
        const {username}=this.state;
        await this.props.fetchUserPosts(username);
        const au_username=this.props.auth.username;
        if(username===au_username){
            this.setState({own_profile:false});
        } else {
            this.props.followingUser({username,au_username})
            .then(r=>{
                this.setState({
                    following_p: {following: this.props.following}
                })
            })
        }

    }
    render () {
        const {name,username,bod,bio,own_profile}=this.state;
        const {following,loading}=this.state.following_p;
        let following_label=!following? 'Follow':'Following';
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
                                    {own_profile && <button className={cn('btn btn-lg following-btn',{followingSuc:following})} onClick={this.handleFollow} disabled={loading}>{!loading?following_label:<BeatLoader color={'#c4c0c8'} loading={loading} />}</button>}
                                    <h3>{name}</h3>
                                    <p className="username-info">{username}</p>
                                    {bio && <p className="bio-info">{bio}</p>}
                                </div>
                                <Trends/>
                                <WTF />
                            </div>
                            <div className="profile-feed">
                                <Route exact path="/u/:username/following" component={Following} />
                                <Route exact path="/u/:username" render={(props)=>{
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
        user: state.users,
        posts: state.posts,
        auth:state.auth,
        following:state.following
    }
}

export default connect(mapStateToProps,{fetchUserPosts,getUser,followingUser,unFollow})(Profile);
