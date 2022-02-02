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
  newPostText: "Новый текст",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: 5,
            message: state.newPostText,
            likeCount: 0,
            name: "Гость",
            ava: "https://i09.fotocdn.net/s113/81eac8fc2c1cb2e3/user_s/2551970780.jpg",
          },
        ],
        newPostText: "",
      };
    }
    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.newText };
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: "SET_USER_PROFILE",
  profile,
});

export default profileReducer;
