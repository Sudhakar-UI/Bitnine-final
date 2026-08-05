"use client"
import React, { useState } from "react"
import Link from "next/link"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Modal, Button, Form, InputGroup, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Desktoppage = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    const [showModal2, setShowModal2] = useState(false);

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/security" className="alink"><span className="me-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Enable Anti-Phishing</h2>
                    </div>
                    <div className="panelcontentbox mt-2">
                        <div className="lightgraybg col-lg-9 col-md-11 mb-3">
                            <div className="secttable">
                                <h3>What in an Anti-Phishing Code?</h3>
                                <p className="content mb-0">An Anti-Phishing is a Code that protects against phishing attempts from fake bitnine website or email addresses.</p>
                            </div>
                            <hr />
                            <div className="secttable">
                                <h3>How does it work?
                                </h3>
                                <p className="mb-0">Once you've set up your unique Anti-Phishing Code, it will be displayed on all genuine bitnine emails.</p>
                            </div>
                        </div>
                        <p className="t-red mb-2">Note: Once enabled, the code will be included in all authentic emails sent by bitnine.</p>
                        <Button type="button" className="btn sitebtn mt-2" onClick={handleShow1}>Create Anit-phishing Code</Button>
                    </div>
                </Container>
            </article>
            <Userfooter />


            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal" id="cancel">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose1(); handleShow2(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b> Once enabled, the code will be included in all authentic emails sent by bitnine.
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Anti-Phishing Code</Form.Label>
                            <InputGroup>
                                <Form.Control name="code" id="anticode" />
                                <InputGroup.Text id="getcode2">Get Code</InputGroup.Text>
                            </InputGroup>
                            <small>Please enter 4-20 characters.</small>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal" id="cancel">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Desktoppage


