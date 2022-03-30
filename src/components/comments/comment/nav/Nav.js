import React from "react";

import User from "../user/User";
import BtnsContainer from "../commentBtns/BtnsContainer";

const Nav = ({ currentUser, createdAt, user, commentId, editHandler, replyId }) => {
  // const [createdAtCountUp, setCreatedAtCountUp] = useState(createdAt);

  // const createdAtHandler = useCallback(() => {
  //   let createdTime = createdAt;
  //   let curTime = new Date().getTime();

  //   let uploadedTime = Math.abs(curTime - createdTime);


  //   let months = Math.floor(uploadedTime / (1000 * 60 * 60 * 24 * 30));
  //   let weeks = Math.floor(uploadedTime / (1000 * 60 * 60 * 24 * 7));
  //   let days = Math.floor(uploadedTime / (1000 * 60 * 60 * 24));
  //   let hours = Math.floor(
  //     (uploadedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   let minutes = Math.floor(
  //     (uploadedTime % (1000 * 60 * 60 * 24)) / (1000 * 60)
  //   );
  //   let createdAtValue =
  //     createdAt && minutes < 60 && !hours && !days && !weeks && !months
  //       ? `${minutes} ${minutes === 0 ? "now" : minutes === 1 ? "minute ago" : "minutes ago"} `
  //       : hours < 24 && !days && !weeks && !months
  //       ? `${hours} ${hours === 1 ? "hour ago" : "hours ago"} `
  //       : days < 30 && !weeks && !months
  //       ? `${days} ${days === 1 ? "day ago" : "days ago"} `
  //       : weeks < 7 && !months
  //       ? `${weeks} ${weeks === 1 ? "week ago" : "weeks ago"} `
  //       : `${months} ${months === 1 ? "month ago" : "months ago"} `
  //   setCreatedAtCountUp(createdAtValue);
  // }, [createdAt]);

  // useEffect(() => {
  //   createdAtHandler();
  // }, [createdAtHandler]);

  return (
    <nav>
      <User
        currentUser={currentUser}
        createdAt={createdAt}
        user={user}
      />
      <BtnsContainer
        user={user}
        currentUser={currentUser}
        commentId={commentId}
        replyId={replyId}
        editHandler={editHandler}
      />
    </nav>
  );
};

export default Nav;
