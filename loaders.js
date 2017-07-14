const axios = require('axios');

function StoriesLoader() {
  return store => dispatch => action => {
    dispatch(action)

    switch (action.type) {
      case 'FETCH_STORIES':
        axios.get('/stories')
          .then(response => response.data)
          .then(stories => dispatch({ type: 'SET_STORIES', stories }))
          .catch(error => console.log(error))
    }
  }
}

module.exports = { StoriesLoader };