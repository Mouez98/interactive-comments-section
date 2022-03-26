import React, {useState} from 'react';

import { useDispatch } from 'react-redux';
import { commentsActions } from '../../../../store/store';

import Button from '../../../ui/Button';



import styles from './EditText.module.css'
const EditTextForm = (props) => {
    const [updatedText, setUpdatedText] = useState((props.replyingTo ? props.replyingTo : '') + props.content);

    const dispatch = useDispatch()
    console.log(props.replyingTo)

    const onChangeHandler = (e) => setUpdatedText(e.target.value)

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if(updatedText.length === 0){
            return
        }
       dispatch(commentsActions.editComment({
           commentId: props.commentId,
           replyId: props.replyId,
           updatedText: updatedText,
           type: props.type
       }))
       props.editHandler()
    }
  return <form onSubmit={onSubmitHandler}>
      <div className={styles.formControl}>
       <textarea value={updatedText} onChange={onChangeHandler}>    
       </textarea>
       <Button type='submit'>
           Update
       </Button>
      </div>
  </form>
}

export default EditTextForm ;