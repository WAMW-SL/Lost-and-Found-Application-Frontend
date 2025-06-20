import { useEffect, useState } from "react";
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
    LOST = "LOST",
    FOUND = "FOUND",
    CLAIMED = "CLAIMED"
}

interface ReportProps {
    show: boolean
    selectedReport: Report
}

export const EditReport = ({ show, selectedReport }: ReportProps) => {

    const [report,setReport]=useState<Report>({
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
    })

    useEffect(()=>{
        setReport(selectedReport)},[selectedReport]
    )

    const handleInputElements=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        setReport((prev)=>({...prev,[name]:value}))
    }

    const handleSelectMenu=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const{name,value}=e.target 
        setReport((prev)=>({...prev,[name]:value}))
    }

    return (
        <>
            <Modal show={show} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Report ID</Form.Label>
                            <Form.Control
                                type="email"
                                value={report.reportId}
                                placeholder="Report ID"
                                readOnly
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                value={report.itemName}
                                name="itemName"
                                placeholder="Item Name"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Category</Form.Label>
                            <FloatingLabel controlId="floatingSelect" label="Select a category">
                                <Form.Select aria-label="Floating label select example" name="category" value={report.category} onChange={handleSelectMenu}>
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
                                value={report.description}
                                as="textarea"
                                name="description"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                placeholder="Brand"
                                value={report.brand}
                                name="brand"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Colour</Form.Label>
                            <Form.Control
                                placeholder="Colour"
                                value={report.colour}
                                name="colour"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Found Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={report.foundDate}
                                name="foundDate"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last seen Date</Form.Label>
                            <Form.Control
                                type="date"
                                value={report.lastSeenDate}
                                name="lastSeenDate"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Found Location</Form.Label>
                            <Form.Control
                                placeholder="Found Location"
                                value={report.foundLocation}
                                name="foundLocation"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last seen Location</Form.Label>
                            <Form.Control
                                placeholder="Last seen Location"
                                value={report.lastSeenLocation}
                                name="lastSeenLocation"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Private Details</Form.Label>
                            <Form.Control
                                placeholder="Private Details"
                                value={report.privateDetails}
                                as="textarea"
                                name="privateDetails"
                                onChange={handleInputElements}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Status</Form.Label>
                            <FloatingLabel controlId="floatingSelect" label="Select a status">
                                <Form.Select aria-label="Floating label select example" name="itemStatus" value={report.itemStatus} onChange={handleSelectMenu} >
                                    <option value="LOST">LOST</option>
                                    <option value="FOUND">FOUND</option>
                                    <option value="CLAIMED">CLAIMED</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    <Button variant="primary" >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}