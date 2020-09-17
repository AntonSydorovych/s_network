import React from 'react';
import {Profile} from './Profile';
import {
    getUserProfileInfoTC,
    getUserStatusTC,
    setMyStatusTC
} from '../../redux/reducers/profile-reducer';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {IsAuth} from '../IsAuth/IsAuth';
import {compose} from 'redux';


export class ProfileAPI extends React.Component {

    componentDidMount() {

        this.userId = this.props.match.params.userId;

        this.props.getUserProfileInfoTC(this.userId);

        this.props.getUserStatusTC(!this.userId ? 1105 : this.userId );

    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {

    return {
        profileData: state.profilePage.profileData,
        status: state.profilePage.status
    }
}


export const ProfileContainer =
    compose(connect(
        mapStateToProps, {
            getUserProfileInfoTC,
            getUserStatusTC, setMyStatusTC
        }), withRouter, IsAuth)
    (ProfileAPI);


// let RedirectComponent = IsAuth(ProfileAPI);

// const WRProfileAPI = withRouter(RedirectComponent);

// export const ProfileContainer = connect(
//     mapStateToProps, {
//     getUserProfileInfoTC
// })(WRProfileAPI);

