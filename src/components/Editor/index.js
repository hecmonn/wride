import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import EditorM from 'medium-editor';
import mediumInsert from 'medium-editor-insert-plugin';
import Nav from './Nav';
import Header from './Header';
import {prettyName} from '../../helpers/helpers';
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
    isValid=(e)=>{
        const {body,title}=this.state
    }
    componentDidMount() {
        window.MediumInsert = mediumInsert.MediumInsert
        const editor=new EditorM('.editor',{
            placeholder:{
                text:'So, what happened?'
            }
        });
        $('.editor').mediumInsert({
            editor
            ,enbaled:true
        });
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        this.setState({loading:true})
        e.preventDefault();
        this.edt
        const {title,tags}=this.state;
        let uid=this.props.auth.uid.low;
        let body=document.getElementById('editor-wrid').innerHTML;
        this.props.submitPost({title,body,uid,tags})
        .then(r=>{
            console.log(r)
            this.setState({
                loading:false,
                //redirect:true,
                tags: []
            })
        })
    }
    handleTag=(tags)=>{
        this.setState({tags});
    }
    componentWillMount() {
        const {username,fname,lname,profile}=this.props.auth;
        let name=prettyName(fname,lname);
        this.user={username,name,profile};
    }

    render () {
        const {redirect,loading}=this.state;
        return (
            !redirect?
            <div>
                <Nav handleSubmit={this.handleSubmit} loading={loading} handleTag={this.handleTag}/>
                <div className="global-holder">
                    <form>
                        <div className="editor-holder">
                            <Header user={this.user} />
                            <div className="editor-body">
                                <input type="text" name="title" className="form-input title-input" onChange={this.handleChange} placeholder="Title" />
                                <div className="editor" id="editor-wrid"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            : <Redirect to="/" />
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
