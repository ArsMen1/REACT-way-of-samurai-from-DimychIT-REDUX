import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem ava={d.ava} name={d.name} id={d.id} />
  ));
  const messagesElements = state.messages.map((m) => (
    <Message messageIam={m.messageIam} messageFriend={m.messageFriend} />
  ));

  let newMessagesText = state.newMessagesText;

  const addMessages = () => {
    props.addMessage();
  };

  const onMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <textarea
          value={newMessagesText}
          onChange={onMessageChange}
          placeholder="Введите новое сообщение"
        />
        <button onClick={addMessages}>Написать</button>
      </div>
    </div>
  );
};

export default Dialogs;
