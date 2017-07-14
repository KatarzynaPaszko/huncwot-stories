const Immutable = require('immutable'); 

module.exports = function (state = Immutable.Map({ stories: [] }), action) {
  switch (action.type) {
    case 'UPVOTE':
      const idx = state.get('stories').findIndex(_ => _.get('id') === action.id);
      const stories = state.get('stories').updateIn([idx, 'score'], _ => _ + 1); 

      console.log(stories);
      return Immutable.Map({ stories });
    case 'SET_STORIES':
      return Immutable.Map({
        stories: Immutable.fromJS(action.stories)
      })
    default:
      return state;
  }
};