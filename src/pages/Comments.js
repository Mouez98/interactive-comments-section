import React from "react";
import { Outlet } from "react-router-dom";

import Comments from "../components/comments/Comments";

import { data } from "../data";

const CommentsP = () => {
  const { currentUser, comments } = data;
  return (
    <>
      <Outlet />
      <Comments currentUser={currentUser} comments={comments} />;
    </>
  );
};

export default CommentsP;
