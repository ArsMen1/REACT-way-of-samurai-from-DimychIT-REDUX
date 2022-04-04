import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  reguestUsres,
  getPageNumber,
} from "../../redux/usersReducer";
import {
  getUsers,
  getPageSize,
  getTotalUserCount,
  getCurrentPage,
  getFetching,
  getFollowingProgress,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.reguestUsres(this.props.currentPage, this.props.pageSize);
  }

  onPageChanget = (pageNumber) => {
    this.props.getPageNumber(pageNumber, this.props.pageSize);
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
          followingProgress={this.props.followingProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getFetching(state),
    followingProgress: getFollowingProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    reguestUsres,
    getPageNumber,
  })
)(UsersContainer);
