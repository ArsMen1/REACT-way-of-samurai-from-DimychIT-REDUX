let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      return {
        ...state,
        newMessagesText: "",
        messages: [
          ...state.messages,
          {
            id: 6,
            messageIam: action.newMessagesText,
          },
        ],
      };
    }

    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessagesText) => ({
  type: "ADD-MESSAGE",
  newMessagesText,
});

export default dialogsReducer;
