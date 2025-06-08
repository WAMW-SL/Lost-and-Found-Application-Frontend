import axios from "axios"
const baseUrl="http://localhost:8050/LostAndFound/api/v1/item"

enum ItemStatus {
        LOST="LOST",
        FOUND="FOUND",
        CLAIMED="CLAIMED"
    }

export const GetAllReports = async () => {
    try {
        const response = await axios.get(`${baseUrl}/getAllReports`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const GetAllItemsOfSelectedGroup=async(itemStatus:ItemStatus)=>{
    try {
        const response=await axios.get(`${baseUrl}/getAll?itemStatus=${itemStatus}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}