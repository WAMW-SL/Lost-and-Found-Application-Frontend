import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

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

export const AddUser = ({ show, handleClose,addUser,handleSavedUser}: any) => {
    const [newUser, setnewUser] = useState<User>({
        userId: "",
        userName: "",
        role: UserRole.USER
    });

    const handleInputElements = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setnewUser((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setnewUser((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = async () => {
        const savedUser = await addUser(newUser);
        console.log(savedUser)
        handleSavedUser(savedUser)
        handleClose()
        setnewUser({userId:"",userName:"",role:UserRole.USER})
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            value={newUser.userName}
                            placeholder="User Name"
                            onChange={handleInputElements}
                            name="userName"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a role">
                            <Form.Select aria-label="Floating label select example" value={newUser.role} name="role" onChange={handleSelectMenu}>
                                <option value="ADMIN">ADMIN</option>
                                <option value="STAFF">STAFF</option>
                                <option value="USER">USER</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}