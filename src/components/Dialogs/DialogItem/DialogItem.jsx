import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.item}>
            <div className={s.avatar}></div>
            <NavLink to={path} className={({isActive}) => (isActive ? s.dialogActive : s.link)}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;