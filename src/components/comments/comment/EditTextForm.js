import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  commentsActions,
  selectCommentById,
} from '../../../store/commentsSlice';

import Button from '../../ui/Button';

import styles from './EditText.module.css';

const EditTextForm = ({ type, showEditForm, id }) => {
  const comment = useSelector((state) => selectCommentById(state, id));
  
  const {  content } = comment;
  const [updatedText, setUpdatedText] = useState(content);

  const dispatch = useDispatch();

  if (!comment) {
    return <p>no data found</p>;
  }


  const onChangeHandler = (e) => setUpdatedText(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (updatedText.length === 0) {
      return;
    }
    dispatch(
      commentsActions.editComment({id,
        content: updatedText,
      })
    );
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
