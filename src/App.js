import React, {Component} from 'react';
import './App.css';
import HeaderContainer  from './Components/Header/HeaderContainer';
import { Navbar } from './Components/Navbar/Navbar';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import  { UsersContainer }  from './Components/Users/UsersContainer';
import {Route, withRouter} from 'react-router-dom';
import {ProfileContainer}  from './Components/Profile/ProfileContainer';
import LoginContainer  from './Components/Login/Login';
import {connect} from "react-redux";
import { initializingTC } from './redux/reducers/app-reducer';
import {compose} from "redux";
import {Preloader} from "./Components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializingTC();
    };

    render() {

        /*if(!this.props.initialized) {
            /!*return  <Preloader/>*!/
            alert(this.props.initialized)
        }*/

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.app.initialized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, { initializingTC }))(App);