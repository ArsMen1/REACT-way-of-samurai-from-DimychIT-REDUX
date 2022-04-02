import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({ editMode: true });
  };

  deactiveEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChanche = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <>
        {this.state.editMode ? (
          <div className={s.statusInput}>
            <input
              onChange={this.onStatusChanche}
              autoFocus={true}
              onBlur={this.deactiveEditMode}
              value={this.state.status}
            />
          </div>
        ) : (
          <div className={s.status}>
            <span onDoubleClick={this.activeEditMode}>
              {this.props.status || "Статус не установлен"}
            </span>
          </div>
        )}
      </>
    );
  }
}
export default ProfileStatus;
