import axios from "axios";
import url from "./apiURL";

export const loginRoute = async (user) => {
    try {
        const response = await axios.post(url('login'), user)
        return response.data
    } catch (error) {
        return false
    }
}
