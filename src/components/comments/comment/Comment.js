import React from "react";

import styles from "./Comment.module.css";
import BtnsContainer from "./commentBtns/BtnsContainer";
import Aside from "./aside/Aside";
import User from "./user/User";

const Comment = ({ user, content, createdAt, score, currentUser }) => {
  return (
    <section className={styles.Comment}>
      <article>
        <nav>
          <User currentUser={currentUser} createdAt={createdAt} user={user} />
          <BtnsContainer user={user} currentUser={currentUser} />
        </nav>
        <div className={styles.text}>{content}</div>
      </article>
      <Aside score={score} />
    </section>
  );
};

export default Comment;
