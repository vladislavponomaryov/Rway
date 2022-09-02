import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://i.pinimg.com/originals/60/1a/ac/601aacc648a45704f643b88f5d5c3f39.jpg" alt="" className={s.wallpaper}/>
            <div className={s.avatar}>
                <img src="https://image.shutterstock.com/image-photo/cat-looks-side-sits-on-260nw-1834094695.jpg" alt="Avatar"/>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;