import axios from "axios";

const baseUrl="http://localhost:8050/LostAndFound/api/v1/user"

enum UserRole {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    USER = "USER"
}

interface User {
    userId: string,
    userName: string,
    role: UserRole
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

export const AddNewUser=async(user:User)=>{
    try {
        const response=await axios.post(`${baseUrl}`,user);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const DeleteUser=async(userId:String)=>{
    try {
        await axios.delete(`${baseUrl}/${userId}`)
    } catch (error) {
        console.error(error)
    }
}

export const UpdateUser=async(user:User)=>{
    try {
        await axios.patch(`${baseUrl}`,user)
    } catch (error) {
        console.log(error)
    }
}