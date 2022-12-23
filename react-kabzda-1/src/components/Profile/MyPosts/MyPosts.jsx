import React from 'react';
import Post from "./Post/Post";
import Field from "redux-form/lib/Field";
import ReduxForm from "redux-form/lib/reduxForm";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New post'} name={'newPostBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = ReduxForm({form:'profileAddPostForm'})(AddPostForm);

const MyPosts = (p) => {

    let postElements = p.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let addNewPost = (formData) => {
        p.addPost(formData.newPostBody);
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost} />
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts;