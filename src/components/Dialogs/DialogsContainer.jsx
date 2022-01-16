import React from "react";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const onAddMessages = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      addMessage={onAddMessages}
      dialogsPage={props.store.getState().dialogsReducer}
    />
  );
};

export default DialogsContainer;
