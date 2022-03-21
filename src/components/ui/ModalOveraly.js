import React from "react";
import ReactDOM from "react-dom";

import styles from "./ModalOverlay.module.css";

export const Overlay = (props) => {
  return (
    <div className={styles.overlay}>
      <h2>Delete comment</h2>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can't undone.
      </p>
      <div className={styles.btnContainer}>
        <button className={styles.success}>no, cancel</button>
        <button className={styles.danger}>yes, delete</button>
      </div>
    </div>
  );
};

export const Modal = (props) => {
  return <div className={styles.modal}></div>;
};

const Backdrop = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Modal />, document.getElementById("modal"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </>
  );
};

export default Backdrop;
