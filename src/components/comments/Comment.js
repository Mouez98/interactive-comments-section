import React from "react";

import styles from "./Comment.module.css";
import author from "../../asset/images/avatars/image-amyrobson.png";
import reply from "../../asset/images/icon-reply.svg";

const Comment = () => {
  return (
    <section className={styles.Comment}>
      <article>
        <nav>
          <div className={styles.author}>
            <img src={author} alt="author" />
            <p>author name</p>
            <p className={styles.time}>1 month ago</p>
          </div>
          <button>
            <img src={reply} alt="reply" /> reply
          </button>
        </nav>
        <div className={styles.text}>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </div>
      </article>
      <aside>
        <button>+</button>
        <p>2</p>
        <button>-</button>
      </aside>
    </section>
  );
};

export default Comment;
