import axios from "axios";
import { Constants } from "../../constants/constant";

export const getCities = async ( countryId: number ) => {
    try {
        const response = await axios.get(`${Constants.apiUrl}/city?country_id=${countryId}`);
        return response.data
    } catch (error) {
        return error
    } 
}
export const getCountries = async (  ) => {
    try {
        const response = await axios.get(`${Constants.apiUrl}/country`);
        return response.data
    } catch (error) {
        return error
    } 
}