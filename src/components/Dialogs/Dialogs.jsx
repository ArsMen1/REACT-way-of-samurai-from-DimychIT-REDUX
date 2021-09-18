import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


//КОмпоненты Контактов и сообщений
const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem ava={d.ava} name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message messageIam={m.messageIam} messageFriend={m.messageFriend}/>)

    const newMessages = React.createRef()

    const addMessages = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        const text = newMessages.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} ref={newMessages} value={props.newMessagesText} />
                <button onClick={addMessages}>Написать</button>
            </div>
        </div>

    )
};

export default Dialogs