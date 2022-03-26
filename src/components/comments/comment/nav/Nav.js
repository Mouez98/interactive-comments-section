import React from "react";

import User from "../user/User";
import BtnsContainer from "../commentBtns/BtnsContainer";


const Nav = ({currentUser, createdAt, user, commentId, editHandler}) => {
 
  return(
    <nav>
    <User currentUser={currentUser} createdAt={createdAt} user={user} />
    <BtnsContainer user={user} currentUser={currentUser} id={commentId} editHandler={editHandler}/>
  </nav>
)}

export default Nav;