import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { commentsActions, selectCommentById, showReplies } from "../../../store/commentsSlice";
import { getCurrentUser } from "../../../store/usersSlice";

import ModalOverlay from "../../ui/ModalOveraly";

import reply from "../../../asset/images/icon-reply.svg";
import edit from "../../../asset/images/icon-edit.svg";
import btnDelete from "../../../asset/images/icon-delete.svg";
import styles from "./Comment.module.css";

const BtnsContainer = ({ id, replyId = 1, showEditForm }) => {
  const currentUser = useSelector(getCurrentUser)
  const [deleteComment, setDeleteComment] = useState(false);
  const dispatch = useDispatch();
  const comment = useSelector(state => selectCommentById(state, id))

  const replyHandler = () => dispatch(commentsActions.showReplies({id}));
  const alertHandler = () => {
    setDeleteComment(!deleteComment);
    
  };

  const onDeleteHandler = replyId 
    ? { replyId  , id, type: "reply" }
    : { id, type: "comment" };

  return (
    <>
      {deleteComment && (
        <ModalOverlay onClose={alertHandler} onDelete={onDeleteHandler} id={id}/>
      )}
      <div className={styles.btnsContainer}>
        {comment?.user?.username === currentUser?.username && (
          <>
            <button
              style={{ color: "hsl(358, 79%, 66%)" }}
              onClick={alertHandler}
            >
              <img src={btnDelete} alt="delete" /> delete
            </button>
            <button onClick={showEditForm}>
              <img src={edit} alt="edit" /> edit
            </button>
          </>
        )}
        {comment?.user?.username !== currentUser?.username && (
          <button onClick={replyHandler}>
            <img src={reply} alt="reply" /> reply
          </button>
        )}
      </div>
    </>
  );
};

export default BtnsContainer;
