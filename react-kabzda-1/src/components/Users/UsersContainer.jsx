import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUserCount,
    setUsers, toggleIsFetching,
    unfollow
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
        }
    }

    onPageChanged = (p) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUserCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
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


        return <>
            {this.props.isFetching === true ? <Preloader/> : ''}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.toggleIsFetching
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setUserCount: (userCount) => {
            dispatch(setUserCountAC(userCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        },
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        }
    }
};*/

export default connect(mapStateToProps, {
    setUsers,
    setUserCount,
    setCurrentPage,
    toggleIsFetching,
    follow,
    unfollow
})(UsersContainer);