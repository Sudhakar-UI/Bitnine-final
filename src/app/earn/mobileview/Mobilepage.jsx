"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Form, Button, InputGroup, Container, Row, Col, OverlayTrigger, Tooltip, Accordion, NavDropdown, Tab, Nav } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faAngleUp, faAngleDown, faSearch, faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';

const Mobilepage = () => {
    const [activeKey, setActiveKey] = useState('1');

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

    const responsive = {
        superLargeDesktop: {
            // The naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1200 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 1200, min: 991 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 991, min: 600 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
        },
    }

    const { openMenu } = useSideMenu();

    return (
        <div className="mobilebg">
            <div className="pagecontent gridpagecontent innerpagegrid">
                <article className="earn-history-page">
                    <Container className="sitecontainer walletoverviewbg">
                        <div className="mbheadingbox px-1">
                            <div className="humberbutton">
                                <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </a>
                            </div>

                            <div className="flex-one-cls flex-grow-1 text-center w-100">
                                <h2 className="heading-title text-center mb-0 flex-1">Earn History</h2>
                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                    <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                </button>
                            </div>
                        </div>

                        <div className="wallet-ph">
                            <div className="panelcontentbox earntablebg savingbannersec mt-3">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                                    <div className="innerpagetab historytab">
                                        <Nav variant="pills" className="tabbanner mb-1">
                                            <Nav.Item> <Nav.Link eventKey="current">Current Holding</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="historical">Historical Holding</Nav.Link></Nav.Item>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="current">
                                            <Table className="sitetable m-table" id='table2'>
                                                <thead>
                                                    <tr>
                                                        <th>Coins</th>
                                                        <th>Amount</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="border-0" id="accordion">
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/btc.svg" className="coinicon" />BTC</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data1" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data2" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/eth.svg" className="coinicon" />ETH</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data2" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/bnb.svg" className="coinicon" />BNB</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>

                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data3" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/trx.svg" className="coinicon" />TRX</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data4" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td rowSpan="3"></td>
                                                                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                            <td className="notablehead"><FontAwesomeIcon icon={faArrowRight} onClick={handleShow1} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/sol.svg" className="coinicon" />SOL</td>
                                                        <td>000000000</td>
                                                        <td><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data5" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td rowSpan="3"></td>
                                                                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                            <td className="notablehead"><FontAwesomeIcon icon={faArrowRight} onClick={handleShow1} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="historical">
                                            <Table className="sitetable m-table" id='table2'>
                                                <thead>
                                                    <tr>
                                                        <th>Coins</th>
                                                        <th>Amount</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="border-0" id="accordion">
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data1" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/btc.svg" className="coinicon" />BTC</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data1" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data2" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/eth.svg" className="coinicon" />ETH</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data2" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data3" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/bnb.svg" className="coinicon" />BNB</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>

                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data3" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>Profit(up to date)</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Duration</td>
                                                                            <td>30 days</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Locked Days</td>
                                                                            <td>	18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Early APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Est.APY</td>
                                                                            <td><span className="t-green">5%</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Subscribe Date</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Min Unlock days</td>
                                                                            <td>18/11/2025</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data4" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/trx.svg" className="coinicon" />TRX</td>
                                                        <td>000000000</td>
                                                        <td className="angleiconcell"><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data4" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td rowSpan="3"></td>
                                                                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                            <td className="notablehead"><FontAwesomeIcon icon={faArrowRight} onClick={handleShow1} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="accordionrow collapsed" data-bs-toggle="collapse" href="#data5" data-bs-parent="#accordion" aria-expanded="false">
                                                        <td><Image src="assets/images/color/sol.svg" className="coinicon" />SOL</td>
                                                        <td>000000000</td>
                                                        <td><FontAwesomeIcon icon={faAngleDown} /></td>
                                                    </tr>
                                                    <tr className="accordeon-content">
                                                        <td colSpan={4} className="p-0">
                                                            <div id="data5" className="collapse" data-bs-parent="#accordion">
                                                                <Table className="sitetable">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td rowSpan="3"></td>
                                                                            <td><span className="t-green">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></span></td>
                                                                            <td className="notablehead"><FontAwesomeIcon icon={faArrowRight} onClick={handleShow1} /></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>

                        </div >
                    </Container>
                </article >
            </div>
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal subscribemodalbox' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Subscribe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Row>
                            <Col lg={12} xs={12}>
                                <div className="s-flex-modal">
                                    <p className="s-modal-txt">Flexible</p>
                                    <p className="saving-txt mb-2">12.11%  <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae inventore distinctio repellat quas quam illum repudiandae possimus laudantium earum magnam, sequi atque adipisci maiores blanditiis a. Minus magni culpa voluptate.</Tooltip>}><span className="t-gray mx-2">Max</span></OverlayTrigger></p>
                                </div>
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
                                    <Form.Group className="saving-summary">
                                        <Accordion defaultActiveKey={null}>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Summary</Accordion.Header>
                                                <Accordion.Body>
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
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Form.Group>

                                </Form.Group>
                                <Form.Group>
                                    <div className="saving-checkbox-wrapper">
                                        <Form.Check id="savingcheck" className="saving-checkbox me-2" />
                                        <Form.Label className="saving-checkbox-label">I have read and agreed to </Form.Label><Link href="#" className="alink"> bitnine Simple Earn Service Terms & Conditions</Link>
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

            <MobileFooterNav />
        </div>
    );
};


export default Mobilepage;