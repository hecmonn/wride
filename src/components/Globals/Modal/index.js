import React, {Component} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PostModal from './PostModal';
const MODAL_COMPONENTS={
    'POST_MODAL': PostModal
    //'REGISTER_MODAL': ResgisterModal
}
const MODAL_ROOT= ({modalType,modalProps})=>{
    if(!modalType) return null;
    const activeModal=MODAL_COMPONENTS[modalType];
    return <activeModal {...modalProps} />
}

class Modal extends Component{
    constructor(){
        super();
        this.state={
            hideModal:false
        }
    }
    componentDidMount() {
        document.addEventListener('keydown',e=>{
            //esc key
        })
    }
    render(){
        return(<h1>modal</h1>)
    }
}

export default Modal;
