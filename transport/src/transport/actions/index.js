export const FETCH_TRANSPORT = 'FETCH_TRANSPORT';
export const FETCH_TRANSPORT_SUCCESS = 'FETCH_TRANSPORT_SUCCESS';
export const FETCH_TRANSPORT_FAILURE = 'FETCH_TRANSPORT_FAILURE';
export const UPDATE_TRANSPORT = 'UPDATE_TRANSPORT';

export const fetchTransport = () => ({
  type: FETCH_TRANSPORT,
});

export const fetchTransportSuccess = (transport) => ({
  type: FETCH_TRANSPORT_SUCCESS,
  payload: transport,
});

export const fetchTransportFailure = (message) => ({
  type: FETCH_TRANSPORT_FAILURE,
  payload: message,
});

const updateTransport = (selection) => ({
  type: UPDATE_TRANSPORT,
  payload: selection,
});

export const updateColor = ({ color }) => updateTransport({ color });
export const updateType = ({ type }) => updateTransport({ type });
export const updateBrand = ({ brand }) => updateTransport({ brand });
