import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

import amyrobson from '../asset/images/avatars/image-amyrobson.png';
import maxblagun from '../asset/images/avatars/image-maxblagun.png';

const COMMENTS = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: sub(new Date(), {days: 2}).toISOString(),
    score: 12,
    showReplies: false,
    user: {
      image: amyrobson,
      username: 'amyrobson',
    },
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: sub(new Date(), {days: 1}).toISOString(),
    showReplies: false,
    score: 5,
    user: {
      image: maxblagun,
      username: 'maxblagun',
    },
  },
];

const commentsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.score.toString().localeCompare(b.score.toString()),
});

const initialState = commentsAdapter.getInitialState({});

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComments: (state) => {
      commentsAdapter.upsertMany(state, COMMENTS);
    },
    addComment: {
      reducer: (state, action) => {
        commentsAdapter.addOne(state, action.payload);
      },
      prepare: ({ content, user }) => {
        return {
          payload: {
            id: nanoid(),
            content,
            user,
            createdAt: new Date().toISOString(),
            score: 0,
          },
        };
      },
    },
    showReplies: (state, action) => {
      const excitingComment = state.entities[action.payload.id];
      if (excitingComment)
        excitingComment.showReplies = !excitingComment.showReplies;
    },
    addScore: (state, action) => {
      const { id, type } = action.payload;
      const excitingComment = state.entities[id];
      if (type === 'upvote' && excitingComment) {
        excitingComment.score++;
      } else if (type === 'downvote' && excitingComment) {
        excitingComment.score--;
      } else {
        console.log('no comment found');
      }
    },
    removeComment: (state, action) => {
     commentsAdapter.removeOne(state, action.payload.id);
    },
    editComment: (state, action) => {
      commentsAdapter.upsertOne(state, action.payload);
    },
  },
});

export const {
  selectAll: allComments,
  selectIds: selectCommentsIds,
  selectById: selectCommentById,
} = commentsAdapter.getSelectors((state) => state.comments);

export const commentsReducer = commentsSlice.reducer;
export const commentsActions = commentsSlice.actions;
