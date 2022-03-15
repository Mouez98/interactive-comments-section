import React from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";

import styles from './Comments.module.css'

const Comments = () => {
    return(<main className={styles.Comments}>
       <Comment />
       <AddComment />
    </main>)
}

export default Comments;