import {
    FETCH_TRANSPORT,
    FETCH_TRANSPORT_FAILURE,
    FETCH_TRANSPORT_SUCCESS,
    UPDATE_TRANSPORT,
} from "../actions";
import {getFilteredLists, getStateWithFilteredLists} from "../utils";

const initialList = new Array(12);
const initialState = {
    // Unfiltered list
    transport: [...initialList],
    // Filtered colors based on lisy
    ...getFilteredLists(initialList),
    // Feedback from servic
    isLoading: true,
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
            return getStateWithFilteredLists({
                ...state,
                transport,
                isLoading: false,
                error: null,
            });
        case FETCH_TRANSPORT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case UPDATE_TRANSPORT:
            return getStateWithFilteredLists({
                ...state,
                ...action.payload,
            });
        default:
            return state;
    }
}
