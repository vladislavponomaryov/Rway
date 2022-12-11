import {connect} from 'react-redux';
import {
    follow, getUsers, setCurrentPage, toggleFollowingProgress, toggleIsFetching, unfollow
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsers(currentPage, this.props.pageSize);
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
                {...this.props}
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
        isFetching: state.usersPage.toggleIsFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default connect(mapStateToProps, {
    setCurrentPage, toggleIsFetching, follow, unfollow, toggleFollowingProgress, getUsers
})(UsersContainer);