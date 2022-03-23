import React from "react";
import AddComment from "./comment/AddComment";
import Comment from "./comment/Comment";

import styles from "./Comments.module.css";

const Comments = ({ currentUser, comments }) => {

  return (
    <main className={styles.Comments}>
      {comments &&
        comments.map((comment) => (
          <Comment key={comment.id} {...comment} currentUser={currentUser} />
        ))}

      <AddComment {...currentUser} type='comment' />
      
    </main>
  );
};

export default Comments;
