import axios from "axios";

const baseUrl="http://localhost:8050/LostAndFound/api/v1/request"

enum RequestStatus{
  PENDING="PENDING",
  APPROVED="APPROVED",
  REJECTED="REJECTED"
}

interface Request {
  requestId: string
  fullDescription: string
  requestStatus: RequestStatus
  userId: string
}

export const GetAllRequests=async()=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const GetAllRequestsOfSelectedGroup=async(requestStatus:RequestStatus)=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll/${requestStatus}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const AddNewRequest=async(request:Request)=>{
    try {
        const response=await axios.post(`${baseUrl}`,request);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const DeleteRequest=async(requestId:String)=>{
    try {
        await axios.delete(`${baseUrl}/${requestId}`)
    } catch (error) {
        console.error(error)
    }
}
