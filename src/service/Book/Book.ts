import axios from "axios"
const baseUrl="http://localhost:8050/LostAndFound/api/v1/item"

enum ItemStatus{
    LOST,FOUND,CLAIMED
}

export const GetItems=async(itemStatus:ItemStatus)=>{
    try {
        const response=await axios.get("${baseUrl}/getAll?itemStatus=${itemStatus}");
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}