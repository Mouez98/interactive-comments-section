import React, { useState } from "react";

import styles from "./AddComment.module.css";
import { useDispatch } from "react-redux";
import { commentsActions } from "../../../store/store";
import Avatar from "./avatar/Avatar";

const AddComment = ({ image, username, type, id, user }) => {
  const [comment, setComment] = useState("");
  
  const dispatch = useDispatch()

  const onChangeHandler = (e) => setComment(e.target.value)

  const onSubmitHandler =  (e) => {
    e.preventDefault();
    if (!comment || comment.trim.length === "") {
      return;
    }
    type === 'comment' &&
    dispatch(commentsActions.addComment({
      id: new Date().getTime(),
      content: comment ,
      createdAt: new Date().getDate(),
      score: 0,
      user: {
        image,
        username
      },
      replies: []
    }))

    type === 'reply' && dispatch(commentsActions.addReply({
       id: id,
       content: comment,
       score: 0,
       replyingTo: user.username,
       user:{
         image,
         username
       }
    }))
    setComment('')
  };

  return (
    <article className={styles.AddComment}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formContainer}>
          <textarea
            onChange={onChangeHandler}
            type="text"
            id="addComment"
            placeholder="Add a comment..."
            value={comment}
          />
          <Avatar img={image} user={username} />
          <button type="submit">Send</button>
        </div>
      </form>
    </article>
  );
}

export default React.memo(AddComment);
