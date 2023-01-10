import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.png";
import profile_wallpaper from "../../../assets/images/profile_wallpaper.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <img src={profile_wallpaper} alt="profile wallpaper"
                 className={s.wallpaper}/>
            <div><b>Full name</b>: {profile.fullName && profile.fullName}</div>
            <div className={s.avatar}>
                {profile.photos.large ? <img src={profile.photos.large} alt="User"/> :
                    <img src={userPhoto} alt="User"/>}
                {isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
            </div>
            <div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <div><b>About me</b>: {profile.aboutMe && profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            { profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription && profile.lookingForAJobDescription}
                </div>
            }
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}</div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b className={s.contact}>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;