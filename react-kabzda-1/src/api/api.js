import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f8e5f9e1-2f25-4313-a285-68ae9593cf4c'
    }
})

const anonimInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return anonimInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return anonimInstance.post(`follow/` + userId).then(response => response.data)
    },
    unfollow(userId) {
        return anonimInstance.delete(`follow/` + userId).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return anonimInstance.get('profile/' + userId).then(response => response.data)
    }
}

export const headerAPI = {
    getAuthUserData() {
        return anonimInstance.get('https://social-network.samuraijs.com/api/1.0/auth/me').then(response => response.data.data)
    }
}