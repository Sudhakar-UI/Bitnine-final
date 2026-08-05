"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import '../../../../public/assets/css/home.css';
import '../../../../public/assets/css/mobileview.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faBars, faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';

import { faEye } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    useEffect(() => {
        document.body.classList.add('loginbanner');
        document.body.classList.remove('userpanelpage');
        return () => {
            document.body.classList.remove("loginbanner");
        };
    });
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
                            <h2 className="heading-title text-center mb-0 flex-1">Reset Password</h2>
                        </div>
                        <div style={{ width: "47px" }}></div>

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
                                    <div className="loginformbox p-0">
                                        <div className="logcenterbox">

                                            <div className="formcontentbox mt-3">
                                                {/* <Form.Group className="form-group">
                                                    <Form.Label>Email Address <span className="t-red">*</span></Form.Label>
                                                    <Form.Control type="text" name="" id="email" />
                                                </Form.Group> */}
                                                <Form.Group className="form-group">
                                                    <Form.Label>Email OTP code <span className="t-red">*</span></Form.Label>
                                                    <Form.Control type="text" name="" id="code" />
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Password <span className="t-red">*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="password" id="password" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Form.Group className="form-group">
                                                    <Form.Label>Confirm Password <span className="t-red">*</span></Form.Label>
                                                    <InputGroup>
                                                        <Form.Control type="password" id="confirmpassword" />
                                                        <div className="input-group-append">
                                                            <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <div className="text-center">
                                                    <Button type="submit" className=" sitebtn ashbtn" id="submit">Update Password</Button>
                                                </div>
                                            </div>
                                        </div>
                                     
                                        <div className="logbottomcellbox">
                                            <p className="btngray mb-0">Mail not received click resend link,
                                                <Link href="/signin" className="t-blue" id="resend"> Send Code</Link>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Page;










