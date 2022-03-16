import React, { useState } from "react";

import styles from "./AddComment.module.css";
import author from "../../../asset/images/avatars/image-juliusomo.png";

const AddComment = () => {
  const [addComment, setAddComment] = useState("");

  const onChangeHandler = (e) => setAddComment(e.target.value)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!addComment || addComment.trim.length === "") {
      return;
    }
    console.log(addComment);
  };

  return (
    <article className={styles.AddComment}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formContainer}>
          <input
            onChange={onChangeHandler}
            type="text"
            id="addComment"
            placeholder="Add a comment..."
            value={addComment}
          />
          <img src={author} alt="author" />
          <button type="submit">Send</button>
        </div>
      </form>
    </article>
  );
};

export default AddComment;
