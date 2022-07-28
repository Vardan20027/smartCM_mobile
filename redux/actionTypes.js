export const GET_DATA_REQUEST = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';

export function getData() {
  return {
    type: GET_DATA_REQUEST,
    payload: {},
  };
}
