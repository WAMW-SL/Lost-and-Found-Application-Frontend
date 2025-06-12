import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"

export const AddReport = ({ show,handleClose }: any) => {
    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            placeholder="Item Name"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a category">
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">STATIONERY</option>
                                <option value="2">KEYS</option>
                                <option value="3">ELECTRONICS</option>
                                <option value="3">ID_CARDS</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Description"
                            as="textarea"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            placeholder="Brand"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Colour</Form.Label>
                        <Form.Control
                            placeholder="Colour"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Found Date</Form.Label>
                        <Form.Control
                            placeholder="YYYY/MM/DD"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last seen Date</Form.Label>
                        <Form.Control
                            placeholder="YYYY/MM/DD"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Found Location</Form.Label>
                        <Form.Control
                            placeholder="Found Location"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last seen Location</Form.Label>
                        <Form.Control
                            placeholder="Last seen Location"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Private Details</Form.Label>
                        <Form.Control
                            placeholder="Private Details"
                            as="textarea"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Status</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a status">
                            <Form.Select aria-label="Floating label select example">
                                <option>Open this select menu</option>
                                <option value="1">LOST</option>
                                <option value="2">FOUND</option>
                                <option value="3">CLAIMED</option>
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
    </>
    )
}