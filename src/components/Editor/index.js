import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import EditorM from 'medium-editor';
import Nav from '../Nav';

import {submitPost} from '../../actions/posts';
class Editor extends React.Component {
    constructor(){
        super();
        this.state={
            body:'',
            title:'',
            photo:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.editor=new EditorM('.editor',{
            placeholder:{
                text:'So, what happened?'
            }
        });
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {title}=this.state;
        let uid=this.props.auth.uid.low;
        let body=document.getElementById('editor-wrid').innerHTML;
        this.props.submitPost({title,body,uid})
        .then(
            r=>{
                console.log(r);
            }
        )
            
    }
    
    render () {
        return (
            <div>
                <Nav />
                <div className="global-holder">
                    <button type="submit" className="btn btn-lg pull-right" onClick={this.handleSubmit}>Inspire</button>
                    <form>
                        <input type="text" name="title" className="form-input" onChange={this.handleChange} placeholder="Title" />
                        <div className="editor-holder">
                        
                            <div className="editor" id="editor-wrid"></div>
                        </div>
                    </form>
                </div>
            </div>
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