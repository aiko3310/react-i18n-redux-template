import * as actionTypes from './actionTypes';

const initialState = {
  test: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TEST: {
      return {
        ...state,
        test: true
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
