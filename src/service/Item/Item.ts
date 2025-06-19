import axios from "axios"
const baseUrl = "http://localhost:8050/LostAndFound/api/v1/item"

enum ItemStatus {
    LOST = "LOST",
    FOUND = "FOUND",
    CLAIMED = "CLAIMED"
}

enum ItemCategory {
    STATIONERY, KEYS, ELECTRONICS, ID_CARDS
}

interface Report {
    reportId: string;
    userId: string;
    itemName: string;
    category: ItemCategory;
    description: string;
    brand: string;
    colour: string;
    foundDate: string;
    lastSeenDate: string;
    foundLocation: string;
    lastSeenLocation: string;
    privateDetails: string;
    status: ItemStatus;
}

export const GetAllReports = async () => {
    try {
        const response = await axios.get(`${baseUrl}/getAllReports`);
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const GetAllItemsOfSelectedGroup = async (itemStatus: ItemStatus) => {
    try {
        const response = await axios.get(`${baseUrl}/getAll?itemStatus=${itemStatus}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const AddNewReport = async (report: Report) => {
    try {
        const response = await axios.post(`${baseUrl}`, report);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const DeleteReport=async(reportId:String)=>{
    try {
        await axios.delete(`${baseUrl}/${reportId}`)
    } catch (error) {
        console.error(error)
    }
}