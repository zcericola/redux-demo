import axios from 'axios';

//CONSTANTS
const GET_PEOPLE = 'GET_PEOPLE';

//ACTION CREATORS
//getting all the films from the API here, notice I don't have to use .then --Asynch Redux takes care of this for us
export function getPeople() {
  return {
    type: GET_PEOPLE,
    payload: axios.get('https://ghibliapi.herokuapp.com/people')
  };
}

//INITIAL STATE
let initialState = {
  people: [],
  isLoading: false,
  error: []
};

//REDUCER
export default function peopleReducer(state = initialState, action) {
  //console.log here allows you to see if your functions are actually updating state.
  console.log(action.type);
  switch (action.type) {
    //GET_FILMS
    case `GET_PEOPLE_PENDING`:
      return { ...state, isLoading: true };

    case `GET_PEOPLE_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        people: action.payload
      };

    case `GET_PEOPLE_REJECTED`:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    //You should always have some kind of default action, a fallback in case nothing else is triggered in the switch statement. Usually it would be to just return state;
    default:
      return state;
  }
}
