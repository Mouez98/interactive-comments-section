import React from "react";

import styles from "../comment/Comment.module.css";

const TextContent = ({id,content}) => (

  <div className={styles.text}>
    <p>
      {/* {(props.replyingTo && props.type === 'reply') && <span>{props.replyingTo} </span>} */}
      {content}
    </p>
  </div>
);

export default TextContent;
