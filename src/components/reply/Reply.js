import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/usersSlice';

import Nav from '../nav/Nav';
import TextContent from '../content/TextContent';
import Aside from '../aside/Aside';
import styles from '../comment/Comment.module.css';
import EditTextForm from '../content/EditTextForm';

const Reply = ({
  id,
  content,
  user,
  score,
  createdAt,
  replyingTo,
  commentId,
}) => {
  const currentUser = useSelector(getCurrentUser);
  const [showEditForm, setShowEditFrom] = useState(false);

  const showReplyEditFormHandler = () => setShowEditFrom((prev) => !prev);

  return (
    <>
      <article className={styles.reply}>
        <Nav
          id={id}
          user={user}
          createdAt={createdAt}
          type="reply"
          showReplyEditForm={showEditForm}
          showReplyEditFormHandler={showReplyEditFormHandler}
        />
        {showEditForm && currentUser.username === user.username ? (
          <EditTextForm
            type="reply"
            showEditForm={showReplyEditFormHandler}
            content={content}
            commentId={commentId}
            replyingTo={replyingTo}
            replyId={id}
          />
        ) : (
          <TextContent content={content} replyingTo={replyingTo} />
        )}
        <Aside score={score} curUserId={currentUser.id} id={id} type="reply" />
      </article>
    </>
  );
};

export default React.memo(Reply);
