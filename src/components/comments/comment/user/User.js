import React, {useEffect, useState} from "react";

import Avatar from "../avatar/Avatar";
import styles from "../Comment.module.css";

const createdAtHandler = (createdAt) => {
  let createdTime = createdAt;
  let curTime = new Date().getTime();

  let uploadedTime = Math.abs(curTime - createdTime);

  let months = Math.floor(uploadedTime / (1000 * 60 * 60 * 24 * 30));
  let weeks = Math.floor(uploadedTime / (1000 * 60 * 60 * 24 * 7));
  let days = Math.floor(uploadedTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (uploadedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor(
    (uploadedTime % (1000 * 60 * 60 * 24)) / (1000 * 60)
  );
  let createdAtValue =
    createdAt && minutes < 60 && !hours && !days && !weeks && !months
      ? `${minutes} ${minutes === 0|1 ?  "minute ago" : "minutes ago"} `
      : hours < 24 && !days && !weeks && !months
      ? `${hours} ${hours === 1 ? "hour ago" : "hours ago"} `
      : days < 30 && !weeks && !months
      ? `${days} ${days === 1 ? "day ago" : "days ago"} `
      : weeks < 7 && !months
      ? `${weeks} ${weeks === 1 ? "week ago" : "weeks ago"} `
      : `${months} ${months === 1 ? "month ago" : "months ago"} `;
      return  createdAtValue
};

const User = ({ user, currentUser, createdAt }) => {
  const createdAtCountUp = useState(createdAtHandler(createdAt))[0];
 
  useEffect(() => {
    createdAtHandler(createdAt);
  }, [createdAt]);

  return(
  <div className={styles.user}>
    <Avatar img={user.image} user={user.username} />
    <p>
      {user.username}
      {user.username === currentUser.username ? <span>you</span> : null}
    </p>
    <p className={styles.time}>{createdAtCountUp}</p>
  </div>
);}

export default User;
