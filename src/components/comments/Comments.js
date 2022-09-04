import React from "react";

import {useSelector } from 'react-redux'
import AddComment from "./comment/AddComment";
import Comment from './comment/Comment'
import { selectCommentsIds} from '../../store/commentsSlice'

import styles from "./Comments.module.css";

const Comments = () => {
  const commentsIds = useSelector(selectCommentsIds);  
  // const currentUser = useSelector((state) => getCurrentUser(state))
 

  // const orderedComments = [...comments].sort((a,b) => a.score - b.score).reverse()
  
  return (
    <main className={styles.Comments}>
      {commentsIds.length &&
        commentsIds.map((commentId) => {
          return(
          <Comment key={commentId} id={commentId} />
        )})}

      <AddComment />
    </main>
  );
};

export default Comments;
