import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { repliesActions } from '../../../store/repliesSlice';
import { getCurrentUser } from '../../../store/usersSlice';

import Avatar from '../comment/Avatar';
import Button from '../../ui/Button';
import styles from '../comment/AddComment.module.css'

const AddReplyForm = ({id,commentId}) => {
    const currentUser = useSelector(getCurrentUser)

    const [reply, setReply] = useState('');
    const dispatch = useDispatch();
  
    const onChangeHandler = (e) => setReply(e.target.value);
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
      if (!reply || reply.trim().length === 0) {
        return;
      }

        dispatch(
          repliesActions.addReply({
            replyId: id,
            content: reply,
            score: 0,
            commentId,
            user: {
              image: currentUser.image,
              username: currentUser.username,
            }
          })
        );
      setReply('');
    };
  return (
    <div className={styles.AddComment}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formContainer}>
          <textarea
            onChange={onChangeHandler}
            id="addReply"
            placeholder="Add a reply..."
            value={reply}
          />
          <Avatar user={currentUser} />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  )
}

export default AddReplyForm