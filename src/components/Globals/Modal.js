import Rect, {Component} from 'react';

class Modal extends Component{
    render(){
        return(
            <div className="modal-holder">
                <div className="modal-content-holder">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-user-img">
                                <img src="#" className="profile-img profile-img-md" alt="modal-img-user"/>
                            </div>
                            <div className="modal-user-info-holder">
                                <div className="modal-user-info">
                                    <p>{this.props.name}</p>
                                    <p className="modal-username">{this.props.username}</p>
                                    <p className="text-muted">{this.props.created_date}</p>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">

                        </div>

                        <div className="modal-footer">

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Modal;
