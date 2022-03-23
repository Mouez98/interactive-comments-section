import React from "react";

import Avatar from "../avatar/Avatar";
import styles from "../Comment.module.css";

const User = ({ user, currentUser, createdAt }) => {
  return(
  <div className={styles.user}>
    <Avatar img={user.image} user={user.username} />
    <p>
      {user.username}
      {user.username === currentUser.username ? <span>you</span> : null}
    </p>
    <p className={styles.time}>{createdAt}</p>
  </div>
);}

export default User;
