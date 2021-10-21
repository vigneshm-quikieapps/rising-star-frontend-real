export const GET_CLASS_LIST_SAGA = "GET_CLASS_LIST_SAGA";
export const GET_CLASS_LIST = "GET_CLASS_LIST";

export const memberActionTypes = {
  GET_ALL_MEMBERS: "GET_ALL_MEMBERS",
  GET_ALL_MEMBERS_SAGA: "GET_ALL_MEMBERS_SAGA",
  GET_MEMBER_BY_ID: "GET_MEMBER_BY_ID",
  GET_MEMBER_BY_ID_SAGA: "GET_MEMBER_BY_ID_SAGA",
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SAGA:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SAGA",
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION",
};

export const classActionTypes = {
  GET_CLASS_LIST_SUCCEEDED: "GET_CLASS_LIST_SUCCEEDED",
  GET_CLASS_LIST_FAILED: "GET_CLASS_LIST_FAILED",
  GET_CLASS_LIST: "GET_CLASS_LIST",
  DELETE_CLASS: "DELETE_CLASS",
  DELETE_CLASS_SUCCEEDED: "DELETE_CLASS_SUCCEEDED",
  DELETE_CLASS_FAILED: "DELETE_CLASS_FAILED",
  SET_LOADING: "SET_LOADING",
  GET_CLASS_BY_ID: "GET_CLASS_BY_ID",
  GET_CLASS_BY_ID_SAGA: "GET_CLASS_BY_ID_SAGA",
};

export const LoginActionTypes = {
  LOG_IN_START: "LOG_IN_START",
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  LOG_IN_FAILURE: "LOG_IN_FAILURE",
  LOG_OUT: "LOG_OUT",
};

export const businessesActionTypes = {
  GET_BUSINESSES: "GET_BUSINESSES",
  GET_BUSINESSES_SUCCEEDED: "GET_BUSINESSES_SUCCEEDED",
  GET_BUSINESSES_FAILED: "GET_BUSINESSES_FAILED",
  SET_LOADING: "SET_LOADING",
};

export const termsActionTypes = {
  GET_ALL_TERMS: "GET_ALL_TERMS",
  GET_ALL_TERMS_SAGA: "GET_ALL_TERMS_SAGA",
  GET_ALL_SESSIONS_OF_A_TERM: "GET_ALL_SESSIONS_OF_A_TERM",
  GET_ALL_SESSIONS_OF_A_TERM_SAGA: "GET_ALL_SESSIONS_OF_A_TERM_SAGA",
};
