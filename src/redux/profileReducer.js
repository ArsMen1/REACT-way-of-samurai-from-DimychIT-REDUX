import { profileAPI } from "../api/api";

let initialState = {
  posts: [
    {
      id: "1",
      message: "Привет, как дела?)",
      likeCount: "15",
      name: "Даша",
      ava: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/7741717157844a009f29507946382c8c.jpg",
    },
    {
      id: "2",
      message: "Какие планы на выходыне?",
      likeCount: "4",
      name: "Леха",
      ava: "https://logo-logos.com/wp-content/uploads/2018/03/discord_icon_logo_remix.png",
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: 5,
            message: action.newPostText,
            likeCount: 0,
            name: "Гость",
            ava: "https://i09.fotocdn.net/s113/81eac8fc2c1cb2e3/user_s/2551970780.jpg",
          },
        ],
      };
    }
    case "SET-STATUS": {
      return { ...state, status: action.status };
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: "ADD-POST",
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: "SET_USER_PROFILE",
  profile,
});

export const setStatus = (status) => ({
  type: "SET-STATUS",
  status,
});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getMePage(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
