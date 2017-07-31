import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchHomePosts} from '../../actions/posts.js';
import {Redirect} from 'react-router-dom';
//components
import WTF from './WTF';
import Trends from './Trends';
import WriteBox from './WriteBox';
import NewsFeed from './NewsFeed';
import Nav from '../Nav';
import Modal from '../Globals/Modal';

class Home extends Component {
    constructor(){
        super();
        this.state={
            redirect: false
        }
    }
    componentWillMount() {
        if(!!this.props.auth.access) this.setState({redirect:true});
    }
    componentDidMount() {
        this.props.fetchHomePosts();
    }
    render(){
        const {redirect}=this.state;
        return(
            redirect?
                <div>
                    <Nav />
                    <div className="global-holder">
                        <div className="home-holder">
                            <div className="left-pane">
                                <WTF/>
                                <Trends/>
                            </div>
                            <div className="right-pane">
                                <WriteBox/>

                                <NewsFeed posts={this.props.posts}/>
                            </div>
                        </div>
                    </div>
                </div>
            : <Redirect to='/login' />
        )
    }
}

Home.propTypes={
    fetchHomePosts: React.PropTypes.func.isRequired
}

let mapStateToProps=state=>{
    return {
        posts: state.posts,
        auth: state.auth
    }
}
export default connect(mapStateToProps,{fetchHomePosts})(Home);
