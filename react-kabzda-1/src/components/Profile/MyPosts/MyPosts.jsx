import React from 'react';
import Post from "./Post/Post";
import Field from "redux-form/lib/Field";
import ReduxForm from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength5 = maxLengthCreator(30);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'New post'} name={'newPostBody'} component={Textarea} validate={[required,maxLength5]}/>
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