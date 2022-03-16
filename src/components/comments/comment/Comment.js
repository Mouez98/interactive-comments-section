import React from "react";

import styles from "./Comment.module.css";
import reply from "../../../asset/images/icon-reply.svg";
// import edit from "../../../asset/images/icon-edit.svg";
import btnDelete from '../../../asset/images/icon-delete.svg';
import Avatar from "./avatar/Avatar";
import Aside from "./aside/Aside";


const Comment = () => {
  return (
    <section className={styles.Comment}>
      <article>
        <nav>
          <div className={styles.user}>
            <Avatar />
            <p>user name <span>you</span></p>
            
            <p className={styles.time}>1 month ago</p>
          </div>
          <div className={styles.btnsContainer}>
          <button style={{color: '#f00'}}>
            <img src={btnDelete} alt="delete" /> delete
          </button> 
           <button>
            <img src={reply} alt="reply" /> reply
          </button>
          {/* <button>
            <img src={edit} alt="edit" /> edit
          </button> */}
          </div>
          
        </nav>
        <div className={styles.text}>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </div>
      </article>
     <Aside />
    </section>
  );
};

export default Comment;
