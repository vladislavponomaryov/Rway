import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.png";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
                         profile,
                         status,
                         updateStatus,
                         isOwner,
                         savePhoto,
                         saveProfile
                     }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        debugger
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.avatar}>
                {profile.photos.large ? <img src={profile.photos.large} alt="User"/> :
                    <img src={userPhoto} alt="User"/>}
                {isOwner && <div><input type="file" onChange={onMainPhotoSelected}/></div>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(!editMode)
                }}/>}
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>Edit</button>
            </div>}
            <div><b>Full name</b>: {profile.fullName && profile.fullName}</div>
            <div><b>About me</b>: {profile.aboutMe && profile.aboutMe}</div>
            <div><b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}</div>
            {profile.lookingForAJob &&
                <div>
                    <b>My professional
                        skills</b>: {profile.lookingForAJobDescription && profile.lookingForAJobDescription}
                </div>
            }
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
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