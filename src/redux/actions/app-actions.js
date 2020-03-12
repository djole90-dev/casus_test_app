import { AppTypes } from '../types';

export const mainPageLoadStart = () => ({
  type: AppTypes.MAIN_PAGE_LOAD_START
});
export const mainPageLoadSuccess = () => ({
  type: AppTypes.MAIN_PAGE_LOAD_SUCCESS
});

export const mainPageLoadFail = () => ({ type: AppTypes.MAIN_PAGE_LOAD_FAIL });
