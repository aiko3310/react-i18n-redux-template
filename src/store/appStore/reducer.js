import * as actionTypes from './actionTypes';
import updateObject from '../utility';
const initialState = {
  test: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST: {
      return updateObject(state, { test: true });
    }
    default: {
      return state;
    }
  }
};
export default reducer;
