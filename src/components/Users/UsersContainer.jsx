import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  unfollow,
  toggleIsFethcing,
  toggleFollowingProgress,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFethcing(true);
    userAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFethcing(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanget = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFethcing(true);
    userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFethcing(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanget={this.onPageChanget}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUserCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
    isFetching: state.usersReducer.isFetching,
    followingProgress: state.usersReducer.followingProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFethcing,
  toggleFollowingProgress,
})(UsersContainer);
