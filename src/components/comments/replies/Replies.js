import React from "react";

import Reply from "./Reply";
import AddComment from "../comment/AddComment";
import styles from "../comment/Comment.module.css";

const Replies = ({ replies, currentUser, id, user, showReplies, edit, editHandler }) => {
  return (
    <section className={styles.Replies}>
      {replies.comments.map((reply) => (
        <Reply key={reply.id} {...reply} commentId={id} currentUser={currentUser} editHandler={editHandler} edit={edit} />
      ))}
      {showReplies && <AddComment {...currentUser} type='reply' id={id} user={user}/>}  
    </section>
  );
};

export default Replies;
