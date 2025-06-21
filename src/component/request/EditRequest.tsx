import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { UpdateRequest } from "../../service/Request/Request";

interface RequestProps {
    show: boolean
    selectedRequest: Request
    handleClose:()=>void
    handleUpdatedRequest:(updatedRequest:Request)=>void
}

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

export const EditRequest = ({ show, selectedRequest,handleClose,handleUpdatedRequest}: RequestProps) => {
    const [request,setRequest]=useState<Request>({
        requestId:"",
        fullDescription:"",
        requestStatus:RequestStatus.PENDING,
        userId:""
    })

    useEffect(()=>{
        setRequest(selectedRequest)},[selectedRequest]
    )

    const handleInputElements=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setRequest((prev)=>({...prev,[name]:value}))
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setRequest((prev)=>({...prev,[name]:value}))
    }

     const handleUpdate = async (request:Request) => {
            await UpdateRequest(request)
            handleUpdatedRequest(request) 
            handleClose()           
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Request ID</Form.Label>
                            <Form.Control
                                value={request.requestId}
                                placeholder="Request ID"
                                readOnly
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Description</Form.Label>
                            <Form.Control
                                value={request.fullDescription}
                                placeholder="Full Description"
                                name="fullDescription"
                                onChange={handleInputElements}
                                as="textarea"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Status</Form.Label>
                            <FloatingLabel controlId="floatingSelect" label="Select a status">
                                <Form.Select aria-label="Floating label select example" value={request.requestStatus} name="requestStatus" onChange={handleSelectMenu}>
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
                    <Button variant="success" onClick={()=>handleUpdate(request)}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}