import React from "react";

import reply from "../../../../asset/images/icon-reply.svg";
import edit from "../../../../asset/images/icon-edit.svg";
import btnDelete from "../../../../asset/images/icon-delete.svg";
import styles from "../Comment.module.css";

const BtnsContainer = ({ user, currentUser }) => {
  return (
    <div className={styles.btnsContainer}>
      {user.username === currentUser.username && (
        <>
          <button style={{ color: "#f00" }}>
            <img src={btnDelete} alt="delete" /> delete
          </button>
          <button>
            <img src={edit} alt="edit" /> edit
          </button>
        </>
      )}
      {user.username !== currentUser.username && (
        <button>
          <img src={reply} alt="reply" /> reply
        </button>
      )}
    </div>
  );
};

export default BtnsContainer;
