import withAuthRedirect from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { addMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessagesText) => {
      dispatch(addMessageActionCreator(newMessagesText));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
