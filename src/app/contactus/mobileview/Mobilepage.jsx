"use client"
import React, { useEffect } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Mobilepage = () => {

    const { openMenu } = useSideMenu();

    return (
        <>
            <div className="mobilebg mx-3">
                <article className="innerpage-non-border">
                    <div className="innerpages">
                        <Container>
                            <div className="mbheadingbox">
                                <div className="humberbutton">
                                    <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </a>
                                </div>

                                <div className="flex-one-cls flex-grow-1 text-center w-100">
                                    <h2 className="heading-title text-center mb-0 flex-1">Contact & Support</h2>
                                </div>
                                <div className="humberbutton" onClick={openMenu}>
                                    <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                        <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                    </button>
                                </div>
                            </div>

                            <div className="panelcontentbox contactusform">
                                <Form className="siteformbg">
                                    <div className="formcontentbox mt-3">
                                        <Form.Group className="form-group">
                                            <Form.Label>Name </Form.Label>
                                            <Form.Control type="text" name="" id="name" />
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Email Address </Form.Label>
                                            <Form.Control type="text" name="" id="email" />
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Subject </Form.Label>
                                            <Form.Select id="subject">
                                                <option>General Enquiry</option>
                                                <option>Technical Support</option>
                                                <option>Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control id="message" as="textarea" name="message" rows={3} placeholder="Write your message" />
                                        </Form.Group>
                                        <div className="text-center">
                                            <Button type="submit" className=" sitebtn ashbtn" id="submit">Submit</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Container>
                    </div>
                </article>

                <MobileFooterNav />
            </div>
        </>
    )
}

export default Mobilepage