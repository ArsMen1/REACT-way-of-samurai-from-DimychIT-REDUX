import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 22237; //Выбор Моей страницы даже если она не найдена)

    this.props.getUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={"/login"} />;
    return <Profile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
    profile: state.profileReducer.profile,
  };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
