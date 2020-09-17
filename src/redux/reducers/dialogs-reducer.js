const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

export const dialogsReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:7, message: action.message }],
            }
            default:
            return state;
    }
}

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    }
}
