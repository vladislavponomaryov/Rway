import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.avatar}></div>
            <p>{props.message}</p>
            <div className={s.like}>Like {props.likeCount}</div>
        </div>
    )
}

export default Post;