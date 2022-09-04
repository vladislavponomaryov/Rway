import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (p) => {

    let postElements = p.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea name="" id="" cols="50" rows="3">your news...</textarea>
                <div><button>Send</button></div>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;