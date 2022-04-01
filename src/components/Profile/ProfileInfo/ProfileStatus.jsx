import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activeEditMode() {
    this.setState({ editMode: true });
  }

  deactiveEditMode() {
    this.setState({ editMode: false });
  }

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div className={s.statusInput}>
            <input
              autoFocus={true}
              onBlur={this.deactiveEditMode.bind(this)}
              value={this.props.profile.aboutMe}
            />
          </div>
        ) : (
          <div className={s.status}>
            <span onDoubleClick={this.activeEditMode.bind(this)}>
              {this.props.profile.aboutMe
                ? this.props.profile.aboutMe
                : "Статус не установлен"}
            </span>
          </div>
        )}
      </>
    );
  }
}
export default ProfileStatus;
