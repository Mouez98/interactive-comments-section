import React from "react";


import Aside from "./aside/Aside";
import Nav from "./nav/Nav";
import TextContent from "./textContent/TextContent";
import Replies from "../replies/Replies";
import styles from "./Comment.module.css";

const Comment = ({ user, content, createdAt, score, currentUser, replies, id, showReplies }) => {
  return (
    <>
      <section className={styles.Comment}>
        <article>
          <Nav currentUser={currentUser} user={user} createdAt={createdAt} commentId={id} />
          <TextContent content={content} />
        </article>
        <Aside score={score} curUserId={currentUser.id} authorId={id}/>
      </section>
      {showReplies && (
        <Replies showReplies={showReplies} replies={replies} currentUser={currentUser}  id={id} user={user}/>
      ) }
     
    </>
  );
};

export default Comment;
