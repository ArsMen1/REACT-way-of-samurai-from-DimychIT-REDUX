import React from "react";
import s from "../Dialogs.module.css";

//Пропс для текста сообщений
const Message = (props) => {
    return (
        <div>
            <div className={s.messageFriend}>
                {props.messageFriend}
                <div className={s.messageIam}>
                    {props.messageIam}
                </div>
            </div>
        </div>)

}
export default Message