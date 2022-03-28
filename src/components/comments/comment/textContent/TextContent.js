import React from "react";

import styles from "../Comment.module.css";

const TextContent = (props) => (
  <div className={styles.text}>
    <p>
      {(props.replyingTo && props.type === 'reply') && <span>{props.replyingTo} </span>}
      {props.content}
    </p>
  </div>
);

export default TextContent;
