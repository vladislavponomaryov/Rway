import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.png";
import profile_wallpaper from "../../../assets/images/profile_wallpaper.jpg";

const ProfileInfo = ({profile,status,updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <img src={profile_wallpaper} alt="profile wallpaper"
                 className={s.wallpaper}/>
            <div>{ (profile.fullName && profile.fullName)}</div>
            <div className={s.avatar}>
                {profile.photos.large ? <img src={profile.photos.large} alt="User"/> : <img src={userPhoto} alt="User"/> }
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
            <div>{profile.aboutMe && profile.aboutMe}</div>
            <div>{profile.lookingForAJobDescription && profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default ProfileInfo;