export const GET_CLASS_LIST_SAGA = "GET_CLASS_LIST_SAGA";
export const GET_CLASS_LIST = "GET_CLASS_LIST";

export const memberActionTypes = {
  GET_ALL_MEMBERS: "GET_ALL_MEMBERS",
  GET_ALL_MEMBERS_SUCCEEDED: "GET_ALL_MEMBERS_SUCCEEDED",
  GET_MEMBER_BY_ID: "GET_MEMBER_BY_ID",
  GET_MEMBER_BY_ID_SUCCEEDED: "GET_MEMBER_BY_ID_SUCCEEDED",
  GET_MEMBERS_ENROLLMENT: "GET_MEMBERS_ENROLLMENT",
  GET_MEMBERS_ENROLLMENT_SUCCEEDED: "GET_MEMBERS_ENROLLMENT_SUCCEEDED",
  GET_MEMBER_PROGRESS_RECORD_SUCCEEDED: "GET_MEMBER_PROGRESS_RECORD_SUCCEEDED",
  GET_MEMBER_PROGRESS_RECORD: "GET_MEMBER_PROGRESS_RECORD",
  UPDATE_MULTIPLE_STATUS_MEMBER_PROGRESS_RECORD:
    "UPDATE_MULTIPLE_STATUS_MEMBER_PROGRESS_RECORD",
  UPDATE_MULTIPLE_STATUS_MEMBER_PROGRESS_RECORD_SUCCEEDED:
    "UPDATE_MULTIPLE_STATUS_MEMBER_PROGRESS_RECORD_SUCCEEDED",
  CONSENT_RECORD_OF_MEMBER: "CONSENT_RECORD_OF_MEMBER",
  CONSENT_RECORD_OF_MEMBER_SUCCEEDED: "CONSENT_RECORD_OF_MEMBER_SUCCEEDED",
  GET_MEMBERS_OF_SESSION: "GET_MEMBERS_OF_SESSION",
  GET_MEMBERS_OF_SESSION_SUCCEEDED: "GET_MEMBERS_OF_SESSION_SUCCEEDED",
};

export const enrolmentActionTypes = {
  DROP: "DROP",
  DROP_SUCCEEDED: "DROP_SUCCEEDED",
  SUSPEND: "SUSPEND",
  SUSPEND_SUCCEEDED: "SUSPEND_SUCCEEDED",
  RETURN_FROM_SUSPEND: "RETURN_FROM_SUSPEND",
  RETURN_FROM_SUSPEND_SUCCEEDED: "RETURN_FROM_SUSPEND_SUCCEEDED",
  TRANSFER: "TRANSFER",
  TRANSFER_SUCCEEDED: "TRANSFER_SUCCEEDED",
};

export const classActionTypes = {
  ADD_CLASS: "ADD_CLASS",
  ADD_CLASS_SUCCEEDED: "ADD_CLASS_SUCCEEDED",
  GET_CLASS_LIST_SUCCEEDED: "GET_CLASS_LIST_SUCCEEDED",
  GET_CLASS_LIST: "GET_CLASS_LIST",
  DELETE_CLASS: "DELETE_CLASS",
  DELETE_CLASS_SUCCEEDED: "DELETE_CLASS_SUCCEEDED",
  GET_CLASS_BY_ID: "GET_CLASS_BY_ID",
  GET_CLASS_BY_ID_SUCCEEDED: "GET_CLASS_BY_ID_SUCCEEDED",
  GET_CLASS_SESSIONS: "GET_CLASS_SESSIONS",
  GET_CLASS_SESSIONS_SUCCEEDED: "GET_CLASS_SESSIONS_SUCCEEDED",
  EDIT_CLASS: "EDIT_CLASS",
  EDIT_CLASS_SUCCEEDED: "EDIT_CLASS_SUCCEEDED",
  ADD_SESSION_TO_CLASS: "ADD_SESSION_TO_CLASS",
  ADD_SESSION_TO_CLASS_SUCCEEDED: "ADD_SESSION_TO_CLASS_SUCCEEDED",
  UPDATE_SESSION_OF_CLASS: "UPDATE_SESSION_OF_CLASS",
  UPDATE_SESSION_OF_CLASS_SUCCEEDED: "UPDATE_SESSION_OF_CLASS_SUCCEEDED",
  DELETE_SESSION_FROM_CLASS: "DELETE_SESSION_FROM_CLASS",
  DELETE_SESSION_FROM_CLASS_SUCCEEDED: "DELETE_SESSION_FROM_CLASS_SUCCEEDED",
};

