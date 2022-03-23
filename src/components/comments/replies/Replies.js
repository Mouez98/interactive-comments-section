import React from "react";

import Reply from "./Reply";
import AddComment from "../comment/AddComment";
import styles from "../comment/Comment.module.css";

const Replies = ({ replies, currentUser, id, user, showReplies }) => {
  return (
    <section className={styles.Replies}>
      {replies.map((reply) => (
        <Reply key={reply.id} {...reply} commentId={id} currentUser={currentUser} />
      ))}
      {showReplies && <AddComment {...currentUser} type='reply' id={id} user={user}/>}  
    </section>
  );
};

export default Replies;
