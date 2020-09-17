import React from 'react';
import {sendMessage} from '../../redux/reducers/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {IsAuth} from '../IsAuth/IsAuth';
import {compose} from 'redux';
import {getMessages, getUsersFromArray} from "../../redux/selectors/dialogs-selector";

class DialogsAPI extends React.Component {

    sendMessage = (message) => {
        this.props.sendMessage(message);
    };

    render() {

        //  console.log(this.props.users)

        return <Dialogs updateNewMessageBody={this.updateNewMessageBody}
                        newMessageBody={this.props.newMessageBody}
                        sendMessage={this.sendMessage}
                        users={this.props.users}
                        messages={this.props.messages}
        />
    }
}


let mapStateToProps = (state) => {

   /* let xyz = getUsersFromArray(state);
    console.log(xyz);
*/
    return {
    users: state.dialogsPage.users,
//  users: getUsersFromArray(state),
        messages: state.dialogsPage.messages
    }
}


export const DialogsContainer = compose(connect(mapStateToProps, {
    sendMessage
}), IsAuth)(DialogsAPI)


// let RedirectComponent = IsAuth(DialogsAPI);

// export const DialogsContainer = connect(mapStateToProps, {
//     sendMessage, updateNewMessageBody})(RedirectComponent);

/*users: state.dialogsPage.users,
        messages: state.dialogsPage.messages*/

/*
        users: getUsers(state),
        messages: getMessages(state)
*/