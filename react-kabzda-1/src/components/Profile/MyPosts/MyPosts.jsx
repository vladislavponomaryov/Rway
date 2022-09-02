import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea name="" id="" cols="50" rows="3">your news...</textarea>
                <div><button>Send</button></div>
            </div>
            <Post message='Hi, how are you?' likesCount="20"/>
            <Post message='Hi, it is my first project )' likesCount="15"/>
        </div>
    )
}

export default MyPosts;