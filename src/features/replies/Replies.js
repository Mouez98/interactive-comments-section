import React from "react";
import { useSelector } from "react-redux";
import {selectAllReplies} from "../../store/repliesSlice";

import Reply from "../../components/reply/Reply";
import AddReply from "../../components/reply/AddReplyForm";
import styles from "../../components/comment/Comment.module.css";

const Replies = ({  currentUser, id, user, editShown, editHandler }) => {
  // const [replyId, setReplyId] = useState(null)
  const allRepliesIds = useSelector(selectAllReplies)

  // const getRepyId = (replyId) => setReplyId(replyId)

  const getRepliesByComment = allRepliesIds?.filter(reply => reply.commentId === id)
  const orderedReplies = [...getRepliesByComment].sort((a,b) => a.createdAt - b.createdAt)
  return (
    <section className={styles.Replies}>
      {orderedReplies.map((reply) => (
        <Reply   key={reply.id} {...reply} commentId={id} currentUser={currentUser} editHandler={editHandler} edit={editShown} />
      ))}
      <AddReply commentId={id}  user={user} />
    </section>
  );
};

export default Replies;
