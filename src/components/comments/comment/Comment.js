import React, { useState } from "react";

import Aside from "./aside/Aside";
import Nav from "./nav/Nav";
import TextContent from "./textContent/TextContent";
import Replies from "../replies/Replies";
import styles from "./Comment.module.css";
import EditTextForm from "./textContent/EditTextForm";

const Comment = ({ user, content, createdAt, score, currentUser, replies, id, showReplies,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const editHandler = () => setIsEdit(!isEdit);

  return (
    <>
      <section className={styles.Comment}>
        <article>
          <Nav
            currentUser={currentUser}
            user={user}
            createdAt={createdAt}
            commentId={id}
            editHandler={editHandler}
          />
          {isEdit && currentUser.id === id ? (
            <EditTextForm
              content={content}
              id={id}
              editHandler={editHandler}
              type='comment'
              commentId={id}
            />
          ) : (
            <TextContent content={content} />
          )}
        </article>
        <Aside score={score} curUserId={currentUser.id} authorId={id} />
      </section>
      {showReplies && (
        <Replies
          showReplies={showReplies}
          replies={replies}
          currentUser={currentUser}
          id={id}
          user={user}
          edit={isEdit}
          editHandler={editHandler}
        />
      )}
    </>
  );
};

export default Comment;
