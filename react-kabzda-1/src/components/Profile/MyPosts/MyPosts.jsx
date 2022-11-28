import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (p) => {

    let postElements = p.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPost = React.createRef();
    let addPost = () => {
        p.dispatch({type:'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        p.dispatch({type:'UPDATE-POST-TEXT',text:text});
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPost} value={p.newPostText} name="" id="" cols="50" rows="3" placeholder='New post' />
                <button className={s.btnAddPost} onClick={ addPost }>Add post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;