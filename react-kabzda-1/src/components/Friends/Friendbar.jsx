import s from './Friendbar.module.css';

const Friendbar = (p) => {

    let friendElement = p.state.map(friend => <div className={s.item}>
        <div className={s.avatar}></div>
        <span>{friend.name}</span>
    </div>);

    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            {friendElement}
        </div>
    );
}

export default Friendbar;