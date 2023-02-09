export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: Array<ContactType>,
    photos: PhotoType
}
export type ContactType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type PhotoType = {
    small: string,
    large: string
}
export type UsersType = {
    id: number,
    name: string,
    status: string,
    photos: PhotoType
}