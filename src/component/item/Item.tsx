import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { GetAllItemsOfSelectedGroup, GetAllReports } from "../../service/Item/Item";
import Dropdown from 'react-bootstrap/Dropdown';
import { AddReport } from "./AddReport";

export const Item = () => {
    const tHeadings: String[] = [
        "ReportID", "UserID", "Item Name", "Category", "Description", "Brand", "Colour", "Found Date", "Last Seen Date", "Found Location", "Last Seen Location", "Private Details", "Status"
    ]

    enum ItemCategory {
        STATIONERY, KEYS, ELECTRONICS, ID_CARDS
    }
    enum ItemStatus {
        LOST = "LOST",
        FOUND = "FOUND",
        CLAIMED = "CLAIMED"
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

    const [reports, setReports] = useState<Report[]>([])
    const [showAddForm, setShowAddForm] = useState(false)

    const loadData = async () => {
        const getAllReports = await GetAllReports()
        setReports(getAllReports)
        console.log("Get All Reports", getAllReports)
    }

    useEffect(() => {
        loadData();
    }, [])

    const handleDropdown = async (itemStatus: ItemStatus) => {
        const getAllItemsOfSelectedGroup = await GetAllItemsOfSelectedGroup(itemStatus)
        setReports(getAllItemsOfSelectedGroup)
        console.log(getAllItemsOfSelectedGroup)
    }





    return (
        <>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "0px" }} onClick={() => setShowAddForm(true)}>Add Report</Button>
            <Dropdown style={{ position: "absolute", top: "75px", right: "0px" }}>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Item Status
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-3" onClick={() => loadData()}>All</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={() => handleDropdown(ItemStatus.FOUND)}>Found</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={() => handleDropdown(ItemStatus.LOST)}>Lost</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={() => handleDropdown(ItemStatus.CLAIMED)}>Claimed</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Table striped bordered hover variant="dark" style={{ position: "absolute", top: "130px" }}>
                <thead>
                    <tr>
                        {tHeadings.map((headings) => (
                            <th>{headings}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {reports.map((row) => (
                        <tr key={row.reportId}>
                            {Object.values(row).map((cell, index) => (
                                <td key={index}>{cell}</td>
                            ))}
                        </tr>))}
                </tbody>
            </Table>

            <AddReport
                show={showAddForm}
                handleClose={()=>setShowAddForm(false)}
            />
        </>
    );
}