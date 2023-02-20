import axios from "axios";
import { Constants } from "../../constants/constant";
import { User } from "../../types/user/user.type";


export const createuser =async (user:User) => {
    try {
        const response = await axios.post(`${Constants.apiUrl}/${user.job_title}`, user);
        return response.data
    } catch (error) {
        return error
    } 
}