import React from "react";

import Avatar from "../avatar/Avatar";
import styles from '../Comment.module.css'

const User = ({user, currentUser, createdAt}) => (
    <div className={styles.user}>
    <Avatar img={user.image.png} user={user.username}/>            
    <p>
      {user.username}
      {user.username === currentUser ? <span>you</span> : null}
    </p>
    <p className={styles.time}>{createdAt}</p>
  </div>
)

export default User