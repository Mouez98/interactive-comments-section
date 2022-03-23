import React from "react";
import { Outlet } from "react-router-dom";
import {useSelector } from 'react-redux'

import Comments from "../components/comments/Comments";

const CommentsP = () => {
  const { currentUser, comments } = useSelector(state => state);
  return (
    <>
      <Outlet />
      <Comments currentUser={currentUser} comments={comments} />
    </>
  );
};

export default CommentsP;
