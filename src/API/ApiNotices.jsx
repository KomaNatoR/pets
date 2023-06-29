import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://barkend.onrender.com/api',
    timeout: 2000,
});


export const getNotices = async (category, params) => {
    try {
        const response = await instance.get(`/notices/${category}`, { params });

        return response.data;
    } catch (error) {
        error(error.message);
    }
};

export const getNoticesSearch = async (category, params) => {
    try {
        const response = await instance.get(`/notices/title/search/${category}`, { params });

        return response.data;
    } catch (error) {
        error(error.message);
    }
};
// ===================================================================================

// const instance = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// export const getContacts = async () => {
//     const { data } = await instance.get("/contacts");
//     return data; 
// };