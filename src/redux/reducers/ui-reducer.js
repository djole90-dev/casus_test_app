import { AppTypes } from '../types';

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AppTypes.MAIN_PAGE_LOAD_START:
      return { ...state, isLoading: true };
    case AppTypes.MAIN_PAGE_LOAD_SUCCESS:
    case AppTypes.MAIN_PAGE_LOAD_FAIL:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
