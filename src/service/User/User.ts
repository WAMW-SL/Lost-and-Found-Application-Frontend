import axios from "axios";

const baseUrl="http://localhost:8050/LostAndFound/api/v1/user"

export const GetAllUsers=async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}