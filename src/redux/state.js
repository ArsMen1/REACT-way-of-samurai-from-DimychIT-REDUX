let renderEntireTree = () => {
    console.log('1111111111')
}

const state = {
    dialogsPage: {
        dialogs: [
            {
                id: '1',
                name: 'Арсен',
                ava: 'https://www.freepngimg.com/thumb/minecraft/70718-youtube-game-video-avatar-minecraft-drawing.png'
            },
            {
                id: '2',
                name: 'Максим',
                ava: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg'
            },
            {
                id: '3',
                name: 'Сергей',
                ava: 'https://otvet.imgsmail.ru/download/219298766_0be8d855f5958194c0205935c5ce0f31_800.jpg'
            },
            {id: '4', name: 'Анна', ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/avatar-youtube-23.jpg'},
        ],
        messages: [
            {id: '1', messageIam: 'Hi', messageFriend: 'HI)'},
            {id: '2', messageIam: 'Как дкла?', messageFriend: 'Хорошо) а как ты?'},
            {id: '3', messageIam: 'Тоже ничего что делаешь', messageFriend: 'ничего а ты'},
            {id: '4', messageIam: 'хахаахах', messageFriend: 'HI Приезжай'},
        ],
        newMessagesText: 'Новое сообщение'
    },
    profilePage: {
        posts: [
            {
                id: '1',
                message: 'Привет, как дела?)',
                likeCount: '15',
                name: "Даша",
                ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/7741717157844a009f29507946382c8c.jpg'
            },
            {
                id: '2',
                message: 'Какие планы на выходыне?',
                likeCount: '4',
                name: "Леха",
                ava: 'https://logo-logos.com/wp-content/uploads/2018/03/discord_icon_logo_remix.png'
            },
        ],
        newPostText: 'Новый текст'
    },
    sidebar: {
        friend: [
            {
                name: 'Даша',
                ava: 'https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/7741717157844a009f29507946382c8c.jpg'
            },
            {
                name: 'Леха',
                ava: 'https://logo-logos.com/wp-content/uploads/2018/03/discord_icon_logo_remix.png'
            },
            {
                name: 'Женя',
                ava: 'https://w7.pngwing.com/pngs/451/93/png-transparent-cartoon-comics-avatar-na-discord-comics-head-cartoon.png'
            },
            {
                name: 'Ашот',
                ava: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-96.jpg'
            }
        ]
    },
}

window.state = state

export const addPost = () => {
    const newPost =
        {
            id: 5,
            message: state.profilePage.newPostText,
            likeCount: 0,
            name: 'Гость'
        }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}

export const updateNewPostText = (PostText) => {
    state.profilePage.newPostText = PostText
    renderEntireTree(state);
}

export const addMessage = () => {
    const newMessage =
        {
            id: '5', messageIam: state.dialogsPage.newMessagesText,
        }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessagesText = ''
    renderEntireTree(state);
}

export const updateNewMessageText = (messageText) => {
    state.dialogsPage.newMessagesText = messageText
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;                            //НАблюдатель ПАТТЕРН
}

export default state;