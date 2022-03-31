import React from "react";

import Nav from "../comment/nav/Nav";
import TextContent from "../comment/textContent/TextContent";
import Aside from "../comment/aside/Aside";
import styles from "../comment/Comment.module.css";
import EditTextForm from "../comment/textContent/EditTextForm";
import AddComment from "../comment/AddComment";

const Reply = ({showReply, edit, editHandler, user, content, score, replyingTo, createdAt, currentUser, commentId, id
}) => {
  console.log(currentUser.username === user.username);
    return (
      <>
    <article className={styles.reply}>
      <Nav
        currentUser={currentUser}
        user={user}
        createdAt={createdAt}
        commentId={commentId}
        replyId={id}
        editHandler={editHandler}
      />
     {edit && currentUser.id === id ? <EditTextForm type='reply' editHandler={editHandler} content={content} commentId={commentId} replyingTo={replyingTo} replyId={id}/>:  <TextContent content={content} replyingTo={replyingTo}/>} 
      <Aside score={score}  curUserId={currentUser.id} authorId={id}/>
    </article>
      {(currentUser.username !== user.username) && showReply && <AddComment {...currentUser} user={user} type='reply' id={commentId}/> }
      </>
  );
};

export default Reply;
