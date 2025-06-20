import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"

export const AddRequest=({show,handleClose}:any)=>{
    return(
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
                            as="textarea"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            placeholder="User ID"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Status</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a category">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">PENDING</option>
                                <option value="2">APPROVED</option>
                                <option value="3">REJECTED</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success">
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}