import React from "react";
import s from "./NewUsersBar.module.css"

const NewUsersBar = (props) => {

    let newUsers = '';

    if (props.newUsers) {
        newUsers = props.newUsers.map(user => <div key={user.id} className={s.item}>
            <div className={s.avatar}></div>
            <span>{user.name}</span>
        </div>);
    }

    return (
        <div className={s.users}>
            <h2>New users</h2>
            {newUsers}
        </div>
    );
}

export default NewUsersBar