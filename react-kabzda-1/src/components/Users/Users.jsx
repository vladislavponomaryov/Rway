import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import axios from "axios";

let Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items);
            });
        }
    }

    let users = props.users.map(u => <div className={s.user}>
        <div className={s.userLeft}>
            <img src={userPhoto} alt="Avatar" className={s.avatar}/>
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
                {/*{u.location.country}*/}Belarus
                {/*{u.location.city}*/}Minsk
            </div>
        </div>
    </div>)

    return <div>
        <h3>Users</h3>
        <button onClick={getUsers}>Get users</button>
        <div>
            {users}
        </div>
    </div>
}

export default Users;