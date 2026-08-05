"use client"
import React from "react"
import Link from "next/link"
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Form, Button, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';


const Desktoppage = () => {

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
                            <h2 className="heading-title text-center mb-0 flex-1">Google Authenticator</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>


                    <div className="panelcontentbox authbg-panel mt-3">
                        <div className="securitycontentbox authbg">
                            <p className="mb-0">Install google Authenticator App in your Mobile and Scan QR Code (or) If you are unable to scan QR Code, Please enter the Code manually into the App</p>
                            <Form className='siteformbg'>
                                <div className="d-flex justify-content-center">
                                    <Image src="assets/images/qrcode.png" alt="img" className="g-auth-box" />
                                </div>
                                <div className="">
                                    <div>
                                        <h3>Wallet Address</h3>
                                        <InputGroup className="form-group auth-otp-input">
                                            <Form.Control name="code" placeholder="4ffnekppkwpweupDF43fwios" id="code" />
                                            <InputGroup.Text><FontAwesomeIcon icon={faCopy} /></InputGroup.Text>
                                        </InputGroup>
                                        <p><span className="fw-semibold text-black">Note:</span> Please save your private key properly in case of any login issues caused by switching or losing your phone.</p>
                                        <Form.Group className="form-group" >
                                            <h3>Enter the OTP</h3>
                                            <InputGroup>
                                                <Form.Control name="code" id="code" type="text" />
                                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                        <p>Mail not Received click resend link <Link href="#0" className="text-black">Send Code</Link></p>

                                        <div className="mt-3">
                                            <Button className="sitebtn">Submit</Button>
                                        </div>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </div>
                </Container>
            </article>
            <MobileFooterNav />
        </div>
    )
}

export default Desktoppage


