import React from "react";

import {useSelector } from 'react-redux'
import AddComment from "../../components/comment/AddComment";
import Comment from '../../components/comment/Comment'
import { selectCommentsIds} from '../../store/commentsSlice'

import styles from "./Comments.module.css";

const Comments = () => {
  const commentsIds = useSelector(selectCommentsIds);  
    
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
