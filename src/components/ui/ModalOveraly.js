import React from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { commentsActions } from "../../store/commentsSlice";

import styles from "./ModalOverlay.module.css";

export const Overlay = (props) => {
  const dispatch = useDispatch()
  const onDeleteHandler = () => {
     dispatch(commentsActions.removeComment({id: props.id}))
    // props .onDelete.type === 'reply' && dispatch(commentsActions.removeReply(props.onDelete))
  }
  return (
    <div className={styles.overlay}>
      <h2>Delete comment</h2>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can't undone.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.success} onClick={props.onClose}>no, cancel</button>
        <button className={styles.danger} onClick={onDeleteHandler}>yes, delete</button>
      </div>
    </div>
  );
};

export const Modal = (props) => {
  return <div className={styles.modal} onClick={props.onClose}></div>;
};

const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Modal  onClose={props.onClose} />, document.getElementById("modal"))}
      {ReactDOM.createPortal(<Overlay id={props.id} onDelete={props.onDelete} onClose={props.onClose}/>, document.getElementById("overlay"))}
    </>
  );
};

export default Backdrop;
