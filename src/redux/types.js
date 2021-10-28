export const GET_CLASS_LIST_SAGA = "GET_CLASS_LIST_SAGA";
export const GET_CLASS_LIST = "GET_CLASS_LIST";

export const memberActionTypes = {
  GET_ALL_MEMBERS: "GET_ALL_MEMBERS",
  GET_ALL_MEMBERS_SAGA: "GET_ALL_MEMBERS_SAGA",
  GET_MEMBER_BY_ID: "GET_MEMBER_BY_ID",
  GET_MEMBER_BY_ID_SAGA: "GET_MEMBER_BY_ID_SAGA",

  GET_MEMBERS_ENROLLMENT_SAGA: "GET_MEMBERS_ENROLLMENT_SAGA",
  GET_MEMBERS_ENROLLMENT: "GET_MEMBERS_ENROLLMENT",
  GET_MEMBERS_ENROLLMENT_FAILED: "GET_MEMBERS_ENROLLMENT_FAILED",
  GET_MEMBER_PROGRESS_RECORD: "GET_MEMBER_PROGRESS_RECORD",
  GET_MEMBER_PROGRESS_RECORD_SAGA: "GET_MEMBER_PROGRESS_RECORD_SAGA",
  GET_MEMBER_PROGRESS_RECORD_FAILED: "GET_MEMBER_PROGRESS_RECORD_FAILED",
  MEMBER_ENROLMENT_DROPPED: "MEMBER_ENROLMENT_DROPPED",
  MEMBER_ENROLMENT_DROPPED_SAGA: "MEMBER_ENROLMENT_DROPPED_SAGA",
  MEMBER_ENROLMENT_SUSPEND: "MEMBER_ENROLMENT_SUSPEND",
  MEMBER_ENROLMENT_SUSPEND_SAGA: "MEMBER_ENROLMENT_SUSPEND_SAGA",
  MEMBER_ENROLMENT_RETURN_FROM_SUSPEND: "MEMBER_ENROLMENT_RETURN_FROM_SUSPEND",
  MEMBER_ENROLMENT_RETURN_FROM_SUSPEND_SAGA:
    "MEMBER_ENROLMENT_RETURN_FROM_SUSPEND_SAGA",
};

export const classActionTypes = {
  GET_CLASS_LIST_SUCCEEDED: "GET_CLASS_LIST_SUCCEEDED",
  GET_CLASS_LIST_FAILED: "GET_CLASS_LIST_FAILED",
  GET_CLASS_LIST: "GET_CLASS_LIST",
  DELETE_CLASS: "DELETE_CLASS",
  DELETE_CLASS_SUCCEEDED: "DELETE_CLASS_SUCCEEDED",
  DELETE_CLASS_FAILED: "DELETE_CLASS_FAILED",
  SET_LOADING: "SET_CLASSES_LOADING",
  GET_CLASS_BY_ID: "GET_CLASS_BY_ID",
  GET_CLASS_BY_ID_SAGA: "GET_CLASS_BY_ID_SAGA",
};

export const LoginActionTypes = {
  LOG_IN_START: "LOG_IN_START",
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  LOG_IN_FAILURE: "LOG_IN_FAILURE",
  LOG_OUT: "LOG_OUT",
};

// export const GET_MEMBERS_ENROLLMENT_SAGA = "GET_MEMBERS_ENROLLMENT_SAGA";
// export const GET_MEMBERS_ENROLLMENT = "GET_MEMBERS_ENROLLMENT";
export const businessesActionTypes = {
  GET_BUSINESSES: "GET_BUSINESSES",
  GET_BUSINESSES_SUCCEEDED: "GET_BUSINESSES_SUCCEEDED",
  GET_BUSINESSES_FAILED: "GET_BUSINESSES_FAILED",
  SET_LOADING: "SET_BUSINESSES_LOADING",
  GET_BUSINESSES_OF_BUSINESS: "GET_BUSINESSES_OF_BUSINESS",
  GET_BUSINESSES_OF_BUSINESS_SUCCEEDED: "GET_BUSINESSES_OF_BUSINESS_SUCCEEDED",
  GET_BUSINESSES_OF_BUSINESS_FAILED: "GET_BUSINESSES_OF_BUSINESS_FAILED",
};

export const termsActionTypes = {
  SET_LOADING: "SET_TERMS_LOADING",
  GET_ALL_TERMS: "GET_ALL_TERMS",
  GET_ALL_TERMS_SUCCEEDED: "GET_ALL_TERMS_SUCCEEDED",
  GET_ALL_TERMS_FAILED: "GET_ALL_TERMS_FAILED",
  GET_TERMS_OF_A_BUSINESS: "GET_TERMS_OF_A_BUSINESS",
  GET_TERMS_OF_A_BUSINESS_SUCCEEDED: "GET_TERMS_OF_A_BUSINESS_SUCCEEDED",
  GET_TERMS_OF_A_BUSINESS_FAILED: "GET_TERMS_OF_A_BUSINESS_FAILED",
  ADD_NEW_TERM: "ADD_NEW_TERM",
  ADD_NEW_TERM_SUCCEEDED: "ADD_NEW_TERM_SUCCEEDED",
  ADD_NEW_TERM_FAILED: "ADD_NEW_TERM_FAILED",
  EDIT_TERM: "EDIT_TERM",
  EDIT_TERM_SUCCEEDED: "EDIT_TERM_SUCCEEDED",
  EDIT_TERM_FAILED: "EDIT_TERM_FAILED",
  DELETE_TERM: "DELETE_TERM",
  DELETE_TERM_SUCCEEDED: "DELETE_TERM_SUCCEEDED",
  DELETE_TERM_FAILED: "DELETE_TERM_FAILED",
};

export const evaluationsActionTypes = {
  GET_EVALUATION_SCHEME: "GET_EVALUATION_SCHEME",
  GET_EVALUATION_SCHEME_SAGA: "GET_EVALUATION_SCHEME_SAGA",
  GET_EVALUATION_SCHEME_FAILED: "GET_EVALUATION_SCHEME_FAILED",
};

export const sessionActionTypes = {
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SAGA:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SAGA",
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION",
  GET_ALL_SESSIONS_OF_A_TERM: "GET_ALL_SESSIONS_OF_A_TERM",
  GET_ALL_SESSIONS_OF_A_TERM_SUCCEEDED: "GET_ALL_SESSIONS_OF_A_TERM_SUCCEEDED",
  GET_ALL_SESSIONS_OF_A_TERM_FAILED: "GET_ALL_SESSIONS_OF_A_TERM_FAILED",
};

export const sharedActionTypes = {
  SET_ERROR: "SET_ERROR",
  REMOVE_ERROR: "REMOVE_ERROR",
  CLEAR_ERRORS: "CLEAR_ERRORS",
};
