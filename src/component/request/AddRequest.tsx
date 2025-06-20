import { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"

enum RequestStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
}

interface Request {
    requestId: string
    fullDescription: string
    requestStatus: RequestStatus
    userId: string
}


export const AddRequest = ({ show, handleClose,addRequest,handleSavedRequest}: any) => {
    const [newRequest, setnewRequest] = useState<Request>({
        requestId: "",
        fullDescription: "",
        requestStatus: RequestStatus.PENDING,
        userId: ""
    });

    const handleInputElements = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setnewRequest((prev) => ({ ...prev, [name]: value }))
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setnewRequest((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = async () => {
        const savedRequest = await addRequest(newRequest);
        console.log(savedRequest)
        handleSavedRequest(savedRequest)
        handleClose()
        setnewRequest({requestId:"",fullDescription:"",requestStatus:RequestStatus.PENDING,userId:""})
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Description</Form.Label>
                        <Form.Control
                            placeholder="Full Description"
                            value={newRequest.fullDescription}
                            as="textarea"
                            name="fullDescription"
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            value={newRequest.userId}
                            placeholder="User ID"
                            name="userId"
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Status</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a category">
                            <Form.Select aria-label="Floating label select example" value={newRequest.requestStatus} name="requestStatus" onChange={handleSelectMenu}>
                                <option value="PENDING">PENDING</option>
                                <option value="APPROVED">APPROVED</option>
                                <option value="REJECTED">REJECTED</option>
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