import merge from 'deepmerge';
import { RETRIEVE_VALUE, RETRIEVE_PATH, RETRIEVE_PATHS, SET_PATH, CALL_PATH } from './actions';

const initialState = {loading: false};

export default function falcorReducer(state = initialState, action) {
  switch (action.type) {
  case (RETRIEVE_VALUE + '_REQUEST'):
  case (RETRIEVE_PATH + '_REQUEST'):
  case (RETRIEVE_PATHS + '_REQUEST'):
  case (SET_PATH + '_REQUEST'):
  case (CALL_PATH + '_REQUEST'):
    return {...state, loading: true };

  case RETRIEVE_VALUE:
    return {...state, loading: false };

  case RETRIEVE_PATH:
  case RETRIEVE_PATHS:
  case SET_PATH:
  case CALL_PATH:
    return merge({...state, loading: false}, action.res.json);

  case (RETRIEVE_VALUE + '_FAILURE'):
  case (RETRIEVE_PATH + '_FAILURE'):
  case (RETRIEVE_PATHS + '_FAILURE'):
  case (SET_PATH + '_FAILURE'):
  case (CALL_PATH + '_FAILURE'):
    return {...state, loading: false };

  default:
    return state;
  }
}
