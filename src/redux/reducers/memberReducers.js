import { memberActionTypes } from "../types";

const INITIAL_STATE = {
  allMembers: [],
  enrolmentList: [],
  progressRecord: {},
  currentMember: null,
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case memberActionTypes.GET_ALL_MEMBERS:
      return { ...state, allMembers: action.payload };
    case memberActionTypes.GET_MEMBER_BY_ID:
      return { ...state, currentMember: action.payload };
    case memberActionTypes.GET_MEMBERS_ENROLLMENT:
      return { ...state, enrolmentList: action.payload, loading: false };
    case memberActionTypes.GET_MEMBER_PROGRESS_RECORD:
      return { ...state, progressRecord: action.payload, loading: false };
    default:
      return state;
  }
}
