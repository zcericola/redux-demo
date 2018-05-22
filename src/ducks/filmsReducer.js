import axios from "axios";

//CONSTANTS
const GET_FILMS = "GET_FILMS";
const ADD_FILM = "ADD_FILM";

//ACTION CREATORS
//getting all the films from the API here, notice I don't have to use .then --Asynch Redux takes care of this for us
export function getFilms() {
  return {
    type: GET_FILMS,
    payload: axios.get("https://ghibliapi.herokuapp.com/films")
  };
}
//addFilm doesn't do anything right now -- just for demo purposes to show how you would have multiple functions in the reducer pertaining to one thing i.e. films
export function addFilm(film) {
  return {
    type: ADD_FILM,
    film: film
  };
}
//INITIAL STATE
let initialState = {
  films: [],
  isLoading: false,
  error: []
};

//REDUCER
export default function filmsReducer(state = initialState, action) {
  //console.log here allows you to see if your functions are actually updating state.
  console.log(action.type);
  switch (action.type) {
      //GET_FILMS
    case `GET_FILMS_PENDING`:
    return Object.assign({}, state, {isLoading: true});

    case `GET_FILMS_FULFILLED`:
    return Object.assign({}, state, {isLoading: false, films: action.payload });

    case `GET_FILMS_REJECTED`:
    return Object.assign({}, state, {isLoading: false, error: action.payload});
    //ADD_FILMS
    case `ADD_FILM_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `ADD_FILM_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        films: action.payload
      });

    case `ADD_FILM_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload
      });
      default: 
      return state;
  }
  
  
}
