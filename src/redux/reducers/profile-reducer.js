import { profileAPI } from '../../Components/api/RequestApi';

const ADD_POST = 'ADD-POST';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const GET_STATUS = 'GET_STATUS';


let initialState = {
    posts: [
        { id: 1, postText: 'hello!', likesCount: '15' },
        { id: 2, postText: 'hi!', likesCount: '10' },
        { id: 3, postText: 'its my first post!', likesCount: '105' },
        { id: 4, postText: 'cool!', likesCount: '1' },
        { id: 5, postText: 'awesome!', likesCount: '150' }
    ],
    profileData: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    postText: action.newPostText,
                    likesCount: 0
                }]
            }
        case GET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            }
        case GET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        
        default:
            return state;
    }
}

export const addPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
const getUserProfile = (profileData) => {
    return {
        type: GET_USER_PROFILE,
        profileData
    }
}

const getStatus = (status) => {

    return {
        type: GET_STATUS,
        status
    }
}

export const getUserProfileInfoTC = (userId) => {
    return (dispatch) => {

        if (!userId) {
            userId = 1105
        }

        profileAPI.getUserProfileInfo(userId)
            .then(response => {
                dispatch(getUserProfile(response.data));
            });
    }
}

export const getUserStatusTC = (userId) => {
    
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(getStatus(response.data))
        });
    }
}

export const setMyStatusTC = (status) => {

    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                dispatch(getStatus(status))}
            });
    }
}