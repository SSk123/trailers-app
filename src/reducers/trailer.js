import ActionTypes from '../constants/actionTypes'

const initialState = {
  language: [],
  genre: [],
  movies: {},
  tags: []
}

export default function trailer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_TRAILER_LANGUAGE: {
      const {result} = action;
      const newState = {...state};
      newState.language = result;
      return newState;
    }
    case ActionTypes.FETCH_TRAILER_GENRES: {
      const {result} = action;
      const newState = {...state};
      newState.genre = result;
      return newState;
    }
    case ActionTypes.FETCH_TRAILERS: {
      const {result} = action;
      const newState = {...state};
      newState.movies = result;
      return newState;
    }
    case ActionTypes.DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
