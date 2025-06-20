import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GetAllRequests } from "../../service/Request/Request";

enum RequestStatus{
  PENDING="PENDING",
  APPROVED="APPROVED",
  REJECTED="REJECTED"
}

interface Request{
  requestId:string
  fullDescription:string
  requestStatus:RequestStatus
  userId:string
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
        {requests.map((row)=>(
                <tr key={row.requestId}>
                    {Object.values(row).map((cell,index)=>(
                        <td key={index}>{cell}</td>
                    ))}
                </tr>))}  
      </tbody>
    </Table>
  );
}