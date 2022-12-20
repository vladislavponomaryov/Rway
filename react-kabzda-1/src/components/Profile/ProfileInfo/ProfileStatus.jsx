import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    changeMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={ this.changeMode }>{this.props.status}</span>
                :
                    <input type="text" autoFocus={true} onBlur={ this.changeMode} value={this.props.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;