import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersReducer.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

export const getPageSize = (state) => {
  return state.usersReducer.pageSize;
};

export const getTotalUserCount = (state) => {
  return state.usersReducer.totalUserCount;
};

export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage;
};

export const getFetching = (state) => {
  return state.usersReducer.isFetching;
};

export const getFollowingProgress = (state) => {
  return state.usersReducer.followingProgress;
};
