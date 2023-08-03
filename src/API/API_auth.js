import axios from "axios";

export const authInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
    // timeout: 2000,
});
const setToken = token => {
  if (token) return authInstance.defaults.headers.authorization = `Bearer ${token}`;
  authInstance.defaults.headers.authorization = "";
}


export const signUp = async (data) => {
    // try {
        const response = await authInstance.post(`/auth/register/`, data);
        setToken(data.token);
        return response.data;
    // } catch (error) {
    //     console.log(error);
    //     error(error.message);
    // }
};