import {GET_DATA_SUCCESS} from '../actionTypes';

const defaultState = {
  data: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
