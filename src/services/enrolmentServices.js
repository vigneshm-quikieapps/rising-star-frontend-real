import axiosInstance from "../utils/axios-instance";

export const transfer = async (enrolmentId, newSessionId ) => {
  try {
    const api = `enrolments/transfer`;
    const response = await axiosInstance.post(api, {
      enrolmentId:enrolmentId,
      newSessionId:newSessionId,
    });
    console.log("reponse", response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const drop = async (id) => {
  try {
    const api = `enrolments/${id}/withdraw`;
    const Response = await axiosInstance.post(api);
    return Response;
  } catch (error) {
    throw error;
  }
};

export const suspend = async (id) => {
  try {
    const api = `enrolments/${id}/suspend`;
    const Response = await axiosInstance.post(api);
    return Response;
  } catch (error) {
    throw error;
  }
};

export const returnFromSuspend = async (id) => {
  try {
    const api = `enrolments/${id}/return-from-suspension`;
    const Response = await axiosInstance.post(api);
    return Response;
  } catch (error) {
    throw error;
  }
};

export const regularEnrollment = async (sessionId, memberId) => {
  try {
    const api = `enrolments`;
    const response = await axiosInstance.post(api, {
      sessionId: sessionId,
      memberId: memberId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
