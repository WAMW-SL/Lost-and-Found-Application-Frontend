import { Console } from "console";
import { ReactEventHandler, useState } from "react"
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap"

interface Report {
        reportId: string;
        userId: string;
        itemName: string;
        category: ItemCategory;
        description: string;
        brand: string;
        colour: string;
        foundDate: string;
        lastSeenDate: string;
        foundLocation: string;
        lastSeenLocation: string;
        privateDetails: string;
        itemStatus: ItemStatus;
    }

    enum ItemCategory {
        STATIONERY, KEYS, ELECTRONICS, ID_CARDS
    }

    enum ItemStatus {
        LOST="LOST",
        FOUND="FOUND",
        CLAIMED="CLAIMED"
    }

export const AddReport = ({ show, handleClose, addReport,handleSavedReport }: any) => {
    
    const [newReport, setnewReport] = useState<Report>({
        reportId: "",
        userId: "",
        itemName: "",
        category: ItemCategory.ELECTRONICS,
        description: "",
        brand: "",
        colour: "",
        foundDate: "",
        lastSeenDate: "",
        foundLocation: "",
        lastSeenLocation: "",
        privateDetails: "",
        itemStatus: ItemStatus.FOUND
    });

    const handleInputElements = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setnewReport((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async () => {
        const savedReport = await addReport(newReport);
        console.log(savedReport)
        handleSavedReport(savedReport)
        handleClose()
        setnewReport({reportId: "",userId: "",itemName: "",category: ItemCategory.ELECTRONICS,description: "",brand: "",colour: "",foundDate: "",lastSeenDate: "",foundLocation: "",lastSeenLocation: "",privateDetails: "",itemStatus: ItemStatus.FOUND})
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setnewReport((prev)=>({...prev,[name]:value}))
    }
    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control
                            placeholder="User ID"
                            name="userId"
                            value={newReport.userId}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            placeholder="Item Name"
                            name="itemName"
                            value={newReport.itemName}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a category">
                            <Form.Select aria-label="Floating label select example" name="category" value={newReport.category} onChange={handleSelectMenu}>
                                <option value="0">STATIONERY</option>
                                <option value="1">KEYS</option>
                                <option value="2">ELECTRONICS</option>
                                <option value="3">ID_CARDS</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder="Description"
                            as="textarea"
                            name="description"
                            value={newReport.description}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control
                            placeholder="Brand"
                            name="brand"
                            value={newReport.brand}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Colour</Form.Label>
                        <Form.Control
                            placeholder="Colour"
                            name="colour"
                            value={newReport.colour}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Found Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="foundDate"
                            value={newReport.foundDate}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last seen Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="lastSeenDate"
                            value={newReport.lastSeenDate}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Found Location</Form.Label>
                        <Form.Control
                            placeholder="Found Location"
                            name="foundLocation"
                            value={newReport.foundLocation}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Last seen Location</Form.Label>
                        <Form.Control
                            placeholder="Last seen Location"
                            name="lastSeenLocation"
                            value={newReport.lastSeenLocation}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Private Details</Form.Label>
                        <Form.Control
                            placeholder="Private Details"
                            as="textarea"
                            name="privateDetails"
                            value={newReport.privateDetails}
                            onChange={handleInputElements}
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Status</Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Select a status">
                            <Form.Select aria-label="Floating label select example" name="itemStatus" value={newReport.itemStatus} onChange={handleSelectMenu}>
                                <option value="LOST">LOST</option>
                                <option value="FOUND">FOUND</option>
                                <option value="CLAIMED">CLAIMED</option>
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
    </>
    )
}