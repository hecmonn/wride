import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import Post from './Post';
import Modal from 'tg-modal';
import {onOpen,onClose} from '../../actions/modal';
import {prettyName} from '../../helpers/helpers';
import renderHtml from 'react-render-html';

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
    postsList=(posts)=>(
        <div>
            {this.props.posts.map((p,i)=><Post post={p} openModal={this.props.onOpen} key={i} />)}
        </div>
    )

    render () {
        const {onClose}=this.props;
        const {open}=this.props.modal;
        const {
            created_date,
            hearted,
            shared,
            title,
            text,
            username,
            media,
            first_name,
            last_name
        } =this.props.modal.data;
        return(
            <div className="newsfeed">
                <div className="all-posts long">
                    {this.props.posts.length===0?this.empty:this.postsList(this.props.posts)}
                    <Modal isOpen={open} title={title} onCancel={onClose} keyboard={true} isBasic>
                        <div>
                            {prettyName(first_name,last_name)}
                            {username}
                            {created_date}
                            {renderHtml(text)}
                        </div>
                    </Modal>
                </div>
                <div className="wride-loader">
                    <span className="logo">Wride.</span><span className="blink-caret">|</span>
                </div>
            </div>
        )
    }
}

NewsFeed.propTypes={
    posts: React.PropTypes.array.isRequired,
}

let mapStateToProps=state=>{
    return{
        modal:state.modal
    }
}

export default connect(mapStateToProps,{onOpen,onClose})(NewsFeed);
