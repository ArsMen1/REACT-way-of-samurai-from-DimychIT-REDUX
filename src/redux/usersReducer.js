import { userAPI } from "../api/api";

let initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET_USERS":
      return { ...state, users: action.users };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.currentPage };
    case "SET_TOTAL_USERS_COUNT":
      return { ...state, totalUserCount: action.totalUserCount };
    case "TOGGLE_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccsess = (userId) => ({ type: "FOLLOW", userId });

export const unfollowSuccsess = (userId) => ({ type: "UNFOLLOW", userId });

export const setUsers = (users) => ({ type: "SET_USERS", users });

export const setCurrentPage = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  currentPage,
});

export const setTotalUsersCount = (totalUserCount) => ({
  type: "SET_TOTAL_USERS_COUNT",
  totalUserCount,
});

export const toggleIsFethcing = (isFetching) => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: "TOGGLE_IS_FOLLOWING_PROGRESS",
  isFetching,
  userId,
});

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFethcing(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFethcing(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const getPageNumber = (pageNumber, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFethcing(true));
    userAPI.getUsers(pageNumber, pageSize).then((data) => {
      dispatch(toggleIsFethcing(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const unfollow = (uId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, uId));
    userAPI.unfollow(uId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccsess(uId));
      }
      dispatch(toggleFollowingProgress(false, uId));
    });
  };
};

export const follow = (uId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, uId));
    userAPI.follow(uId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccsess(uId));
      }
      dispatch(toggleFollowingProgress(false, uId));
    });
  };
};

export default usersReducer;
