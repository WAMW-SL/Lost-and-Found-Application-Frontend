import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { GetAllUsers } from "../../service/User/User";

enum UserRole{
    ADMIN="ADMIN",
    STAFF="STAFF",
    USER="USER"
}
interface User{
    userId:string,
    userName:string,
    role:UserRole
}
export const User=()=>{
    const tHeadings:String[]=[
        "User ID","User Name","Role"
    ]

    useEffect(()=>{
        const loadData=async()=>{
            const getAllUsers=await GetAllUsers()
            setUsers(getAllUsers)
            console.log("Get All Users",getAllUsers)
        };
        loadData();
    },[])

    const[users,setUsers]=useState<User[]>([])

    return(
        <Table striped bordered hover variant="dark"  style={{position:"absolute",top:"130px"}}>
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