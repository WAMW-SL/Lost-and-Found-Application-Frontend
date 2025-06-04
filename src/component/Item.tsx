import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { GetAllReports} from "../service/Item/Item";
import Dropdown from 'react-bootstrap/Dropdown';

export const Item=()=>{
    const tHeadings:String[]=[
        "ReportID","UserID","Item Name","Category","Description","Brand","Colour","Found Date","Last Seen Date","Found Location","Last Seen Location","Private Details","Status"
    ]

    useEffect(()=>{
        const loadData=async()=>{
            const getAllReports=await GetAllReports()
            console.log("Get All Reports",getAllReports)
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