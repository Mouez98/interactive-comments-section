import React, { useState } from "react";

import styles from "./AddComment.module.css";
// import author from "../../../asset/images/avatars/image-juliusomo.png";
import Avatar from "./avatar/Avatar";

const AddComment = ({currentUser}) => {
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
          <textarea
            onChange={onChangeHandler}
            type="text"
            id="addComment"
            placeholder="Add a comment..."
            value={addComment}
          />
          <Avatar img={currentUser.image.png} user={currentUser.username} />
          <button type="submit">Send</button>
        </div>
      </form>
    </article>
  );
};

export default AddComment;
