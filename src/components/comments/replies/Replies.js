import React from "react";
import { useSelector } from "react-redux";
import {selectAllReplies} from "../../../store/repliesSlice";

import Reply from "./Reply";
import AddReply from "./AddReplyForm";
import styles from "../comment/Comment.module.css";

const Replies = ({  currentUser, id, user, showReplies, edit, editHandler }) => {
  const allRepliesIds = useSelector(selectAllReplies)

  const getRepliesByComment = allRepliesIds?.filter(reply => reply.commentId === id)
  const orderedReplies = [...getRepliesByComment].sort((a,b) => a.createdAt - b.createdAt)
  return (
    <section className={styles.Replies}>
      {orderedReplies.map((reply) => (
        <Reply key={reply.id} {...reply} commentId={id} currentUser={currentUser} editHandler={editHandler} edit={edit} />
      ))}
      <AddReply id={id} user={user}/>
    </section>
  );
};

export default Replies;
