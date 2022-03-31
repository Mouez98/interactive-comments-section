import React from "react";

import {useSelector } from 'react-redux'
import AddComment from "./comment/AddComment";
import Comment from "./comment/Comment";

import styles from "./Comments.module.css";

const Comments = () => {
  const { currentUser, comments } = useSelector(state => state);  
 
  const orderedComments = [...comments].sort((a,b) => a.score - b.score).reverse()
  
  return (
    <main className={styles.Comments}>
      {comments &&
        orderedComments.map((comment) => (
          <Comment key={comment.id} {...comment} currentUser={currentUser}  />
        ))}

      <AddComment {...currentUser} type="comment"  />
    </main>
  );
};

export default Comments;
