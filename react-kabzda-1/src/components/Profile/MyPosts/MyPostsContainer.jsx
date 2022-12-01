import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (p) => {

    let state = p.store.getState();

    let addPost = () => {
        p.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (body) => {
        p.store.dispatch(updatePostTextActionCreator(body));
    }

    return (
       <MyPosts addPost={addPost} updatePostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;