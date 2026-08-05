"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Form, Modal, Table, Badge, InputGroup, DropdownButton, Dropdown, Button, Nav, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faLongArrowRight, faBars, faEyeSlash, faAngleRight, faCheckCircle, faCopy, faEdit, faRightLong, faArrowRight, faArrowLeft, faArrowsUpDown, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import 'react-loading-skeleton/dist/skeleton.css'
import ResponsiveTable from '../../components/ResponsiveTable';
import StatChart from '../statChart';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';



const Page = () => {
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const { openMenu } = useSideMenu();

    return (
        <>
            <section className="pt-0 mx-3  mobilebg">
                <Container className="sitecontainer dashboardpage">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Dashboard</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="subhead">Balance details <FontAwesomeIcon icon={faEyeSlash} /></h4>

                        <div className='d-flex gap-2'>
                            <Image src="assets/images/mo-bank.svg" className='mobile-img' />
                            <div>
                                <h3 className="h3 m-0 amout-num mb-1">$ 15,2569</h3>

                                <p className="m-0 h6">Today's PnL
                                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
                                        <FontAwesomeIcon icon={faCircleInfo} className="ms-1" /></OverlayTrigger>
                                    <span> $ 0.000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="introbox panelcontentbox gradientdarkbg mb-3 mt-4">
                        <div className="cryptobox">
                            <div className="table-content d-flex flex-column gap-3 justify-content-between">
                                <div className="d-flex  justify-content-between align-items-center w-100 border-bottom-x">
                                    <div className=' d-flex  align-items-center gap-2 '>
                                        <Image src="assets/images/profile.svg" className='profile-img-main' />
                                        <div>
                                            <h5>Welcome</h5>
                                            <h4 className="h4 mb-0">Johnwilliam
                                            </h4>
                                        </div>
                                    </div>
                                    <span className=" text-center mobile-icon"><FontAwesomeIcon onClick={handleShow1} icon={faEdit} /></span>
                                </div>
                                <div className="table-content cryptdetbox w-100">
                                    <div className=' d-flex align-items-center justify-content-between '>
                                        <div className="table-t-gray h4">Email </div>
                                        <h5 className="h5">john***@gmail.com</h5> </div>
                                    <div className=' d-flex align-items-center justify-content-between '>
                                        <div className="table-t-gray h4">UID</div>
                                        <h5 className="h5">551356848 <span className="ms-2"><FontAwesomeIcon icon={faCopy} /></span></h5>
                                    </div>
                                    <div className=' d-flex align-items-center justify-content-between '>
                                        <div className="table-t-gray h4">Security Level </div>
                                        <h5 className="t-red h5">Low </h5> </div>
                                    <div className=' d-flex align-items-center justify-content-between '>
                                        <div className="table-t-gray h4">Last Sign In</div>
                                        <h5 className="h5">27-11-2025,09:15:45 AM</h5> </div>
                                </div>
                                <div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="chartflexbox mb-3">
                        <div>
                            <div className="panelcontentbox p-0">
                                <h2 className="subhead pb-2 text-start">Get started — activate your account in 3 quick steps</h2>
                                <div className="welcomebanner qcgo-dash">
                                    <div className="table-content panelcontentbox dashstepsbox mobile-step-main">
                                        <div className=' d-flex gap-1 flex-fill'>

                                            <Image className='step-img' src="assets/images/verifyicon.svg" />
                                            <div>
                                                <h5>Verify Your Identity</h5>
                                                <p className='m-0'>Upload documents to <br /> unlock features</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href="/kyc" className="btn sitebtn btn-sm">Continue kyc</Link>
                                        </div>
                                    </div>
                                    <div className="table-content panelcontentbox mobile-step-main">
                                        <div className=' d-flex gap-1 flex-fill'>
                                            <Image className='step-img' src="assets/images/dpsiticon.svg" />
                                            <div>
                                                <h5>Deposit Crypto</h5>
                                                <p className='m-0'>Choose crypto & deposit <br /> crypto amount</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href="/kyc" className="btn sitebtn btn-sm">Deposit</Link>
                                        </div>
                                    </div>

                                    <div className="table-content panelcontentbox mobile-step-main">
                                        <div className=' d-flex gap-1 flex-fill'>
                                            <Image className='step-img' src="assets/images/starttradeicon.svg" />
                                            <div>
                                                <h5>Start Trading</h5>
                                                <p className='m-0'>Buy/Sell crypto instantly <br /> on spot market</p>

                                            </div>
                                        </div>
                                        <div>
                                            <Link href="#" className="btn sitebtn btn-sm">Trade</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
            <MobileFooterNav />


            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Set Nickname</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="siteformbg">
                        <Form.Group className="form-group">
                            <Form.Label>My Nickname</Form.Label>
                            <Form.Control type="text" name="" id="nickname" placeholder="Enter Nickname" />
                        </Form.Group>
                        <Form.Group className="form-group noteslist">
                            <p><b>Notes :</b></p>
                            <p>1. You can only change your nickname once in 30 days, please edit it carefully.</p>
                            <p>2. Upon submission, your nickname will be reviewed. If any insulting or politically sensitive language is detected, your nickname will be rejected.</p>
                            <p>3. Your nickname in use will be reviewed by the platform from time to time. If any rule violation is detected, your nickname will become invalid, and you will have to submit another nickname for review.</p>
                        </Form.Group>
                        <Form.Group className="form-group text-center d-flex flxbtn m-0">
                            <Button className="borderbtn me-2 w-100">Cancel</Button>
                            <Button className="sitebtn w-100">Confirm</Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Page;