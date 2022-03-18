import React from "react";

import { data } from "../../../data";

const Replies = () => {
  const replies = data.comments.map((comment) => comment.replies).map(replies => replies.length > 0 && replies)
  console.log(replies);
  return (
    <section className="Replies">
      {replies
        ? replies.map((reply) =>console.log(reply.content))
        : null}
    </section>
  );
};

export default Replies;
