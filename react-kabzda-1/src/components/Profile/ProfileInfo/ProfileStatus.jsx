import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    changeMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })

        if (this.state.editMode) this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <span onDoubleClick={ this.changeMode }>{this.state.status || "-------"}</span>
                :
                    <input type="text" autoFocus={true} onBlur={ this.changeMode} value={this.state.status} onChange={this.onStatusChange}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;