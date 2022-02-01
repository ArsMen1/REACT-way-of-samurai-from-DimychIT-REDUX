//import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  unfollowAC,
} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalUserCount: state.usersReducer.totalUserCount,
    currentPage: state.usersReducer.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
