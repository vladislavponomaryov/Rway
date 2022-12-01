import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = (p) => {

    //let state = p.store.getState();

    return (
       <StoreContext.Consumer>
           {
               (store) => {
                   let state = store.getState();

                   let addPost = () => {
                       store.dispatch(addPostActionCreator());
                   }

                   let onPostChange = (body) => {
                       store.dispatch(updatePostTextActionCreator(body));
                   }

                   return <MyPosts addPost={addPost}
                                   updatePostText={onPostChange}
                                   posts={state.profilePage.posts}
                                   newPostText={state.profilePage.newPostText}
                   />
               }
           }
       </StoreContext.Consumer>
    )
}

export default MyPostsContainer;