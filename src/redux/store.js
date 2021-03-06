import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
//import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: "1",
          name: "Арсен",
          ava: "https://www.freepngimg.com/thumb/minecraft/70718-youtube-game-video-avatar-minecraft-drawing.png",
        },
        {
          id: "2",
          name: "Максим",
          ava: "https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg",
        },
        {
          id: "3",
          name: "Сергей",
          ava: "https://otvet.imgsmail.ru/download/219298766_0be8d855f5958194c0205935c5ce0f31_800.jpg",
        },
        {
          id: "4",
          name: "Анна",
          ava: "https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-23.jpg",
        },
      ],
      messages: [
        { id: "1", messageIam: "Hi", messageFriend: "HI)" },
        {
          id: "2",
          messageIam: "Как дкла?",
          messageFriend: "Хорошо) а как ты?",
        },
        {
          id: "3",
          messageIam: "Тоже ничего что делаешь",
          messageFriend: "ничего а ты",
        },
        { id: "4", messageIam: "хахаахах", messageFriend: "HI Приезжай" },
      ],
      newMessagesText: "Новое сообщение",
    },
    profilePage: {
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
    },
    sidebar: {
      friend: [
        {
          name: "Даша",
          ava: "https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/7741717157844a009f29507946382c8c.jpg",
        },
        {
          name: "Леха",
          ava: "https://logo-logos.com/wp-content/uploads/2018/03/discord_icon_logo_remix.png",
        },
        {
          name: "Женя",
          ava: "https://w7.pngwing.com/pngs/451/93/png-transparent-cartoon-comics-avatar-na-discord-comics-head-cartoon.png",
        },
        {
          name: "Ашот",
          ava: "https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg",
        },
      ],
    },
  },
  _callSubrscriber() {
    console.log("State chanched");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubrscriber = observer; //НАблюдатель ПАТТЕРН
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubrscriber(this._state);
  },
};

export default store;
window.store = store;
