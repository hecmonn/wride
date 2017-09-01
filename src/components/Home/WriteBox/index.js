import React, { PropTypes } from 'react';
import Editor from 'medium-editor';

class WriteBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            photo:'',
            text:'',
            user:''
        }
    }
    componentDidMount(e) {
        let writeHolder=document.getElementById('write-box-holder-flag');
        let wrideBox=document.getElementById('wride-box');
        let wrideBoxBtns=document.getElementById('wride-btns');
        document.addEventListener('click', (e) => {
            if(e.target==writeHolder||e.target==wrideBox){
                wrideBoxBtns.style.display='block';
            }else{
                wrideBoxBtns.style.display='none';
            }
        });
    }
    render () {
        return(
            <div className="write-box-holder">
                <div className="write-info user-info profile-img profile-img-md">
                    <img src="http://oakridge.in/uploads/principal/principal_15267132451878517075.jpg" className="profile-img profile-img-md" alt="user-profile"  />
                </div>
                <div className="write-box" id="write-box-holder-flag">
                    <div className="write-home-box" id="wride-box" placeholder="It is not going to write by itself" contentEditable={true}>
                    </div>
                    <div className="write-box-btns-holder" id="wride-btns">
                        <div className="write-box-btns">
                            <button className="btn btn-md">Photo</button>
                            <button className="btn btn-md">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WriteBox;
