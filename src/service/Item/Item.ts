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
    itemStatus: ItemStatus;
}

const fetchToken = () => {
    const token = localStorage.getItem("cmjd109")
    return "Bearer " + token;
}

export const GetAllReports = async () => {
    try {
        const response = await axios.get(`
    ${baseUrl}/getAllReports`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            }

        )
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
        const response = await axios.post(`${baseUrl}`, report,
            {
                headers: {
                    Authorization: fetchToken()
                }
            });
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const DeleteReport = async (reportId: String) => {
    try {
        await axios.delete(`${baseUrl}/${reportId}`,
            {
                headers: {
                    Authorization: fetchToken()
                }
            })
    } catch (error) {
        console.error(error)
    }
}

export const UpdateReport = async (report: Report) => {
    try {
        await axios.patch(`${baseUrl}`, report,
            {
                headers: {
                    Authorization: fetchToken()
                }
            });
    } catch (error) {
        console.log(error)
    }
}
