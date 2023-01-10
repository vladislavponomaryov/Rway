import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f8e5f9e1-2f25-4313-a285-68ae9593cf4c'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/` + userId).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => response.data)
    },
    updateProfile(data) {
        return instance.put('profile' + data).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status}).then(response => response.data)
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data)
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login',{email,password,rememberMe}).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login').then(response => response.data)
    }
}