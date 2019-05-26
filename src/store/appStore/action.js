import * as actionTypes from './actionTypes';
export const actionCreators = {
  testAction: value => dispath => {
    dispath({ type: actionTypes.TEST });
  }
};
