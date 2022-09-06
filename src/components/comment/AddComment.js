import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { commentsActions } from '../../store/commentsSlice';
import { getCurrentUser } from '../../store/usersSlice';

import Avatar from '../nav/Avatar';
import Button from '../ui/Button';
import styles from './AddComment.module.css';

const AddComment = () => {
  const currentUser = useSelector(getCurrentUser)
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const onChangeHandler = (e) => setComment(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!comment || comment.trim().length === 0) {
      return;
    }
      dispatch(
        commentsActions.addComment(
         { content: comment,
          user: {
            image: currentUser.image,
            username: currentUser.username,
          }},
        )
      );

    setComment('');
  };

  return (
    <div className={styles.AddComment}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formContainer}>
          <textarea
            onChange={onChangeHandler}
            id="addComment"
            placeholder="Add a comment..."
            value={comment}
          />
          <Avatar user={currentUser} />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(AddComment);
