import { sharedActionTypes } from "../types";

export const setError = (errorMessage) => ({
  type: sharedActionTypes.SET_ERROR,
  payload: errorMessage,
});

export const removeError = () => ({ type: sharedActionTypes.REMOVE_ERROR });

export const clearErrors = () => ({ type: sharedActionTypes.CLEAR_ERRORS });

export const startLoading = () => ({ type: sharedActionTypes.START_LOADING });

export const stopLoading = () => ({ type: sharedActionTypes.STOP_LOADING });