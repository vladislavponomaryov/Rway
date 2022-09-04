import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src="https://i.pinimg.com/originals/60/1a/ac/601aacc648a45704f643b88f5d5c3f39.jpg" alt=""
                 className={s.wallpaper}/>
            <div className={s.avatar}>
                <img src="https://image.shutterstock.com/image-photo/cat-looks-side-sits-on-260nw-1834094695.jpg"
                     alt="Avatar"/>
                <div>description</div>
            </div>
        </div>
    )
}

export default ProfileInfo;