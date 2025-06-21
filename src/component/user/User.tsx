import { useEffect, useState } from "react";
import { Button, Dropdown, Table } from "react-bootstrap";
import { AddNewUser, DeleteUser, GetAllUsers, GetAllUsersOfSelectedGroup } from "../../service/User/User";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";

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
    const [showAddForm, setShowAddForm] = useState(false)
    const [button, setButton] = useState(true)
    const [selectedUser, setSelectedUser] = useState<User>({
        userId: "",
        userName: "",
        role: UserRole.USER
    })
    const [showEditForm, setShowEditForm] = useState(false)

    const handleDropdown = async (userRole: UserRole) => {
        const getAllUsersOfSelectedGroup = await GetAllUsersOfSelectedGroup(userRole)
        setUsers(getAllUsersOfSelectedGroup)
        console.log(getAllUsersOfSelectedGroup)
    }

    const handleSavedUser = (savedUser: User) => {
        setUsers((prev) => [...prev, savedUser])
    }

    const handleSelectedRow = (row: User) => {
        setSelectedUser(row)
        setButton(false)
    }

    const handleOnDelete = async (userId: String) => {
        await DeleteUser(userId)
        setUsers(users.filter((user) => user.userId !== userId))
        setButton(true)
    }

    const handleUpdatedUser = (updatedUser: User) => {
        const newUserList = users.map((user) => updatedUser.userId === user.userId ? updatedUser : user)
        setUsers(newUserList)
        setButton(true)
    }

    return (
        <>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "0px" }} onClick={() => setShowAddForm(true)}>Add User</Button>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "500px" }} disabled={button} onClick={() => handleOnDelete(selectedUser.userId)}>Delete</Button>
            <Button variant="info" style={{ position: "absolute", top: "75px", left: "700px" }} disabled={button} onClick={() => { setShowEditForm(true) }}>Edit</Button>
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
            <Table bordered hover style={{ position: "absolute", top: "130px" }}>
                <thead>
                    <tr>
                        {tHeadings.map((headings) => (
                            <th style={{ backgroundColor: "#E0FFFF" }}>{headings}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {users.map((row) => (
                        <tr key={row.userId} onClick={() => handleSelectedRow(row)}>
                            {Object.values(row).map((cell, index) => (
                                <td key={index} style={{ backgroundColor: row === selectedUser ? "aqua" : "#E0FFFF" }}>{cell}</td>
                            ))}
                        </tr>))}
                </tbody>
            </Table>
            <AddUser
                show={showAddForm}
                handleClose={() => setShowAddForm(false)}
                addUser={AddNewUser}
                handleSavedUser={handleSavedUser}
            />
            <EditUser
                show={showEditForm}
                selectedUser={selectedUser}
                handleClose={() => setShowEditForm(false)}
                handleUpdatedUser={handleUpdatedUser}
            />
        </>
    );
}