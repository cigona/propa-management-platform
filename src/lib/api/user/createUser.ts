import axios from "axios";
import { Constants } from "../../constants/constant";
import { Profile } from "../../types/user/profile.type";
import { User } from "../../types/user/user.type";

export const createuser =async (user:Profile) => {
    try {
        const response = await axios.post(`${Constants.apiUrl}/register`, user);
        return response.data
    } catch (error) {
        return error
    } 
}