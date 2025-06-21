import axios from "axios";

const baseUrl="http://localhost:8050/LostAndFound/api/v1/user"

enum UserRole {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    USER = "USER"
}

export const GetAllUsers=async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const GetAllUsersOfSelectedGroup=async(userRole:UserRole)=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll/${userRole}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}