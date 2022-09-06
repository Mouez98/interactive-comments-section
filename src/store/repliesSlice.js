import { createSlice, createEntityAdapter, nanoid, createSelector } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import currentUserImage from '../asset/images/avatars/image-juliusomo.png';
import ramsesmiron from '../asset/images/avatars/image-ramsesmiron.png';
import { addOne, addScore, removeOne, updateOne } from './helpers/helpers';

const REPLIES = [
  {
    id: 3,
    commentId: 2,
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: sub(new Date(), { hours: 9 }).toISOString(),
    score: 4,
    showReply: false,
    replyingTo: '@maxblagun',
    user: {
      image: ramsesmiron,
      username: 'ramsesmiron',
    },
  },
  {
    id: 4,
    commentId: 2,
    content:
      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: sub(new Date(), { hours: 9 }).toISOString(),
    showReply: false,
    score: 2,
    replyingTo: '@ramsesmiron',
    user: {
      image: currentUserImage,
      username: 'juliusomo',
    },
  },
];

const repliesAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt),
});

const repliesSlice = createSlice({
  name: 'replies',
  initialState: repliesAdapter.getInitialState(),
  reducers: {
    addReplies: (state) => {
      repliesAdapter.upsertMany(state, REPLIES);
    },
    addReply: {
      reducer: (state, action) => {
        addOne(state, action, repliesAdapter);
      },
      prepare: ({content, user, commentId}) => {
        return {
          payload: {
            id: nanoid(),
            createdAt: new Date().toISOString(),
            score: 0,
            content,
            user,
            commentId,
          },
        };
      },
    },
    addScore: (state,action) => addScore(state,action),
    removeReply: (state, action) => removeOne(state, action, repliesAdapter),
    updateReply: (state, action) => updateOne(state, action, repliesAdapter)
  },
});

export const {
  selectAll: selectAllReplies,
  selectById: selectReplyById,
  selectIds: selectRepliesIds,
} = repliesAdapter.getSelectors((state) => state.replies);

export const repliesReducer = repliesSlice.reducer;
export const repliesActions = repliesSlice.actions;
