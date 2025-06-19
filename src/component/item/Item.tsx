import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { AddNewReport, GetAllItemsOfSelectedGroup, GetAllReports } from "../../service/Item/Item";
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
    const [button, setButton] = useState(true)
    const [selectedReport,setSelectedReport]=useState<Report>()

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

    const handleSavedReport = (savedReport: Report) => {
        setReports((prev) => [...prev, savedReport])
    }

    const handleSelectedRow = (row: Report) => {
        setSelectedReport(row)
        setButton(false)
    }

    return (
        <>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "0px" }} onClick={() => setShowAddForm(true)}>Add Report</Button>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "500px" }} disabled={button}>Delete</Button>
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
            <Table bordered hover style={{ position: "absolute", top: "130px" }}>
                <thead>
                    <tr>
                        {tHeadings.map((headings) => (
                            <th style={{backgroundColor:"#E0FFFF"}}>{headings}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {reports.map((row) => (
                        <tr key={row.reportId} onClick={() => handleSelectedRow(row)} >
                            {Object.values(row).map((cell, index) => (
                                <td key={index} style={{backgroundColor:row===selectedReport?"aqua":"#E0FFFF"}}>{cell}</td>
                            ))}
                        </tr>))}
                </tbody>
            </Table>

            <AddReport
                show={showAddForm}
                handleClose={() => setShowAddForm(false)}
                addReport={AddNewReport}
                handleSavedReport={handleSavedReport}
            />
        </>
    );
}