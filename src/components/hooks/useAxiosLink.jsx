import axios from "axios";

const getLink = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
})
const useAxiosLink = () => {
    return getLink
};

export default useAxiosLink;