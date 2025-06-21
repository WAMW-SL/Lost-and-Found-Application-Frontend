import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

export const AddUser=({show,handleClose}:any)=>{
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>                  
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            placeholder="User Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a role">
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">ADMIN</option>
                                <option value="2">STAFF</option>
                                <option value="3">USER</option>
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