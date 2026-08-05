"use client";
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Image, Form } from 'react-bootstrap'
import Homeheader from '../../components/Homeheader';
import '../../../../public/assets/css/mobileview.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBars, faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';

const page = () => {
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
                <Container>

                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Email Verification</h2>
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
                    <div className="formboxbg ">
                        <div className="rightsideformbox p-0">
                            <Form className="siteformbg">
                                <div className="login-form">
                                    <div className="">
                                        <div className="logcenterbox">

                                            <p className="content">Please enter the 6-digit verification code that was sent to john@mailinator.com</p>
                                            <div className="formcontentbox">
                                                <Form.Group className="form-group">
                                                    <Form.Control name="code" type="number" id="otpcode" />
                                                </Form.Group>
                                                <Form.Group className="mb-3 text-center">
                                                    <input type="submit" name="" className="btn sitebtn" value="Submit" id="submit" />
                                                </Form.Group>

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
    )
}

export default page

