import React from "react";

import Nav from "../comment/nav/Nav";
import TextContent from "../comment/textContent/TextContent";
import Aside from "../comment/aside/Aside";
import { data } from "../../../data";
import styles from '../comment/Comment.module.css'



const Reply = (props) => {
    const { currentUser} = data;
    console.log(props.user)
    return(<article className={styles.reply}>
        <Nav  currentUser={currentUser} user={props.user} createdAt={props.createdAt} />
        <TextContent content={props.content} replyingTo={props.replyingTo}/>
      <Aside score={props.score} />
    </article>)
}

export default Reply;