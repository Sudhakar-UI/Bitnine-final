"use client"
import React, { useState } from "react"
import { Container, Form, Image, Badge, Button, Modal } from 'react-bootstrap';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import FileUpload from "../FileUpload";
import AttachFileUpload from "../AttachFileUpload";
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { useTheme } from "@/app/context/ThemeContext";

const page = () => {

    const [showModal3, setShowModal3] = useState(false);

    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);

    const { openMenu } = useSideMenu();

    const { isNightMode } = useTheme();

    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid chat-box-padding mx-2">
            <article className="">
                <Container className="sitecontainer supportbg">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>
                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Chat</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>


                    <div>
                        <div className="tickedid-cont mt-2">
                            <div className="d-flex flex-column">
                                <div className="d-flex justify-content-start gap-2 align-items-center">
                                    <span>Ticket ID:</span>
                                    <span>#EX54455675</span>
                                </div>
                                <div className="d-flex justify-content-start gap-2 align-items-center">
                                    <span>Subject:</span>
                                    <span>Test</span>
                                </div>
                            </div>
                        </div>
                        <div className="chatbox ticketchat">
                            {/* <SimpleBar className="chat chatboxscroll"> */}
                            <div className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left">
                                        <Image src={
                                            isNightMode ?
                                                "assets/images/admin-light.svg" :
                                                "assets/images/admin.svg"
                                        } className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla..</p>
                                            <p>Maecenas tempus faucibus aliquam.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla.
                                            </p>
                                            <p>Maecenas tempus faucibus aliquam.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left">
                                        <Image src={
                                            isNightMode ?
                                                "assets/images/admin-light.svg" :
                                                "assets/images/admin.svg"
                                        } className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla..</p>
                                            <p>Maecenas tempus faucibus aliquam.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla.
                                            </p>
                                            <p>Maecenas tempus faucibus aliquam.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left">
                                        <Image src={
                                            isNightMode ?
                                                "assets/images/admin-light.svg" :
                                                "assets/images/admin.svg"
                                        } className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla..</p>
                                            <p>Maecenas tempus faucibus aliquam.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            {/* <h4 className="h4">John <span className="ps-2 t-gray">( Aug 10,
                                                2024 )</span></h4> */}
                                            <p>Proin vel condimentum tortor, sed sagittis nulla.
                                            </p>
                                            <p>Maecenas tempus faucibus aliquam.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                            </div>
                            {/* </SimpleBar> */}
                        </div>
                        <div className="chat-foot-mobile">

                            <div className="chat-foot-mobile-wrapper">
                                <div className="chat-foot-mobile-input-container">
                                    <span className="chat-foot-mobile-attachment-icon" onClick={handleShowModal3}>
                                        <Image src="assets/images/pin-icon.svg" width={20} height={20} alt="icon" />
                                    </span>
                                    <input className="chat-foot-mobile-input" type="text" placeholder="Type here" />
                                    <button className="chat-foot-mobile-send-btn">
                                        <Image src="assets/images/send.svg" width={20} height={20} alt="icon" />
                                    </button>
                                </div>
                            </div>



                            {/* <Form className="siteformbg">
                                <div className="form-group mb-2">
                                    <Form.Label>Enter your message</Form.Label>
                                    <textarea className="form-control" rows={4} id="textarea1"></textarea>
                                </div>
                                <div className="form-group text-center mb-0">
                                    <Button className="btn sitebtn" id="chatsubmit"><Image src="assets/images/send.svg" width={20} height={20} alt="icon" /> Send</Button>
                                </div>
                            </Form> */}
                        </div>
                    </div>
                </Container >
            </article >
            <MobileFooterNav />

            <Modal show={showModal3} onHide={handleCloseModal3}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Image Upload</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <AttachFileUpload />
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default page