import s from './Message.module.css';

const Message = (props) => {

    let user = (props.user == 'me') ? s.me : s.companion;

    return (
        <div className={`${s.item} ${user}`}>
            <div className={s.avatar}></div>
            <span>{props.message}</span>
        </div>
    )
}

export default Message;