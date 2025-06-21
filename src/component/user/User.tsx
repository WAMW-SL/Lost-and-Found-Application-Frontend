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
        {users.map((row)=>(
                <tr key={row.userId}>
                    {Object.values(row).map((cell,index)=>(
                        <td key={index}>{cell}</td>
                    ))}
                </tr>))}  
      </tbody>
    </Table>
    );
}