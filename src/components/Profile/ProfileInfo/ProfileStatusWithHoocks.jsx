import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHoocks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChanche = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <div className={s.statusInput}>
          <input
            onChange={onStatusChanche}
            autoFocus={true}
            onBlur={deactiveEditMode}
            value={status}
          />
        </div>
      ) : (
        <div className={s.status}>
          <span onDoubleClick={activateMode}>
            {props.status || "Статус не установлен"}
          </span>
        </div>
      )}
    </>
  );
};
export default ProfileStatusWithHoocks;