export const LoginActionTypes = {
  LOG_IN_START: "LOG_IN_START",
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  LOG_OUT: "LOG_OUT",
};

// export const GET_MEMBERS_ENROLLMENT = "GET_MEMBERS_ENROLLMENT";
// export const GET_MEMBERS_ENROLLMENT_SUCCEEDED = "GET_MEMBERS_ENROLLMENT_SUCCEEDED";
export const businessesActionTypes = {
  GET_BUSINESSES: "GET_BUSINESSES",
  GET_BUSINESSES_SUCCEEDED: "GET_BUSINESSES_SUCCEEDED",
  GET_CATEGORIES_OF_BUSINESS: "GET_CATEGORIES_OF_BUSINESS",
  GET_CATEGORIES_OF_BUSINESS_SUCCEEDED: "GET_CATEGORIES_OF_BUSINESS_SUCCEEDED",
  GET_COACHES_OF_BUSINESS: "GET_COACHES_OF_BUSINESS",
  GET_COACHES_OF_BUSINESS_SUCCEEDED: "GET_COACHES_OF_BUSINESS_SUCCEEDED",
};

export const termsActionTypes = {
  GET_ALL_TERMS: "GET_ALL_TERMS",
  GET_ALL_TERMS_SUCCEEDED: "GET_ALL_TERMS_SUCCEEDED",
  GET_TERMS_OF_A_BUSINESS: "GET_TERMS_OF_A_BUSINESS",
  GET_TERMS_OF_A_BUSINESS_SUCCEEDED: "GET_TERMS_OF_A_BUSINESS_SUCCEEDED",
  ADD_NEW_TERM: "ADD_NEW_TERM",
  ADD_NEW_TERM_SUCCEEDED: "ADD_NEW_TERM_SUCCEEDED",
  EDIT_TERM: "EDIT_TERM",
  EDIT_TERM_SUCCEEDED: "EDIT_TERM_SUCCEEDED",
  DELETE_TERM: "DELETE_TERM",
  DELETE_TERM_SUCCEEDED: "DELETE_TERM_SUCCEEDED",
  GET_TERMS_OF_CLASS: "GET_TERMS_OF_CLASS",
  GET_TERMS_OF_CLASS_SUCCEEDED: "GET_TERMS_OF_CLASS_SUCCEEDED",
};

export const evaluationsActionTypes = {
  GET_EVALUATION_SCHEME_SUCCEEDED: "GET_EVALUATION_SCHEME_SUCCEEDED",
  GET_EVALUATION_SCHEME: "GET_EVALUATION_SCHEME",
};

export const sessionActionTypes = {
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION",
  GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SUCCEEDED:
    "GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SUCCEEDED",
  GET_ALL_SESSIONS_OF_A_TERM: "GET_ALL_SESSIONS_OF_A_TERM",
  GET_ALL_SESSIONS_OF_A_TERM_SUCCEEDED: "GET_ALL_SESSIONS_OF_A_TERM_SUCCEEDED",
  GET_ALL_SESSION_OF_A_CLASS_BY_TERM: "GET_ALL_SESSION_OF_A_CLASS_BY_TERM",
  GET_ALL_SESSION_OF_A_CLASS_BY_TERM_SUCCEEDED:
    "GET_ALL_SESSION_OF_A_CLASS_BY_TERM_SUCCEEDED",
  GET_ATTENDANCE_OF_SESSION_BY_DATE: "GET_ATTENDANCE_OF_SESSION_BY_DATE",
  GET_ATTENDANCE_OF_SESSION_BY_DATE_SUCCEEDED:
    "GET_ATTENDANCE_OF_SESSION_BY_DATE_SUCCEEDED",
  ADD_ATTENDANCE: "ADD_ATTENDANCE",
  ADD_ATTENDANCE_SUCCEEDED: "ADD_ATTENDANCE_SUCCEEDED",
};

export const sharedActionTypes = {
  SET_ERROR: "SET_ERROR",
  REMOVE_ERROR: "REMOVE_ERROR",
  CLEAR_ERRORS: "CLEAR_ERRORS",
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING",
  SET_PAGE_TITLE: "SET_PAGE_TITLE",
};

export const billingActionTypes = {
  GET_PAYMENT_DETAILS_OF_SESSION: "GET_PAYMENT_DETAILS_OF_SESSION",
  GET_PAYMENT_DETAILS_OF_SESSION_SUCCEEDED:
    "GET_PAYMENT_DETAILS_OF_SESSION_SUCCEEDED",
  UPDATE_PAYMENT_DETAILS_OF_MEMBER:"UPDATE_PAYMENT_DETAILS_OF_MEMBERS"
};
