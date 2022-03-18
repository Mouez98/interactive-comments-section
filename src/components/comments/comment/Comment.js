import React from "react";

import styles from "./Comment.module.css";
import Aside from "./aside/Aside";
import Nav from "./nav/Nav";
import TextContent from "./textContent/TextContent";

const Comment = ({ user, content, createdAt, score, currentUser }) => {
  return (
    <section className={styles.Comment}>
      <article>
        <Nav  currentUser={currentUser} user={user} createdAt={createdAt} />
        <TextContent content={content} />
      </article>
      <Aside score={score} />
    </section>
  );
};

export default Comment;
