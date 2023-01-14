import React from "react";
import Paginator from "./Paginator";
import User from "./User";

const Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) =>  {

    return <div>
        <h3>Users</h3>
        <Paginator currentPage={currentPage} totalUserCount={totalUserCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     follow={props.follow}
                                     unfollow={props.unfollow}
                                     isAuth={props.isAuth}
                                     key={u.id}
                />)
            }
        </div>
    </div>
}

export default Users;