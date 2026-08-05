"use client"
import React, { useState } from "react"
import { Container, Form, Button, Table, Image, Modal, Badge } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import FileUpload from "../FileUpload";
import AttachFileUpload from "../AttachFileUpload";
import ResponsiveTable from "../../components/ResponsiveTable";
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';

const Desktoppage = () => {

    const { openMenu } = useSideMenu();

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);
    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid">
            <article>
                <Container className="sitecontainer supportbg">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>
                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Support</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>

                    <div className='panelcontentbox'>

                        <button className="btn advance-kyc-btn d-flex justify-content-center align-items-center gap-2 mt-3" id="createbtn" onClick={handleShowModal2}>
                            <Image src="./assets/images/circle-plus.svg"></Image>
                            Create Ticket
                        </button>

                        <SimpleBar className="table-responsive sitescroll">
                            <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                <tbody>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Ticket ID</span>
                                                <span className="t-gray">Subject</span>
                                            </div>
                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="table-white-tt fw-semibold">TY6489586</span>
                                                <span className="table-white-tt fw-semibold">How to use KYC Process</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Status</span>
                                                <span className="t-gray">Created at</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-red">Closed</span>
                                                <span className="table-white-tt fw-semibold">2024-10-23, 13:07:22</span>
                                            </div>
                                        </td>
                                        <td colSpan={12}>
                                            <Button as={Link} href="/chat" className="sitebtn d-flex justify-content-center align-items-center gap-2 w-100">
                                                <Image src="./assets/images/chat-icon.svg"></Image>
                                                Chat
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Ticket ID</span>
                                                <span className="t-gray">Subject</span>
                                            </div>
                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="table-white-tt fw-semibold">TY6489586</span>
                                                <span className="table-white-tt fw-semibold">How to use KYC Process</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Status</span>
                                                <span className="t-gray">Created at</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-red">Closed</span>
                                                <span className="table-white-tt fw-semibold">2024-10-23, 13:07:22</span>
                                            </div>
                                        </td>
                                        <td colSpan={12}>
                                            <Button as={Link} href="/chat" className="sitebtn d-flex justify-content-center align-items-center gap-2 w-100">
                                                <Image src="./assets/images/chat-icon.svg"></Image>
                                                Chat
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Ticket ID</span>
                                                <span className="t-gray">Subject</span>
                                            </div>
                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="table-white-tt fw-semibold">TY6489586</span>
                                                <span className="table-white-tt fw-semibold">How to use KYC Process</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-gray">Status</span>
                                                <span className="t-gray">Created at</span>
                                            </div>

                                        </td>
                                        <td className="text-start">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="t-red">Closed</span>
                                                <span className="table-white-tt fw-semibold">2024-10-23, 13:07:22</span>
                                            </div>
                                        </td>
                                        <td colSpan={12}>
                                            <Button as={Link} href="/chat" className="sitebtn d-flex justify-content-center align-items-center gap-2 w-100">
                                                <Image src="./assets/images/chat-icon.svg"></Image>
                                                Chat
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                </Container >
            </article >
            <MobileFooterNav />
            <Modal show={showModal1} onHide={handleCloseModal1} backdrop="static"     // disables outside click close
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt chatmodalbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="chatticketlist">
                        <h1 className="heading-box">Ticket ID : EX6276648</h1>
                        <div className="chatbox ticketchat">
                            <SimpleBar className="chat chatboxscroll">
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">Admin<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="right clearfix">
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">John<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <a href="" target="_blank" className="chtimg"><Image width={100} height={100} alt="attachment" src="assets/images/logo.svg" /></a>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">Admin<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                            <p>Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">Admin<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left"><Image src="assets/images/admin.svg"
                                        className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                    </div>
                                    <div className="chat-body clearfix">
                                        <div className="header">
                                            <h4 className="h4">Admin<span className="ps-2 t-gray">( Nov 10,
                                                2025 )</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </div>
                                    </div>
                                </li>
                            </SimpleBar>
                            <div className="chat-foot">
                                <Form className="siteformbg">
                                    <div className="form-group">
                                        <div className="tabrightbox atcimgbtn">
                                            <Button className="btn sitebtn btn-sm" onClick={handleShowModal3}><FontAwesomeIcon icon={faPaperclip} /> Attach Image</Button>
                                        </div>
                                        <Form.Label>Enter your message</Form.Label>
                                        <textarea className="form-control" rows={4} id="textarea1"></textarea>
                                    </div>
                                    <div className="form-group text-center m-0">
                                        <input type="submit" className="btn sitebtn" value="Submit" id="submit" />
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal2} onHide={handleCloseModal2}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className='modalbgt authtblemdlbox'>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Create Tickets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" id="title" />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Enter your message</Form.Label>
                            <Form.Control
                                as="textarea" rows={3}
                                name="Message" id="message" />
                        </Form.Group>
                        <FileUpload />
                        <div className="text-center">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
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
        </div >
    );
}

export default Desktoppage;