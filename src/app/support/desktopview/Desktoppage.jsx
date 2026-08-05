"use client"
import React, { useState } from "react"
import { Container, Form, Button, Table, Image, Modal, Badge } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import FileUpload from "../FileUpload";
import AttachFileUpload from "../AttachFileUpload";
import ResponsiveTable from "../../components/ResponsiveTable";
import { useTheme } from "@/app/context/ThemeContext";

const Desktoppage = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);

    const handleShowModal3 = () => setShowModal3(true);
    const handleCloseModal3 = () => setShowModal3(false);

    const { isNightMode } = useTheme();

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer supportbg">
                    <div className="innerpagecontent">
                        <h2 className="h2">Support</h2>
                        <div className="tabrightbox backbtn"> <Button className="btn sitebtn btn-sm" id="createbtn" onClick={handleShowModal2}>Create Ticket</Button></div>
                    </div>
                    <div className='panelcontentbox '>
                        <SimpleBar className="table-responsive sitescroll" data-simplebar>
                            <Table className="sitetable" id="table1">
                                <thead>
                                    <tr>
                                        <th>Ticket ID</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowModal1}>Chat <span className="counticon">5</span></Button></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowModal1}>Chat </Button></td>
                                    </tr><tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowModal1}>Chat </Button></td>
                                    </tr><tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowModal1}>Chat </Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                    </div>
                </Container >
            </article >
            <Userfooter />
            <Modal show={showModal1} onHide={handleCloseModal1} backdrop="static"     // disables outside click close
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
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
                                    <div className="chat-img pull-left">
                                        {isNightMode ? (
                                            <Image src="assets/images/admin-light.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        ) : (
                                            <Image src="assets/images/admin.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        )}
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
                                            <a href="" target="_blank" className="chtimg">
                                                {isNightMode ? (
                                                    <Image width={100} height={100} alt="attachment" src="assets/images/logo-light.svg" />
                                                ) : (
                                                    <Image width={100} height={100} alt="attachment" src="assets/images/logo.svg" />
                                                )}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="chat-img pull-right"><Image src="assets/images/profile.svg"
                                        className="img-circle" width={50} height={50} alt="icon" />
                                    </div>
                                </li>
                                <li className="left clearfix">
                                    <div className="chat-img pull-left">
                                        {isNightMode ? (
                                            <Image src="assets/images/admin-light.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        ) : (
                                            <Image src="assets/images/admin.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        )}
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
                                    <div className="chat-img pull-left">
                                        {isNightMode ? (
                                            <Image src="assets/images/admin-light.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        ) : (
                                            <Image src="assets/images/admin.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        )}
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
                                    <div className="chat-img pull-left">
                                        {isNightMode ? (
                                            <Image src="assets/images/admin-light.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        ) : (
                                            <Image src="assets/images/admin.svg"
                                                className="img-circle" width={50} height={50} alt="icon" id="adminimg" />
                                        )}
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