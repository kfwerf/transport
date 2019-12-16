export const FETCH_TRANSPORT = 'FETCH_TRANSPORT';
export const FETCH_TRANSPORT_SUCCESS = 'FETCH_TRANSPORT_SUCCESS';
export const FETCH_TRANSPORT_FAILURE = 'FETCH_TRANSPORT_FAILURE';

export const fetchTransport = ({ brand, type, color }) => ({
  type: FETCH_TRANSPORT,
  payload: {
    brand,
    type,
    color,
  },
});

export const fetchTransportSuccess = (transport) => ({
  type: FETCH_TRANSPORT_SUCCESS,
  payload: transport,
});

export const fetchTransportFailure = (message) => ({
  type: FETCH_TRANSPORT_FAILURE,
  payload: message,
});
