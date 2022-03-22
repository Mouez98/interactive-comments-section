import React,{useState} from "react";

import { data } from "../data";

const CommentsContext = ()=> React.createContext({
    comments: [],
    currentUser: {}

});


export default  (props) => {
    const [comments, setComments] = useState(data.comments)
    const currentUser = data.currentUser
return (
   <CommentsContext.Provider value={{comments: comments}}>
      {props.children}
   </CommentsContext.Provider>
)
}