import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }
  userh;

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div>
            <h2>{post.title}</h2>
          </div>
          <div>{post.body}</div>
          <UserHeader userId={post.userId} />
        </div>
      );
    });
  }

  render() {
    return this.renderList();
  }
}

const actions = {
  fetchPosts,
  fetchPostsAndUsers
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  actions
)(PostList);
