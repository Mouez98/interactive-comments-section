import React from "react";

import Reply from "./Reply";
import AddComment from "../comment/AddComment";
import styles from "../comment/Comment.module.css";

const Replies = ({ replies, currentUser }) => {
  return (
    <section className={styles.Replies}>
      {replies.map((reply) => (
        <Reply key={reply.id} {...reply} currentUser={currentUser} />
      ))}
      <AddComment currentUser={currentUser} />
    </section>
  );
};

export default Replies;
