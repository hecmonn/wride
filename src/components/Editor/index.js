import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import EditorM from 'medium-editor';
import mediumInsert from 'medium-editor-insert-plugin';
import $ from 'jquery';
import Nav from '../Nav';

import {submitPost} from '../../actions/posts';
class Editor extends React.Component {
    constructor(){
        super();
        this.state={
            body:'',
            title:'',
            photo:'',
            loading:false,
            redirect:false
        }
        this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount() {
        const editor=new EditorM('.editor',{
            placeholder:{
                text:'So, what happened?'
            }
        });
        $('.editor').mediumInsert({
            editor,
            enbaled:true
        })
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        this.setState({loading:true})
        e.preventDefault();
        const {title}=this.state;
        let uid=this.props.auth.uid.low;
        let body=document.getElementById('editor-wrid').innerHTML;
        this.props.submitPost({title,body,uid})
        .then(r=>{
            this.setState({loading:false})
        })
    }

    render () {
        const {redirect}=this.state;
        return (
            !redirect?
            <div>
                <Nav />
                <div className="global-holder">
                    <form>
                        <div className="editor-holder">
                            <div className="editor-header">
                                <button type="submit" className="btn btn-lg pull-right" onClick={this.handleSubmit}>Inspire</button>
                            </div>
                            <div className="editor-body">
                                <input type="text" name="title" className="form-input title-input" onChange={this.handleChange} placeholder="Title" />
                                <div className="editor" id="editor-wrid"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            : <Redirect to="/inspirations" />
        )
    }
}

let mapStateToProps=state=>{
    return{
        post: state.post,
        auth: state.auth
    }
}

export default connect(mapStateToProps,{submitPost})(Editor);
