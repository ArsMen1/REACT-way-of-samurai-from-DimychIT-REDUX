import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
