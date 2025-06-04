import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GetAllReports } from "../service/Item/Item";
import Dropdown from 'react-bootstrap/Dropdown';

export const Item = () => {
    const tHeadings: String[] = [
        "ReportID", "UserID", "Item Name", "Category", "Description", "Brand", "Colour", "Found Date", "Last Seen Date", "Found Location", "Last Seen Location", "Private Details", "Status"
    ]

    enum ItemCategory {
        STATIONERY, KEYS, ELECTRONICS, ID_CARDS
    }
    enum ItemStatus {
        LOST, FOUND, CLAIMED
    }

    interface Report {
        reportId:String;
        userId: String;
        itemName: String;
        category: ItemCategory;
        description: String;
        brand: String;
        colour: String;
        foundDate: String;
        lastSeenDate: String;
        foundLocation: String;
        lastSeenLocation: String;
        privateDetails: String;
        status:ItemStatus;
    }

    const[reports,setReports]=useState<Report[]>([])

    useEffect(() => {
        const loadData = async () => {
            const getAllReports = await GetAllReports()
            setReports(getAllReports)
            console.log("Get All Reports", getAllReports)
        };
        loadData();
    }, [])

    return (
        <Table striped bordered hover variant="dark" style={{ position: "absolute", top: "130px" }}>
            <thead>
                <tr>
                    {tHeadings.map((headings) => (
                        <th>{headings}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                   
            </tbody>
        </Table>
    );
}