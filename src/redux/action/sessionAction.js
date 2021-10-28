import { sessionActionTypes } from "../types";

export const getAllMembersEnrolledInASession = (id) => {
  return {
    type: sessionActionTypes.GET_ALL_MEMBERS_ENROLLED_IN_A_SESSION_SAGA,
    payload: id,
  };
};

export const getSessionsByTermId = (id) => {
  return {
    type: sessionActionTypes.GET_ALL_SESSIONS_OF_A_TERM,
    payload: id,
  };
};