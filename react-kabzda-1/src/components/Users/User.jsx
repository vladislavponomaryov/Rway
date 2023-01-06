import React from "react";
import s from './User.module.css';
import userPhoto from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow, isAuth}) => {
    return <div className={s.user}>
        <div className={s.userLeft}>
            <div>
                <NavLink to={/profile/ + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="User"
                         className={s.avatar}/>
                </NavLink>
            </div>

            { isAuth && <div>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}
                        className={s.followUnfollowButton}
                    >Unfollow</button>
                    : <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }}
                        className={s.followUnfollowButton}
                    >Follow</button>}
            </div>
            }



        </div>
        <div className={s.userMain}>
            <div>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.status}
                </div>
            </div>
        </div>
    </div>
}

export default User;