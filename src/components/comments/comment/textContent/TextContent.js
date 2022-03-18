import React from "react";

import styles from "../Comment.module.css";

const TextContent = (props) => (
  <div className={styles.text}>
    {props.replyingTo && <p>@{props.replyingTo}</p>}
    {props.content}
  </div>
);

export default TextContent;
