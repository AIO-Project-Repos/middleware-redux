// we'll need axios
import axios from 'axios';

export const FETCHING_CHARS = 'fetching_chars';
export const CHARS_FETCHED = 'chars_fetched';
export const ERROR_FETCHING_CHARS = 'error_fetching_chars';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const fetchChars = URL => {
  const promise = axios.get(URL);
  return function(dispatch) {
    dispatch({ type: FETCHING_CHARS });
    promise
      .then(response => {
        console.log('RESPONSE', response); // response.data
        dispatch({ type: CHARS_FETCHED, payload: response.data.results });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING_CHARS,
          payload: 'Error fetching chars'
        });
      });
  };
};
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
