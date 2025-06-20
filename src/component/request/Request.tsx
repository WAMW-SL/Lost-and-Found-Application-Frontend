import { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { GetAllRequests, GetAllRequestsOfSelectedGroup } from "../../service/Request/Request";
import { AddRequest } from "./AddRequest";

enum RequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED"
}

interface Request {
  requestId: string
  fullDescription: string
  requestStatus: RequestStatus
  userId: string
}

export const Request = () => {
  const tHeadings: String[] = [
    "Request ID", "Full Description", "Status", "User ID"
  ]

  const [requests, setRequests] = useState<Request[]>([])
  const [showAddForm,setShowAddForm]=useState(false)

  const loadData = async () => {
    const getAllRequests = await GetAllRequests()
    setRequests(getAllRequests)
    console.log("Get All Requests", getAllRequests)
  }

  useEffect(() => {
    loadData();
  }, [])

  const handleDropdown = async (requestStatus: RequestStatus) => {
    const getAllRequestsOfSelectedGroup = await GetAllRequestsOfSelectedGroup(requestStatus)
    setRequests(getAllRequestsOfSelectedGroup)
    console.log(getAllRequestsOfSelectedGroup)
  }

  return (
    <>
      <Button variant="info" style={{ position: "absolute", top: "75px", left: "0px" }} onClick={() => setShowAddForm(true)}>Add Request</Button>
      <Dropdown style={{ position: "absolute", top: "75px", right: "0px" }}>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Request Status
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => loadData()}>All</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => handleDropdown(RequestStatus.PENDING)}>PENDING</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => handleDropdown(RequestStatus.APPROVED)}>APPROVED</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => handleDropdown(RequestStatus.REJECTED)}>REJECTED</Dropdown.Item>
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
          {requests.map((row) => (
            <tr key={row.requestId}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>))}
        </tbody>
      </Table>
      <AddRequest
      show={showAddForm}
      />
    </>
  );
}