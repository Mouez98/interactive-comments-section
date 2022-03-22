import React,{useReducer} from "react";

import User from "../user/User";
import BtnsContainer from "../commentBtns/BtnsContainer";

const reducer = (action,state) =>{
    if(action.type === 'SHOW-REPLIES'){
      return {showReplies: action.showReplies}
    }
    return state
};

const Nav = ({currentUser, createdAt, user}) => {
  const [state, dispatch] = useReducer(reducer, {showReplies:false})

  const showRepliesHandler = () => {
    dispatch({type: 'SHOW-REPLIES', showReplies: !state.showReplies})
  }
  return(
    <nav>
    <User currentUser={currentUser} createdAt={createdAt} user={user} />
    <BtnsContainer user={user} currentUser={currentUser} showReplies={state.showReplies} reply={showRepliesHandler}/>
  </nav>
)}

export default Nav;