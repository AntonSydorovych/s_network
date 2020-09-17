import { profileReducer } from './reducers/profile-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';

export const store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, postText: 'hello!', likesCount: '15' },
                { id: 2, postText: 'hi!', likesCount: '10' },
                { id: 3, postText: 'its my first post!', likesCount: '105' },
                { id: 4, postText: 'cool!', likesCount: '1' },
                { id: 5, postText: 'awesome!', likesCount: '150' }
            ],
            newPostText: ''
        },
    
        dialogsPage: {
            users: [
                { id: '1', name: 'Dimych' },
                { id: '2', name: 'Andrey' },
                { id: '3', name: 'Sveta' },
                { id: '4', name: 'Sasha' },
                { id: '5', name: 'Viktor' },
                { id: '6', name: 'Valera' }
            ],
    
            messages: [
                { id: '1', message: 'Hello' },
                { id: '2', message: 'How R U' },
                { id: '3', message: 'Fine' },
                { id: '4', message: 'I see' },
                { id: '5', message: 'Ok.' },
                { id: '6', message: '...' }
            ],

            newMessageBody: ''
        }
    },

    getState(){
        return this._state;
    },

    refreshPage () {
        console.log('Page was refreshed');
    },

    renameFunc (refreshFunc) {
        this.refreshPage = refreshFunc;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.refreshPage();
    }  
}