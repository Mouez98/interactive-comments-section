import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCommentById } from '../../store/commentsSlice';
import { getCurrentUser } from '../../store/usersSlice';

import Aside from '../aside/Aside';
import Nav from '../nav/Nav';
import TextContent from '../content/TextContent';
import Replies from '../../features/replies/Replies';
import styles from './Comment.module.css';
import EditTextForm from '../content/EditTextForm';

const Comment = ({ id }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const comment = useSelector((state) => selectCommentById(state, id));
  const currentUser = useSelector(getCurrentUser);

  if (!comment) {
    return <p>No comment found!</p>;
  }

  const showEditFormHandler = () => setShowEditForm(!showEditForm);

  return (
    <>
      <section className={styles.Comment}>
        <article>
          <Nav id={id} user={comment.user} createdAt={comment.createdAt} showEditForm={showEditFormHandler}/>
          {showEditForm  ? (
            <EditTextForm id={id} showEditForm={showEditFormHandler} type="comment" {...comment} />
          ) : (
            <TextContent id={id} content={comment.content} />
          )}
        </article>
        <Aside id={id} score={comment.score} />
      </section>
      {comment.showReplies && (
        <Replies
          currentUser={currentUser}
          id={id}
          edit={showEditForm}
          editHandler={showEditFormHandler}
        />
      )}
    </>
  );
};

export default React.memo(Comment);
