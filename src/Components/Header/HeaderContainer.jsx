import React from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import { logOutTC } from '../../redux/reducers/auth-reducer';


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,
     { logOutTC })(HeaderContainer);