import * as actionTypes from './actionTypes';
export const actionCreators = {
  testAction: (value, t) => async dispath => {
    dispath({ type: actionTypes.TEST });
  }
};
