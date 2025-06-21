import { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { GetAllUsers, GetAllUsersOfSelectedGroup } from "../../service/User/User";
import { AddUser } from "./AddUser";

enum UserRole {
    ADMIN = "ADMIN",
    STAFF = "STAFF",
    USER = "USER"
}
interface User {
    userId: string,
    userName: string,
    role: UserRole
}
export const User = () => {
    const tHeadings: String[] = [
        "User ID", "User Name", "Role"
    ]

    const loadData = async () => {
        const getAllUsers = await GetAllUsers()
        setUsers(getAllUsers)
        console.log("Get All Users", getAllUsers)
    }

    useEffect(() => {
        loadData();
    }, [])

    const [users, setUsers] = useState<User[]>([])
    const [showAddForm,setShowAddForm]=useState(false)

    const handleDropdown = async (userRole: UserRole) => {
        const getAllUsersOfSelectedGroup = await GetAllUsersOfSelectedGroup(userRole)
        setUsers(getAllUsersOfSelectedGroup)
        console.log(getAllUsersOfSelectedGroup)
    }

    return (
        <>
        <Button variant="info" style={{ position: "absolute", top: "75px", left: "0px" }} onClick={() => setShowAddForm(true)}>Add User</Button>
        <Dropdown style={{ position: "absolute", top: "75px", right: "0px" }}>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          User Role
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-3" onClick={() => loadData()}>All</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={() => handleDropdown(UserRole.ADMIN)}>ADMIN</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={() => handleDropdown(UserRole.STAFF)}>STAFF</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={() => handleDropdown(UserRole.USER)}>USER</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
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
    <AddUser
        show={showAddForm}
        handleClose={()=>setShowAddForm(false)}
    />
    </>
    );
}