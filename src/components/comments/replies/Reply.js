import React from "react";

import Nav from "../comment/nav/Nav";
import TextContent from "../comment/textContent/TextContent";
import Aside from "../comment/aside/Aside";
import styles from "../comment/Comment.module.css";

const Reply = ({ user, content, score, replyingTo, createdAt, currentUser }) => {

  return (
    <article className={styles.reply}>
      <Nav currentUser={currentUser} user={user} createdAt={createdAt} />
      <TextContent content={content} replyingTo={replyingTo} />
      <Aside score={score} />
    </article>
  );
};

export default Reply;
