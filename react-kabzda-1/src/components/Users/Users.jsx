import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    }
    render() {
        return <div>
            <h3>Users</h3>
            <div>
                {
                    this.props.users.map(u => <div className={s.user}>
                    <div className={s.userLeft}>
                        <img src={userPhoto} alt="Avatar" className={s.avatar}/>
                        {u.followed ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
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
                }
            </div>
        </div>
    }
}

export default Users;