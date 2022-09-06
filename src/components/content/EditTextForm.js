import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  commentsActions,
  selectCommentById,
} from '../../store/commentsSlice';
import { repliesActions, selectReplyById } from '../../store/repliesSlice';

import Button from '../ui/Button';

import styles from './EditText.module.css';

const EditTextForm = ({ type, showEditForm, id, commentId, replyId }) => {
  const comment = useSelector((state) => selectCommentById(state, id));
  const reply = useSelector((state) => selectReplyById(state, replyId));
let content;

type === 'comment'? content = comment.content : content = reply.content

  const [updatedText, setUpdatedText] = useState(content);

  const dispatch = useDispatch();

  if (!content) {
    return <p>no data found</p>;
  }


  const onChangeHandler = (e) => setUpdatedText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (updatedText.length === 0) {
      return;
    }
    if(type === 'reply') dispatch(repliesActions.updateReply({id:replyId, content: updatedText}))
    
    if(type === 'comment') dispatch( commentsActions.updateComment({id, content: updatedText,}));
    
    showEditForm();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.formControl}>
        <textarea value={updatedText} onChange={onChangeHandler}></textarea>
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
};

export default EditTextForm;
