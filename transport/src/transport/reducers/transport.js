import {
  FETCH_TRANSPORT,
  FETCH_TRANSPORT_FAILURE,
  FETCH_TRANSPORT_SUCCESS,
  UPDATE_TRANSPORT,
} from '../actions';

import { removeDupes } from '../utils';

const initialState = {
  // Unfiltered list
  transport: [],
  // Filtered colors based on list
  colors: [],
  brands: [],
  types: [],
  // Feedback from service
  isLoading: false,
  error: null,
  // Selection criteria
  color: '',
  brand: '',
  type: '',
};

export default function transport(state = initialState, action) {
  switch (action.type) {
    case FETCH_TRANSPORT:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TRANSPORT_SUCCESS:
      const transport = [...action.payload];
      return {
        transport,
        colors: transport
          .map((vehicle) => vehicle.colors)
          .reduce((a, b) => a.concat(b), [])
          .filter(removeDupes),
        brands: transport
          .map((vehicle) => vehicle.brand)
          .filter(removeDupes),
        types: transport
          .map((vehicle) => vehicle.type)
          .filter(removeDupes),
        isLoading: false,
        error: null,
      };
    case FETCH_TRANSPORT_FAILURE:
      return {
          ...state,
          isLoading: false,
          error: action.payload,
      };
    case UPDATE_TRANSPORT:
      return {
        ...state,
        ...action.payload,
      }
    default:
        return state;
  }
}