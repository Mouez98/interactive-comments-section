import React from "react";
import AddComment from "./comment/AddComment";
import Comment from "./comment/Comment";
import { data } from "../../data";

import styles from "./Comments.module.css";
import Replies from "./replies/Replies";

const Comments = () => {
  const { currentUser, comments } = data;

  return (
    <main className={styles.Comments}>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} {...comment} currentUser={currentUser} />
        ))}

      <AddComment currentUser={currentUser} />
      
    </main>
  );
};

export default Comments;
