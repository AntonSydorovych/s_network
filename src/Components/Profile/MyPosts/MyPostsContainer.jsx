import React from 'react';
import { addPost } from '../../../redux/reducers/profile-reducer';
import { MyPosts } from './MyPosts';
import { connect } from 'react-redux';

class MyPostsAPI extends React.Component {

    addPost = (values) => {
        this.props.addPost(values.postText);
    }

    render() {
        return <MyPosts
            addPost={this.addPost} 
            posts = {this.props.posts} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    };
};

export const MyPostsContainer = connect(mapStateToProps, {
    addPost })(MyPostsAPI);