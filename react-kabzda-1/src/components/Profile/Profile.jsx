import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (p) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={p.state.posts} addPost={p.addPost} newPostText={p.state.newPostText}  updatePostText={p.updatePostText}/>
        </div>
    )
}

export default Profile;