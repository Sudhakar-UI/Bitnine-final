"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Form, Button, InputGroup, Container, Row, Col, Accordion, OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEye, faAngleDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SimpleBar from "simplebar-react";
import ResponsiveTable from "@/app/components/ResponsiveTable";

const Mobilepage = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow1 = () => setShowModal1(true);
    const handleShow2 = () => setShowModal2(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (nextShow) => {
        setIsOpen(nextShow);
    };

    const flexscroll = {
        desktop: {
            breakpoint: { max: 1920, min: 1400 },
            items: 3,
        },
        laptop: {
            breakpoint: { max: 1400, min: 1050 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1050, min: 450 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 450, min: 0 },
            items: 3,
        }
    };

    const { openMenu } = useSideMenu();

    return (
        <div className="mobilebg">

            <Container>
                <div className="mbheadingbox">
                    <div className="humberbutton">
                        <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                    </div>

                    <div className="flex-one-cls flex-grow-1 text-center w-100">
                        <h2 className="heading-title text-center mb-0 flex-1">Earn Overview</h2>
                    </div>
                    <div className="humberbutton" onClick={openMenu}>
                        <button type="button" className="menubtn border-0 p-0" id="menubtn">
                            <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                        </button>
                    </div>
                </div>
            </Container>

            <Container>

                <div className="saving-bal-cards">
                    <div className="saving-flexbox">
                        <div>
                            <div className="d-flex flex-column gap-1">
                                <h4 className="subhead pb-0">My Holdings</h4>
                                <p className="m-0">******</p>
                            </div>
                            <div className="saving-eye">
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <h4 className="subhead pb-0">Total Profit</h4>
                            <p className="m-0">******</p>
                        </div>
                        <div className="d-flex flex-column gap-1">
                            <h4 className="subhead pb-0">Last Day Profit</h4>
                            <p className="m-0">******</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </Container>

            <Container>
                <SimpleBar className="table-responsive sitescroll">
                    <Table className="saving-over-table sitetable table-responsive-stack" id="table1">
                        <tbody>
                            <tr>
                                <td className="text-start" colSpan={3}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center gap-2">
                                            <Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                            <div className="d-flex flex-column">
                                                <span className="fw-medium fs-6">Bitcoin</span>
                                                <span>BTC</span>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={faAngleDown} className="collapsed cursor-pointer" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false" />
                                    </div>
                                </td>

                                <td className="my-2 p-0" >
                                    <hr className="m-0" />
                                </td>

                                <td className="text-start">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="t-gray">Est.APR</span>
                                        <span className="table-white-tt t-green">4.2%~12.11%</span>
                                    </div>

                                </td>
                                <td className="text-start">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="t-gray">Duration</span>
                                        <span className="table-white-tt">Flexible/Locked</span>
                                    </div>
                                </td>

                                <td id="data1" className="collapse mt-2">
                                    <div className="d-flex flex-column gap-1">
                                        <div className="saving-sub-td">
                                            <div className="d-flex justify-content-between align-items-center py-1">
                                                <span className="t-gray">Est.APR</span>
                                                <span className="table-white-tt"><span className="t-green">12.11%</span> (MAX)</span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center py-1">
                                                <span className="t-gray">Duration</span>
                                                <span className="table-white-tt">Flexible</span>
                                            </div>
                                            <div className="px-1">
                                                <button className="sitebtn mt-1" onClick={handleShow1}>Subscribe</button>
                                            </div>
                                        </div>
                                        <div className="saving-sub-td">
                                            <div className="d-flex justify-content-between align-items-center py-1">
                                                <span className="t-gray">Est.APR</span>
                                                <span className="table-white-tt"><span className="t-green">4.2%</span></span>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center py-1">
                                                <span className="t-gray">Duration</span>
                                                <span className="table-white-tt">Locked</span>
                                            </div>
                                            <div className="px-1">
                                                <button className="sitebtn mt-1" onClick={handleShow2}>Subscribe</button>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                            </tr>

                        </tbody>
                    </Table>

                </SimpleBar>
                <ResponsiveTable tableId="table1" />
            </Container>

            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <Carousel className="partnerflex subscribe-flex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={true} swipeable={true} draggable={true} arrows={false}>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal active">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                </Carousel>
                                <Form.Group>
                                    <Form.Group className="form-group" >
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
                                            <InputGroup.Text id="max">Max</InputGroup.Text>
                                        </InputGroup>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-0 t-gray text-start">
                                                Available 5,857.27879652 USDT
                                            </p>
                                        </div>
                                    </Form.Group>
                                    <h6>Summary</h6>
                                    <Form.Group className="saving-summary">
                                        <div className="table-responsive" data-simplebar>
                                            <Table className="sitetable" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td>Subscription Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Start Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Period</td>
                                                        <td>1 Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Payment Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Form.Group>

                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> Bitnine <br /> <span className="t-blue">Simple Earn Service Terms & Conditions</span></Link>
                                    </div>
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="sitebtn" id='confirmbtn'>
                                        Confirm
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <Carousel className="partnerflex subscribe-flex" responsive={flexscroll} autoPlay={true} autoPlaySpeed={3000} showDots={true} swipeable={true} draggable={true} arrows={false}>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal active">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                    <div className="s-flex-modal">
                                        <p className="s-modal-txt">Flexible</p>
                                        <p className="saving-txt mb-2">12.11% </p>
                                    </div>
                                </Carousel>
                                <Form.Group>
                                    <Form.Group className="form-group" >
                                        <Form.Label>Amount</Form.Label>
                                        <InputGroup>
                                            <Form.Control name="code" id="code" type="text" placeholder="Min 0.1 USDT" />
                                            <InputGroup.Text id="max">Max</InputGroup.Text>
                                        </InputGroup>
                                        <div className="notestitle notesgray dpstnotes">
                                            <p className="pb-0 t-gray text-start">
                                                Available 5,857.27879652 USDT
                                            </p>
                                        </div>
                                    </Form.Group>
                                    <h6>Summary</h6>
                                    <Form.Group className="saving-summary">
                                        <div className="table-responsive" data-simplebar>
                                            <Table className="sitetable" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td>Subscription Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Start Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Period</td>
                                                        <td>1 Day</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Interest Payment Date</td>
                                                        <td>2025-06-19 11:17:05</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Form.Group>

                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> Bitnine <br /> <span className="t-blue">Simple Earn Service Terms & Conditions</span></Link>
                                        <OverlayTrigger
                                            placement="left"
                                            overlay={
                                                <Tooltip id="tooltip-top" className="custom-tooltip-pad">
                                                    <ul className="">
                                                        <b>Lock Period :-</b>
                                                        <li>
                                                            During the lock period, your funds cannot be
                                                            withdrawn. It is locked.
                                                        </li>
                                                        <li>
                                                            {" "}
                                                            Interest is calculated daily, but not credited
                                                            daily.
                                                        </li>{" "}
                                                        <li>
                                                            Both principal and accumulated interest will
                                                            be credited after the lock period ends.
                                                        </li>{" "}
                                                        <li>Early cancellation (if available).</li>{" "}
                                                        <li>
                                                            Once the lock period is completed, funds are
                                                            automatically released to your wallet.
                                                        </li>
                                                    </ul>
                                                </Tooltip>
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faInfoCircle}
                                                className="ms-1"
                                            />
                                        </OverlayTrigger>
                                    </div>
                                </Form.Group>
                                <Form.Group className="text-center">
                                    <Button className="sitebtn" id='confirmbtn'>
                                        Confirm
                                    </Button>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};


export default Mobilepage;