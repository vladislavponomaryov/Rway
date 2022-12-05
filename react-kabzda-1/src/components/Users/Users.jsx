import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    name: 'Dmitry',
                    avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                    followed: true,
                    status: 'I am so pretty',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    name: 'Grisha',
                    avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                    followed: true,
                    status: 'I like race',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    name: 'Arsenii',
                    avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                    followed: false,
                    status: 'I like football',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 4,
                    name: 'Gesha',
                    avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png',
                    followed: false,
                    status: 'I like tennis',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        );
    }

    let users = props.users.map(u => <div className={s.user}>
        <div className={s.userLeft}>
            <img src={u.avatarUrl} alt="Avatar" className={s.avatar}/>
            {u.followed ? <button onClick={() => {
                props.unfollow(u.id)
            }}>Unfollow</button> : <button onClick={() => {
                props.follow(u.id)
            }}>Follow</button>}
        </div>
        <div className={s.userMain}>
            <div>
                <span>{u.name}</span>
                <span>{u.status}</span>
            </div>
            <div>
                {u.location.country}
                {u.location.city}
            </div>
        </div>
    </div>)

    return <div>
        <h3>Users</h3>
        <div>
            {users}
        </div>
    </div>
}

export default Users;