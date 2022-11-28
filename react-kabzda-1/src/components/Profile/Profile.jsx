import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (p) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={p.state.posts} dispatch={p.dispatch} newPostText={p.state.newPostText}/>
        </div>
    )
}

export default Profile;