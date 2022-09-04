import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div>
            <NavLink to={path} className={({isActive}) => (isActive ? s.dialogActive : s.link)}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;