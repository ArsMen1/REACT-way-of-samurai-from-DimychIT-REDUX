import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newMessagesText"}
        component={"textarea"}
        placeholder="Введите новое сообщение"
      />
      <button>Написать</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm", // уникальное имя формы
})(AddMessageForm);

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const addNewMessage = (message) => {
    props.addMessage(message.newMessagesText);
  };

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem ava={d.ava} name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message
      messageIam={m.messageIam}
      key={m.id}
      messageFriend={m.messageFriend}
    />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
