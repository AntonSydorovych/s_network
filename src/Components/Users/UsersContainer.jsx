import { Users } from './Users';
import { follow, 
    unfollow, getUsersThunkCreator } 
    from '../../redux/reducers/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import { Preloader } from '../common/Preloader/Preloader';
import { logoPic } from '../../Assets/iconLink';
import { IsAuth } from '../IsAuth/IsAuth';
import { compose } from 'redux';


class UsersAPI extends React.Component {

    componentDidMount() {
       this.props.getUsers(this.props.pageSize, this.props.currentPage );
    }

    onPageChanged = (page) => {
        this.props.getUsers(this.props.pageSize, page );
    }

    render() {
        return <> 
        {this.props.isFetching? <Preloader width = {'100px'} />: null }
        <Users totalUsersCount = {this.props.totalUsersCount}
            pageSize=     {this.props.pageSize}
            currentPage=  {this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users=        {this.props.users}
            follow=       {this.props.follow}
            unfollow=     {this.props.unfollow}
            userImg=      {logoPic} 
            setToggleIsFollowing = {this.props.setToggleIsFollowing} 
            toggleIsFollowing = {this.props.toggleIsFollowing} 
            getUsers = {this.props.getUsers} /></>
    }
}

let mapStateToProps = (state) => {
    return {
        users:           state.usersPage.users,
        pageSize:        state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:     state.usersPage.currentPage,
        isFetching:      state.usersPage.isFetching,
        toggleIsFollowing:     state.usersPage.toggleIsFollowing
    }
}

export const UsersContainer = compose(
    connect(mapStateToProps, 
    {follow, unfollow, 
    getUsers: getUsersThunkCreator} ), 
    IsAuth)(UsersAPI)


// let RedirectComponent = IsAuth(UsersAPI);

// export const UsersContainer = connect(mapStateToProps, 
//     {follow, unfollow, getUsers: getUsersThunkCreator} )(RedirectComponent);