import axiosInstance from "../utils/axios-instance";

export async function getClasses() {
  try {
    const response = await axiosInstance.get("/auth/user/classes");
    const classes = response.data.docs;
    return classes;
  } catch (error) {
    throw error;
  }
}

export async function deleteClassByID(id) {
  try {
    await axiosInstance.delete("/classes/" + id);
    return id;
  } catch (error) {
    throw error;
  }
}
