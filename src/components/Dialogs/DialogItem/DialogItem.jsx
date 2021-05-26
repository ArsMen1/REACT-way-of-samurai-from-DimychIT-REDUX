import React from "react";
import s from "../Dialogs.module.css"
import {NavLink} from "react-router-dom";

//Пропс для определения человека в списке диалогов
const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog + ' ' + s.active}>
        <img src={props.ava} />
        <NavLink to={path} activeClassName={s.activeLink}> {props.name}</NavLink>
    </div>
}
export default DialogItem