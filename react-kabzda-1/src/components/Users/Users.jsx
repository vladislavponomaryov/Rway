import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/avatar.png';
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount);
            });
        }
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.totalCount);
        });
    }
    render() {

        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let currentPage = this.props.currentPage;

        let pages = [];
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            if (i > 1 && i < pagesCount) {
                pages.push(i);
            }
        }
        pages.unshift(1);
        pages.push(pagesCount);

        return <div>
            <h3>Users</h3>
            <div className={s.pagination}>
                {
                    pages.map(p => {
                        return <span onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage === p && s.selectPage}>{p}</span>
                    })
                }
            </div>
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