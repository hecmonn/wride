import React, { PropTypes } from 'react'

class PostModal extends React.Component {
    render () {
        return(
            <div className={classnames('modal-holder', {hidden: this.state.hideModal})}>
                <div className="modal-content-holder">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-user-img">
                                <img src="#" className="profile-img profile-img-md" alt="modal-img-user"/>
                            </div>
                            <div className="modal-user-info-holder">
                                <div className="modal-user-info">
                                    <Link to="#" className="name-info link">Hector Monarrez</Link><br/>
                                    <Link to="#" className="modal-username link">hecmonn</Link><br/>
                                    <span className="text-muted">date</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h1>This is the modal body</h1>
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostModal;
