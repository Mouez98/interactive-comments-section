import React from "react";

import styles from "./Comment.module.css";
import Aside from "./aside/Aside";
import Nav from "./nav/Nav";
import TextContent from "./textContent/TextContent";
import Replies from "../replies/Replies";
import AddComment from "./AddComment";

const Comment = ({ user, content, createdAt, score, currentUser, replies }) => {
  return (
    <>
      <section className={styles.Comment}>
        <article>
          <Nav currentUser={currentUser} user={user} createdAt={createdAt} />
          <TextContent content={content} />
        </article>
        <Aside score={score} />
      </section>
      {replies && replies.length > 0 ? (
        <Replies replies={replies} currentUser={currentUser} />
      ) : null}
     
    </>
  );
};

export default Comment;
