import ActionTypes from '../constants/actionTypes'
import store from '../store'

// export function incrementIfOdd() {
//   const { counter } = store.getState()
//   if (counter % 2 === 0) return
//   store.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
// }

export function getLanguages() {
    fetch('/getLanguages', {headers: {'Content-Type': 'application/json'}})
      .then(async (res) => {
        const result = await res.json()
        store.dispatch({ type: ActionTypes.FETCH_TRAILER_LANGUAGE, result })
      })
      .catch((err) => new Error(err))
  
}

export function getGenres() {
  fetch('/getGenres', {headers: {'Content-Type': 'application/json'}})
    .then(async (res) => {
      const result = await res.json()
      store.dispatch({ type: ActionTypes.FETCH_TRAILER_GENRES, result })
    })
    .catch((err) => new Error(err))

}

export function getTrailerData() {
  fetch('/getMovies', {headers: {'Content-Type': 'application/json'}})
    .then(async (res) => {
      const result = await res.json()
      store.dispatch({ type: ActionTypes.FETCH_TRAILERS, result })
    })
    .catch((err) => new Error(err))
}
