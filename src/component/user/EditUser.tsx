import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

interface UserProps{
    show:boolean
    selectedUser:User
}

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

export const EditUser=({show,selectedUser}:UserProps)=>{
    const [user,setUser]=useState<User>({
        userId:"",
        userName:"",
        role:UserRole.USER
    })

    const handleInputElements=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setUser((prev)=>({...prev,[name]:value}))
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setUser((prev)=>({...prev,[name]:value}))
    }

    useEffect(()=>{
        setUser(selectedUser)},[selectedUser]
    )

    return(
        <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>User ID</Form.Label>
                            <Form.Control
                                value={user.userId}
                                name="userId"
                                placeholder="User ID"
                                readOnly
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                value={user.userName}
                                name="userName"
                                onChange={handleInputElements}
                                placeholder="User Name"                          
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Role</Form.Label>
                            <FloatingLabel controlId="floatingSelect" label="Select a role">
                                <Form.Select aria-label="Floating label select example" value={user.role} name="role" onChange={handleSelectMenu}>
                                    <option value="ADMIN">ADMIN</option>
                                    <option value="STAFF">STAFF</option>
                                    <option value="USER">USER</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" >
                        Close
                    </Button>
                    <Button variant="success" >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}