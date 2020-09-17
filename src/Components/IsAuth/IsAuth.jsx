import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToRedirect = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}


export let IsAuth = (Component) => {

    class IsAuthClass extends React.Component{
     
        render(){
     
            if(!this.props.isAuth) return <Redirect  to='/login' />
     
            return <Component {...this.props} />
        }
    }

    return  connect(mapStateToRedirect)(IsAuthClass);
}


