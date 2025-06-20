import axios from "axios";

const baseUrl="http://localhost:8050/LostAndFound/api/v1/request"

export const GetAllRequests=async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll`);
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}