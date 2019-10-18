import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div>
        <div>Authoer Name: {this.props.user.name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
