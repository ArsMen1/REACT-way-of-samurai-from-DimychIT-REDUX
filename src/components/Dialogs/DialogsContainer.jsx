import React from "react";
import { connect } from "react-redux";

import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import SoreContext from "./storeContext/StoreContext";

const DialogsContainer = () => {
  return (
    <SoreContext.Consumer>
      {(store) => {
        const onAddMessages = () => {
          store.dispatch(addMessageActionCreator());
        };

        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };

        return (
          <Dialogs
            updateNewMessageText={onMessageChange}
            addMessage={onAddMessages}
            dialogsPage={store.getState().dialogsReducer}
          />
        );
      }}
    </SoreContext.Consumer>
  );
};

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};
let mapDispatchToProps = () => {
  return {
    updateNewMessageText: () => {
      store.dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      store.dispatch(addMessageActionCreator());
    },
  };
};

const SuperDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
