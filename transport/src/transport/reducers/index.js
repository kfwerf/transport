import { combineReducers } from 'redux';
import {
  FETCH_TRANSPORT,
  FETCH_TRANSPORT_FAILURE,
  FETCH_TRANSPORT_SUCCESS
} from '../actions';

const initialState = {
  transport: [],
  isLoading: false,
  error: null,
};

export function transport(state = initialState, action) {
  switch (action.type) {
      case FETCH_TRANSPORT:
          return {
              ...state,
              // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
              isLoading: true,
              error: null
          };
      case FETCH_TRANSPORT_SUCCESS:
          return {
            transport: [...action.payload],
            // whenever the fetching finishes, we stop showing the spinner and then show the data
            isLoading: false,
            error: null
          };
      case FETCH_TRANSPORT_FAILURE:
          return {
              transport: [],
              isLoading: false,
              // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
              error: action.payload
          };
      default:
          return state;
  }
}

export const rootReducer = transport;