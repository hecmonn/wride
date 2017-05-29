import React, { PropTypes } from 'react'

class Cover extends React.Component {
    constructor(props){
        super(props);
        this.state={
            style: {
                backgroundImage: this.props.cover
            }
        }
    }
    render () {
        return (
            <div className="cover-holder">
                <div className="cover" style={{backgroundImage:`url(${this.props.cover})`}}>
                    <div className="avatar-img-holder">
                        <img className="profile-img profile-img-lg" src={this.props.profile} alt="avatar-profile-img"/>
                    </div>
                </div>
            </div>
        )
    }
}

Cover.propTypes={
    cover: React.PropTypes.string.isRequired,
    profile: React.PropTypes.string.isRequired
}
export default Cover;
