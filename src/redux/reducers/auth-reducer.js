import { authAPI } from '../../Components/api/RequestApi';
import {stopSubmit} from "redux-form";

const SET_AUTH_LOGIN_INFO = 'SET_AUTH_LOGIN_INFO';
const SET_AUTH_ID_INFO = 'SET_AUTH_ID_INFO';

let initialState = {
    login: null,
    isAuth: false,
    myId: null
};

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_LOGIN_INFO:
            return {
                ...state,
                login: action.login,
                isAuth: true
            }
        case SET_AUTH_ID_INFO:
            return {
                ...state,
                myId: action.userId,
                isAuth: true
            }
        default:
            return state;
    }
}

const setAuthLoginInfo = (login) => {
    return {
        type: SET_AUTH_LOGIN_INFO,
        login
    }
}

const setAuthIdInfo = (userId) => {
    return {
        type: SET_AUTH_ID_INFO,
        userId
    }
}

export const authMeTC = () => {
    return (dispatch) => {
        return authAPI.authMe()
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setAuthLoginInfo(response.data.data.login));
                };
            });
    }
}

export const loginTC = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setAuthIdInfo(response.data.data.userId));
                } else if(response.data.messages.length>0){
                    let message = response.data.messages[0];
                    dispatch(stopSubmit('login', {_error: message}));
                }
            });
    }
};

export const logOutTC = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(setAuthIdInfo(null));
                };
            });
    }
};
