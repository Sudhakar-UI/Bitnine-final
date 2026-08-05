"use client"
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image, Modal } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { faCog, faBars, faArrowLeft, faFilter, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Page = () => {

    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');

        return () => {
            document.body.classList.remove("loginbanner");
        };
    });
    const [showModal1, setShowModal1] = useState(false);
    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);
    return (
        <>
            <section className="formbg mobilebg">
                <Container className="sign">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Forgot Password</h2>
                        </div>
                        <div style={{ width: "40px" }}></div>

                        {/* Right-side icon (disabled for now)
                                            <div className="humberbutton">
                                                <button type="button" className="menubtn" id="menubtn">
                                                    <FontAwesomeIcon icon={faBars} />
                                                </button>
                                            </div>
                                            */}
                    </div>
                    <div className="formboxbg">
                        <div className="rightsideformbox p-0">
                            <Form className="siteformbg">
                                <div className="login-form">
                                    <div className=" p-0">
                                        <div className="logcenterbox">

                                            <div className="formcontentbox mt-3">
                                                <p>Enter the email address associated with, <span className="bold">Bitnine Account</span></p>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email Address <span className="t-red">*</span></Form.Label>
                                                    <Form.Control type="text" name="" id="email" />
                                                </Form.Group>
                                                {/* <Form.Group className="form-group">
                                                        <Form.Label>Password</Form.Label>
                                                        <InputGroup>
                                                            <Form.Control type="password" id="password" />
                                                            <div className="input-group-append">
                                                                <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                            </div>
                                                        </InputGroup>
                                                    </Form.Group> */}
                                                <div className="text-center">
                                                    <Button className=" sitebtn ashbtn" id="submit" onClick={handleShowModal1}>Submit</Button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="logbottomcellbox">
                                            <p className="btngray"><Link href="/signup" className="ms-1 t-blue" id="register"><i className="fa fa-long-arrow-left me-2"></i> Back to login </Link>
                                            </p>
                                        </div> */}
                                        <div>
                                            <p>Your new password must be different from previous password</p>

                                            <Form.Group className="form-group">
                                                <Form.Label>New Password <span className="t-red">*</span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="newpassword" id="newpassword" />
                                                    <div className="input-group-append">
                                                        <InputGroup.Text><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
                                                    </div>
                                                </InputGroup>

                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Confirm Password <span className="t-red">*</span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="confirmpassword" id="confirmpassword" />
                                                    <div className="input-group-append">
                                                        <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} /> </InputGroup.Text>
                                                    </div>
                                                </InputGroup>

                                            </Form.Group>
                                            <div className="text-center">
                                                <Button type="submit" className=" sitebtn ashbtn" id="submit">Update Password</Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
            <Modal show={showModal1} onHide={handleCloseModal1} aria-labelledby="contained-modal-title-vcenter" centered className='modalbgt Create-Ticket-x '>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Enter Verification Code</Modal.Title>
                    <hr />
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg '>
                        <Form.Group className="mb-3 code-box">
                            <Form.Control type="text" id="title" />
                            <Form.Control type="text" id="title" />
                            <Form.Control type="text" id="title" />
                            <Form.Control type="text" id="title" />
                            <Form.Control type="text" id="title" />
                            <Form.Control type="text" id="title" />
                        </Form.Group>
                        <p className=" text-center">If you didn’t receive a code.Click <span className="bold"> Resend</span></p>


                        <div className="d-flex">
                            <Button  className='gray-btn me-2' id="submit_support" onClick={handleCloseModal1}>Cancel</Button>
                            <Button className='sitebtn' id="submit_support">Confirm</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Page;


