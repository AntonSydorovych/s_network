import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./reducers/profile-reducer";
import { dialogsReducer } from "./reducers/dialogs-reducer";
import { usersReducer } from "./reducers/users-reducer";
import { authReducer } from "./reducers/auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReduxer } from 'redux-form';
import {appReducer} from "./reducers/app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReduxer,
    app: appReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;