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
          },
        ],
        newPostText: "",
      };
    }
    case "UPDATE-NEW-POST-TEXT": {
      return { ...state, newPostText: action.newText };
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

export default profileReducer;
