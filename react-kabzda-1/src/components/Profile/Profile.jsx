import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (p) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={p.store} />
        </div>
    )
}

export default Profile;