import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) =>  {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let currentPage = props.currentPage;

    let pages = [];
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < pagesCount) {
            pages.push(i);
        }
    }
    pages.unshift(1);
    pages.push(pagesCount);

    console.log(props);

    return <div>
        <h3>Users</h3>
        <div className={s.pagination}>
            {
                pages.map(p => {
                    return <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p && s.selectPage}>{p}</span>
                })
            }
        </div>
        <div>
            {
                props.users.map(u => <div className={s.user}>
                    <div className={s.userLeft}>
                        <NavLink to={/profile/ + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="User" className={s.avatar}/>
                        </NavLink>
                        {u.followed ? <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                            usersAPI.unfollow(u.id).then(response => {
                                if (response.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Unfollow</button> : <button
                            disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                            usersAPI.follow(u.id).then(response => {
                                if (response.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
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

export default Users;