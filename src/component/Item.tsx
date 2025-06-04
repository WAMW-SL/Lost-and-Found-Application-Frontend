import { Table } from "react-bootstrap";

export const Item=()=>{
    const tHeadings:String[]=[
        "ReportID","UserID","Item Name","Category","Description","Brand","Colour","Found Date","Last Seen Date","Found Location","Last Seen Location","Private Details","Status"
    ]
     return (
    <Table striped bordered hover variant="dark">
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