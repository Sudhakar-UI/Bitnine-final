"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Container, Modal, Button, Form, InputGroup, Alert, Image, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import Simplebar from "simplebar-react";
import ResponsiveTable from "@/app/components/ResponsiveTable";

const Mobilepage = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);
    const [showModal2, setShowModal2] = useState(false);

    const { openMenu } = useSideMenu();

    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid mx-3">
            <article className="">
                <Container className="sitecontainer">

                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Enable Anti-Phishing</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>
                    <div className="secttable mt-4">
                        <h3>What in an Anti-Phishing Code?</h3>
                        <p className="content mb-0">An Anti-Phishing is a Code that protects against phishing attempts from fake bitnine website or email addresses.</p>
                    </div>

                    <div className="secttable">
                        <h3>How does it work?</h3>
                        <p className="content mb-0">Once you've set up your unique Anti-Phishing code, It will be displayed on all genuine BITnine emails.</p>
                    </div>

                    <Alert className="mobile-alert-sec" variant="warning">
                        <b>Note :</b> <br />Once enable, the code will be included in all authentic emails sent by BITnine.
                    </Alert>

                    <Button type="button" className="btn sitebtn mt-2" onClick={handleShow1}>Create Anit-phishing Code</Button>
                </Container>
            </article>
            <MobileFooterNav />


            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning" className="mobile-alert-sec">
                            <b>Note :</b> Once enabled, the code will be included in all authentic emails sent by bitnine.
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label><span className="t-gray">Anti-Phishing Code</span></Form.Label>
                            <div className="otp-input-group">
                                <input type="text" className="otp-input-field" maxLength="1" />
                                <input type="text" className="otp-input-field" maxLength="1" />
                                <input type="text" className="otp-input-field" maxLength="1" />
                                <input type="text" className="otp-input-field" maxLength="1" />
                                <input type="text" className="otp-input-field" maxLength="1" />
                                <input type="text" className="otp-input-field" maxLength="1" />
                            </div>
                        </Form.Group>
                        <p className="text-center">Click the link to get verification <Link href="#0" className="text">Get Code</Link></p>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="security-canel-btn" data-bs-dismiss="modal" id="cancel">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose1(); handleShow2(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            {/* <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
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
            </Modal> */}


            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Simplebar className="table-responsive sitescroll">
                            <Table
                                className="depo-hist-table sitetable table-responsive-stack"
                                id="table1"
                            >
                                <tbody>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">
                                                    Withdrawal Address
                                                </span>
                                                <span className="break-address">
                                                    0x7A8156593Ccf2535d894Fd1E8179CB867
                                                </span>
                                            </div>
                                        </td>

                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">
                                                    Withdrawal Amount
                                                </span>

                                            </div>
                                        </td>

                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Withdrawal Fee</span>

                                            </div>
                                        </td>

                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Receive Amount</span>

                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Simplebar>
                        <ResponsiveTable tableId="table1" />
                    </Form>
                </Modal.Body>
            </Modal>

        </div>
    )
}
export default Mobilepage


