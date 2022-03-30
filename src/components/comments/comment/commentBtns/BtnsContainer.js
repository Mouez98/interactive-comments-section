import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { commentsActions } from "../../../../store/commets";
import ModalOverlay from "../../../ui/ModalOveraly";

import reply from "../../../../asset/images/icon-reply.svg";
import edit from "../../../../asset/images/icon-edit.svg";
import btnDelete from "../../../../asset/images/icon-delete.svg";
import styles from "../Comment.module.css";

const BtnsContainer = ({
  user,
  currentUser,
  commentId,
  editHandler,
  replyId,
}) => {
  const [deleteComment, setDeleteComment] = useState(false);
  const dispatch = useDispatch();

  const replyHandler = () => dispatch(commentsActions.showReplies(commentId));
  const alertHandler = () => {
    setDeleteComment(!deleteComment);
  };

  const onDeleteHandler = replyId ? {replyId, commentId, type: 'reply'} : {commentId, type:'comment'}
  

  return (
    <>
      {deleteComment && (
        <ModalOverlay
          onClose={alertHandler}
          onDelete={onDeleteHandler}
        />
      )}
      <div className={styles.btnsContainer}>
        {user.username === currentUser.username && (
          <>
            <button
              style={{ color: "hsl(358, 79%, 66%)" }}
              onClick={alertHandler}
            >
              <img src={btnDelete} alt="delete" /> delete
            </button>
            <button onClick={editHandler}>
              <img src={edit} alt="edit" /> edit
            </button>
          </>
        )}
        {user.username !== currentUser.username && (
          <button onClick={replyHandler}>
            <img src={reply} alt="reply" /> reply
          </button>
        )}
      </div>
    </>
  );
};

export default BtnsContainer;
