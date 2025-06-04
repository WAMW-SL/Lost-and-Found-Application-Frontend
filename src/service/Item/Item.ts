import axios from "axios"

enum ItemStatus {
    LOST, FOUND, CLAIMED
}

export const GetAllReports = async () => {
    try {
        const response = await axios.get('http://localhost:8050/LostAndFound/api/v1/item/getAllReports');
        return response.data
    } catch (error) {
        console.error(error)
    }
}