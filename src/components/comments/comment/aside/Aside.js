import React from "react";

import { useDispatch } from "react-redux";
import { commentsActions } from "../../../../store/store";
import minus from '../../../../asset/images/icon-minus.svg'
import plus from '../../../../asset/images/icon-plus.svg'

const Aside = ({score, curUserId, authorId}) => {
  const dispatch = useDispatch();

  const scoreHandler = (type) => {
     dispatch(commentsActions.addScore({
       curUserId,
       authorId,
       type
     }))
  }
  return(
  <aside>
    <button onClick={()=> scoreHandler('plus')}>
    <img src={plus} alt='+' />
    </button>
    <p>
      {score}
    </p>
    <button onClick={()=> scoreHandler('minus')}>
        <img src={minus} alt='-' />
    </button>
  </aside>
)};

export default Aside;
