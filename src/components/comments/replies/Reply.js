import React from 'react';
import { useSelector } from 'react-redux';
import { selectReplyById } from '../../../store/repliesSlice';

import Nav from '../comment/Nav';
import TextContent from '../comment/TextContent';
import Aside from '../comment/Aside';
import styles from '../comment/Comment.module.css';
import EditTextForm from '../comment/EditTextForm';
import AddComment from '../comment/AddComment';

const Reply =  ({ edit, editHandler, currentUser, id,content, user, score, createdAt, replyingTo, showReply, commentId}) => {
  return (
    <>
      <article className={styles.reply}>
        <Nav
         id={id} user={user} createdAt={createdAt}
        />
        {edit && currentUser.id === id ? (
          <EditTextForm
            type="reply"
            editHandler={editHandler}
            content={content}
            commentId={commentId}
            replyingTo={replyingTo}
            replyId={id}
          />
        ) : (
          <TextContent content={content} replyingTo={replyingTo} />
        )}
        <Aside score={score} curUserId={1} authorId={id} />
      </article>
      { showReply && (
        <AddComment  user={user} type="reply" commentId={commentId} id={id}/>
      )}
    </>
  );
};

export default Reply;
