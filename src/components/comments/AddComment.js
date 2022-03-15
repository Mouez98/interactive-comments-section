import React from "react";

import styles from './AddComment.module.css'
import author from '../../asset/images/avatars/image-juliusomo.png'

const AddComment = () => {
    return(
    <article className={styles.AddComment}>
       <form>
           <div className={styles.formContainer}>
              <input type='text' id="addComment" placeholder="Add a comment..." />
           <img src={author} alt="author" />
           <button type="submit">
               Send
           </button> 
           </div>  
       </form>
    </article>)
}

export default AddComment;