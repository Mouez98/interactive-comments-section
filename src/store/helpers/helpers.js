/**
 *
 * @param {* state} state
 * @param {* action} action
 * @param {* adapter} adapter
 * @returns
 */
exports.addOne = (state, action, adapter) => {
  adapter.upsertOne(state, action.payload);
};

exports.removeOne = (state, action, adapter) => {
  adapter.removeOne(state, action.payload.id);
 }

exports.updateOne = (state, action, adapter) => {
  adapter.upsertOne(state, action.payload);
}

exports.addScore = (state, action) => {
  const { id, actionType } = action.payload;
  const excitingDocument = state.entities[id];
  if (actionType === 'upvote' && excitingDocument) {
    excitingDocument.score++;
  } else if (actionType === 'downvote' && excitingDocument) {
    excitingDocument.score--;
  } else {
    console.log('no document found');
  }
};
