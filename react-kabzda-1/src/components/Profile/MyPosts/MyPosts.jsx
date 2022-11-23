import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (p) => {

    let postElements = p.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPost = React.createRef();
    let addPost = () => {
        p.addPost(newPost.current.value);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPost} name="" id="" cols="50" rows="3">New post</textarea>
                <button className={s.btnAddPost} onClick={ addPost }>Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;