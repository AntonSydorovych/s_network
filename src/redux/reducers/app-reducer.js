import {authMeTC} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initializingTC = () => (dispatch) => {

    let promise = dispatch(authMeTC());

    return (dispatch) => {
        Promise.all([promise])
            .then(() => {
                    dispatch(setInitialized())
                }
            );
    }
}