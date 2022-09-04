import { createSlice, createEntityAdapter, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import currentUserImage from '../asset/images/avatars/image-juliusomo.png';
import ramsesmiron from '../asset/images/avatars/image-ramsesmiron.png';

const REPLIES = [
  {
    id: 3,
    commentId: 2,
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: 1648249200000,
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
    createdAt: 1648422000000,
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
  sortComparer: (a,b) => a.createdAt.toString().localeCompare(b.createdAt.toString())
});

const repliesSlice = createSlice({
  name: 'replies',
  initialState: repliesAdapter.getInitialState(),
  reducers: {
    addReplies: (state) => {
      repliesAdapter.upsertMany(state, REPLIES);
    },
    addReply: {reducer:(state, action) => {
     repliesAdapter.upsertOne(state, action.payload)
    }, prepare: (content, replyId, user, commentId) => {
      return{
        payload: {
          id: nanoid,
          createdAt: new Date().toISOString(),
          score: 0,
          content,
          replyId,
          user,
          commentId
        }
      }
    }},
  },
});

export const {
  selectAll: selectAllReplies,
  selectById: selectReplyById,
  selectIds: selectRepliesIds,
} = repliesAdapter.getSelectors((state) => state.replies);


export const repliesReducer = repliesSlice.reducer;
export const repliesActions = repliesSlice.actions;
