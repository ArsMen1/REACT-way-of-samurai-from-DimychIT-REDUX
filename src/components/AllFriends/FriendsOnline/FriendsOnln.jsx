import s from "./FriendsOnln.module.css";
import React from "react";


const FriendsOnln = (props) => {
    return (
        <div className={s.friend}>
            <img src={props.ava}/> {props.name}
        </div>
    );
}


export default FriendsOnln;