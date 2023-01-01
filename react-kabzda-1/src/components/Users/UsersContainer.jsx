import {connect} from 'react-redux';
import {
    follow, requestUsers, setCurrentPage, toggleFollowingProgress, toggleIsFetching, unfollow
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getPageSize,
    getToggleIsFetching,
    getTotalUserCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, this.props.pageSize);
    }

    render() {

        console.log('Render');

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
    console.log('mstp');
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getToggleIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {
        setCurrentPage, toggleIsFetching, follow, unfollow, toggleFollowingProgress, requestUsers
    })
)(UsersContainer);