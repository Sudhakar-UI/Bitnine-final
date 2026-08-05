"use client";
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import {
    Container,
    Image,
    Modal,
    Button,
    Form,
    Alert,
    Row,
    Col,
    Nav,
    Table
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEye,
    faAngleLeft,
    faArrowRight,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FileUpload from "../Fileupload";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AdvanceFileUpload from "../AdvanceFileUpload";
import ResponsiveTable from "../../components/ResponsiveTable";
import SimpleBar from "simplebar-react";
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';

const Mobilepage = () => {

    const { openMenu } = useSideMenu();

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow2 = () => setShowModal1(true);

    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid mx-3">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <article className="gridtabtopbox">
                <Container className="sitecontainer kycpage">

                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Verify Identity</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>

                    <button className="btn advance-kyc-btn mt-3" onClick={setShowModal1}>
                        Advance KYC
                    </button>

                    <div className="panelcontentbox">
                        <Form method="post" className="verify-iden siteformbg wizardform pf-box">
                            <Row>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="firstName" id="firstName" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group" col-lg={6}>
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" name="lastName" id="lastName" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Select id="country">
                                            <option></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Document Type</Form.Label>
                                        <Form.Select id="document1">
                                            <option></option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group">
                                        <Form.Label>Document Number</Form.Label>
                                        <Form.Control type="text" name="City" id="docnum" />
                                    </Form.Group>
                                </Col>
                                <Col md="4">
                                    <Form.Group className="form-group dateinput">
                                        <Form.Label>Expire Date</Form.Label>
                                        <DatePicker
                                            selected={startDate}
                                            placeholder="Enter your date of birth"
                                            id="exdate1"
                                            onChange={(date) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            showYearDropdown
                                            showMonthDropdown
                                            dropdownMode="select"
                                            yearDropdownItemNumber={15}  // Shows 15 years instead of 100
                                            scrollableYearDropdown
                                            className="form-control"
                                        />
                                    </Form.Group>
                                </Col>
                                <FileUpload />
                                <div className="d-flex gap-2 w-100 pt-2">
                                    <Button type="button" className="btn security-canel-btn w-100">Cancel</Button>
                                    <Button type="button" className="btn sitebtn w-100" id="submit">
                                        Verify Now
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </div>

                </Container>
            </article>
            <MobileFooterNav />

            <Modal
                show={showModal1}
                onHide={handleClose1}
                className="modalbgt nummodal "
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Advance KYC Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Form.Group className="form-group">
                            <Form.Label>Address</Form.Label>
                            <Form.Control name="code" id="addresscode" />
                        </Form.Group>
                        <AdvanceFileUpload />
                        <div className="d-flex gap-2 w-100 mt-3">
                            <Button type="button" className="btn security-canel-btn w-100">Cancel</Button>
                            <Button type="button" className="btn sitebtn w-100" id="confirmbtn">
                                Confirm
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Mobilepage;
