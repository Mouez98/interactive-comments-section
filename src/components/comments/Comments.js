import React from "react";
import AddComment from "./comment/AddComment";
import Comment from "./comment/Comment";

import styles from './Comments.module.css'

const Comments = () => {
    return(<main className={styles.Comments}>
       <Comment />
       <AddComment />
    </main>)
}

export default Comments;