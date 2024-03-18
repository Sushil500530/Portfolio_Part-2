import axios from "axios";

const getLink = axios.create({
    baseURL: "https://services-flame-eight.vercel.app",
    // baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosLink = () => {
    return getLink
};

export default useAxiosLink;