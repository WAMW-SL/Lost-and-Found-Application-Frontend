import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GetAllRequests } from "../../service/Request/Request";

enum RequestStatus{
  PENDING="PENDING",
  APPROVED="APPROVED",
  REJECTED="REJECTED"
}

interface Request{
  requestId:String
  fullDescription:String
  requestStatus:RequestStatus
  userId:String
}

export const Request=()=>{
    const tHeadings:String[]=[
        "Request ID","Full Description","Status","User ID"
    ]

    const[requests,setRequests]=useState<Request[]>([])

    useEffect(()=>{
        const loadData=async()=>{
            const getAllRequests=await GetAllRequests()
            setRequests(getAllRequests)
            console.log("Get All Requests",getAllRequests)
        };
        loadData();
    },[])

     return (
    <Table striped bordered hover variant="dark" style={{position:"absolute",top:"130px"}}>
      <thead>
        <tr>
          {tHeadings.map((headings)=>(
            <th>{headings}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}