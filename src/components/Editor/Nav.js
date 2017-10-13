import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Tags from './Tags';
import cn from 'classnames';
class Nav extends Component {
    constructor(props){
        super(props);
        this.state={
            dropdownHidden: true
        }
    }
    handleTag=(tags)=>{
        this.setState({tags});
    }
    handleTrigger=()=>{
        this.setState({dropdownHidden: !this.state.dropdownHidden});
    }
    render(){
        const {dropdownHidden}=this.state;
        return(
            <div className="nav-holder nav-editor-holder light-shadow">
                <div className="nav-content">
                    <div className="upper-nav">
                        <div className="un-cont logo-title"> <Link to="/">Wride.</Link></div>
                        <div className="right-side">
                            <div id="dd-inspire-holder" className="dd-holder">
                                <div className="dd-trigger" onClick={this.handleTrigger}>
                                    <span className="dd-trigger-object">
                                        <span className="dd-element">Inspire</span>
                                        <img className="icon icon-arrow-down dd-element" src="/images/ic_down.svg" />
                                    </span>
                            </div>
                                <div className={cn('dd-content light-shadow',{hide: dropdownHidden})} >
                                    <div className="dd-margin dd-element">
                                        <h3 className="dd-element">Done?</h3>
                                        <p className="dd-element">Add up to 5 tags, in order for your story to reach more readers</p>
                                        <Tags handleTag={this.handleTag} />
                                        <br/>
                                        <button type="submit" className="btn btn-md inspire-btn dd-element" onClick={this.props.handleSubmit}>Inspire</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
