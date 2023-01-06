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
        const {currentPage,pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (page) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(page);
        this.props.requestUsers(page, pageSize);
    }

    render() {
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