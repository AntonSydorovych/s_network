import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f7494b04-c6ef-4868-8e74-2e9ee227afdb'
    }
})

export const userAPI = {
    getUsers: (pageSize = 10, currentPage = 1) => {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },

    followUser: (userId) => {
        return instance.post(`follow/${userId}`)
    },

    unfollowUser: (userId) => {
        return instance.delete(`follow/${userId}`)
    }
};


export const profileAPI = {

    getUserProfileInfo: (userId) => {
        return instance.get(`profile/${userId}`)
    },

    getStatus: (userId) => {
        return instance.get(`profile/status/${userId}`)
    },

    setStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
    }
};


export const authAPI = {
    authMe: () => {
        return instance.get(`auth/me`)
    },

    login: (email, password, rememberMe) => {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout: () => {
        return instance.delete(`auth/login`)
    }

};




