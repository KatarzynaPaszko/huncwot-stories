const Immutable = require('immutable'); 

module.exports = function (state = Immutable.Map({ stories: [] }), action) {
  let stories;

  switch (action.type) {
    case 'UPVOTE':
      const idx = state.get('stories').findIndex(_ => _.get('id') === action.id);
      stories = state.get('stories').updateIn([idx, 'score'], _ => _ + 1); 

      return Immutable.Map({ stories });
    case 'SET_STORIES':
      return Immutable.fromJS({
        stories: action.stories
      })
    case 'ADD_STORY':
      const { title, url } = action;
      stories = state.get('stories').push({ title, url });
      return Immutable.fromJS({ stories })
    default:
      return state;
  }
};