import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src="https://i.pinimg.com/originals/60/1a/ac/601aacc648a45704f643b88f5d5c3f39.jpg" alt=""
                 className={s.wallpaper}/>
            <div>{ (props.profile.fullName && props.profile.fullName)}</div>
            <div className={s.avatar}>
                {props.profile.photos.large && <img src={props.profile.photos.large} alt="User"/> }
            </div>
            <div>{props.profile.aboutMe && props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJobDescription && props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default ProfileInfo;