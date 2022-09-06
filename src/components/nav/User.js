import React from "react";
import  {formatDistanceToNow} from 'date-fns'

import Avatar from "./Avatar";
import styles from "../comment/Comment.module.css";
import {  useSelector } from "react-redux";
import { getCurrentUser } from "../../store/usersSlice";

// Replaced with date-fns
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

const User = ({ id, createdAt, user }) => {
  const currentUser = useSelector(getCurrentUser)

  const createdAtCountUp = `${formatDistanceToNow(new Date(createdAt))} ago`

  return(
  <div className={styles.user}>
    <Avatar id={id} user={user}/>
    <p>
      {user.username}
      {user.username === currentUser.username ? <span>you</span> : null}
    </p>
    <p className={styles.time}>{createdAtCountUp}</p>
  </div>
);}

export default User;
