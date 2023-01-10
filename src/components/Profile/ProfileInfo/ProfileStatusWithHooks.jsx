import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const changeMode = () => {
        setEditMode(!editMode);

        if (editMode) {
            props.updateStatus(status)
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            { !editMode ?
                <span onDoubleClick={ changeMode }>{props.status || "-------"}</span>
                :
                <input type="text" autoFocus={true} onBlur={ changeMode } value={status} onChange={onStatusChange} />
            }
        </div>
    )
}

export default ProfileStatusWithHooks;