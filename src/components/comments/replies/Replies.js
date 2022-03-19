import React from "react";

import { data } from "../../../data";
import Reply from "./Reply";
import styles from '../comment/Comment.module.css'


const Replies = () => {
  const allReplies = data.comments.map((comment) => comment.replies).filter(Reply => Reply.length >0 )
  const [[reply,reply2]] = allReplies
  console.log(reply2)


    return (
    <section className={styles.Replies}>
     <Reply {...reply} />
     <Reply {...reply2} />
    </section>
  );
};

export default Replies;
