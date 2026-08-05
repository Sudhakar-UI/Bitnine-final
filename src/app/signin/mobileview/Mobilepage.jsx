"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { faCog, faBars, faArrowLeft, faFilter } from '@fortawesome/free-solid-svg-icons';



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
                            <h2 className="heading-title text-center mb-0 flex-1">Sign In</h2>
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
                    <div className="rightsideformbox">
                        <Form className="siteformbg">
                            <div className="login-form">
                                <div className="">
                                    <div className="logcenterbox">

                                        <div className="formcontentbox mt-3">
                                            <Form.Group className="form-group">
                                                <Form.Label>Email Address <span className="t-red">*</span></Form.Label>
                                                <Form.Control type="text" name="" id="email" />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Password <span className="t-red">*</span></Form.Label>
                                                <InputGroup>
                                                    <Form.Control type="email" id="password" />
                                                    <div className="input-group-append">
                                                        <InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
                                                    </div>
                                                </InputGroup>
                                            </Form.Group>
                                            <p className="btngray"> <Link href="/forgot" className="t-blue" id="reset">Forgot your password?</Link> </p>
                                            <div className="text-center mb-2">
                                                <Button type="submit" className=" sitebtn ashbtn" id="submit"> Sign In </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logbottomcellbox">
                                        <p className="btngray"> Don't have an account?<Link href="/signup" className="ms-1 t-blue" id="register"> Sign Up </Link>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </Form>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Page;


