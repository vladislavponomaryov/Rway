import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (p) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={p.state.posts}/>
        </div>
    )
}

export default Profile;