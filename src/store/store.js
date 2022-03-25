import { createSlice, configureStore, current } from "@reduxjs/toolkit";

import currentUserImage from "../asset/images/avatars/image-juliusomo.png";
import amyrobson from "../asset/images/avatars/image-amyrobson.png";
import maxblagun from "../asset/images/avatars/image-maxblagun.png";
import ramsesmiron from "../asset/images/avatars/image-ramsesmiron.png";

const initialState = {
  currentUser: {
    image: currentUserImage,
    username: "juliusomo",
    id: 4 ,
  },
  comments: [
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      showReplies: false,
      user: {
        image: amyrobson,
        username: "amyrobson",
      },
      replies: {
        comments: [],
        votes: [],
      },
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      showReplies: false,
      score: 5,
      user: {
        image: maxblagun,
        username: "maxblagun",
      },
      replies: {
        comments: [
          {
            id: 3,
            content:
              "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            createdAt: "1 week ago",
            score: 4,
            replyingTo: "maxblagun",
            user: {
              image: ramsesmiron,
              username: "ramsesmiron",
            },
            votes : []
          },
          {
            id: 4,
            content:
              "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            createdAt: "2 days ago",
            score: 2,
            replyingTo: "ramsesmiron",
            user: {
              image: currentUserImage,
              username: "juliusomo",
            },
            votes: []
          },
        ],
        votes: [],
      },
    },
  ],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    addReply: (state, action) => {
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      const comment = state.comments[commentIndex];
      comment.replies.comments.push(action.payload);
    },
    showReplies: (state, action) => {
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === action.payload
      );
      let comment = state.comments[commentIndex];
      comment.showReplies = !comment.showReplies;
    },
    addScore: (state, action) => {
      const { curUserId, authorId, type } = action.payload;
      const commentIndex = state.comments.findIndex(
        (comment) => comment.id === authorId
      );

      let comment = state.comments[commentIndex];
      let score = comment.score;
      let votes = comment.replies.votes;

      const likeIndex = votes.findIndex((id) => id === curUserId);

      if (!votes.includes(curUserId) && type === "plus") {
        votes.push(curUserId);
        score = ++comment.score;
      }

      if (votes.includes(curUserId) && type === "minus") {
        comment.score = comment.score - 1;
        votes.splice(likeIndex, 1);
      }
    },
  },
});

const store = configureStore({
  reducer: commentsSlice.reducer,
});

export const commentsActions = commentsSlice.actions;

export default store;
