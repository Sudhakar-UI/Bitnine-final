"use client"
import React, { useState } from 'react'
import { Container, Form, Table, Badge, Image, InputGroup, Row, Col, Button, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faInfoCircle, faFilter } from '@fortawesome/free-solid-svg-icons';
import Leftsidemenu from '../../components/Leftsidemenu';
import ResponsiveTable from '../../components/ResponsiveTable';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Desktoppage = () => {
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const [selectedDate, setSelectedDate] = useState(null);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2">Referral</h2>
                    </div>
                    <div className="panelcontentbox contentbox">
                        <div className="refbox pb-4">
                            <div className="panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <p className="content">Your Sponsor</p>
                                        <div className='d-flex align-items-center gap-1'>
                                            <OverlayTrigger placement="top" delay={{ show: 250, hide: 1000 }} overlay={<Tooltip id="button-tooltip">testpixel1@mailinator.com (ID: BITNINE744370RD)</Tooltip>} trigger={['hover', 'focus']}><h4 className="h4 email-only">testpixel1@mailinator.com (ID: BITNINE744370RD)</h4></OverlayTrigger>
                                            <FontAwesomeIcon icon={faCopy} />
                                        </div>
                                    </div>
                                    <div>
                                        <Image src="assets/images/sponsor-drk.svg" alt="icon" className="rf-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <p className="content">Total Downline (Direct)</p>
                                        <h4 className="h4">2</h4>
                                    </div>
                                    <div>
                                        <Image src="assets/images/downline-drk.svg" alt="icon" className="rf-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <p className="content">Total Earnings</p>
                                        <h4 className="h4">0.0026549</h4>
                                    </div>
                                    <div>
                                        <Image src="assets/images/totalearn-drk.svg" alt="icon" className="rf-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="panelcontentbox">
                                <div className="table-content">
                                    <div>
                                        <p className="content">Earnings Today</p>
                                        <h4 className="h4">20026549</h4>
                                    </div>
                                    <div>
                                        <Image src="assets/images/earntoday-drk.svg" alt="icon" className="rf-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='affiliatebg'>
                            <h5 className="t-yellow">Refer your friends, Get Rewards</h5>
                            <p>Get your friends 20% off all products, when your friends buy from your invite link, you get 20% off all products.</p>
                            <Form className="siteformbg">
                                <Row>
                                    <Col lg={4} md={6}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Link</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" id='ref_url' placeholder="https://john/DFEQWT542642" />
                                                <div className="input-group-append">
                                                    <InputGroup.Text> <FontAwesomeIcon icon={faCopy} id='copy_refurl' /> </InputGroup.Text>
                                                </div>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={4} md={6}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Code</Form.Label>
                                            <InputGroup>
                                                <Form.Control type="number" id='ref_code' placeholder="DFEQWT542642" />
                                                <div className="input-group-append">
                                                    <InputGroup.Text> <FontAwesomeIcon icon={faCopy} id='copy_code' /> </InputGroup.Text>
                                                </div>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>

                    <div className="flexbox mt-3 reftable">
                        <div className="mt-0 panelcontentbox">
                            <h2 className="subhead pb-2">Downline Information</h2>
                            <div className="contentbox">
                                <Simplebar className="table-responsive sitescroll">
                                    <Table className="sitetable table-responsive-stack mb-0" id="table1">
                                        <thead>
                                            <tr>
                                                <th>User Name </th>
                                                <th>
                                                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="button-tooltip">Cumulative commission earned from referrals</Tooltip>} trigger={['hover', 'focus']}><span>Total Earnings<span className="ms-1"><FontAwesomeIcon icon={faInfoCircle} /></span></span></OverlayTrigger>
                                                </th>
                                                <th>User Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                            <tr>
                                                <td>John</td>
                                                <td>0.32569</td>
                                                <td><Badge bg="success">Verifed</Badge></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Simplebar>
                                <ResponsiveTable tableId="table1" />
                            </div>
                        </div>
                        <div className="mt-0 panelcontentbox">
                            <h2 className="subhead pb-2">Referral History</h2>
                            {/* <div className="tabrightbox">
                                <Link href="#" onClick={handleShow1} className="btn borderbtn btn-sm filterbtn"><FontAwesomeIcon icon={faFilter} /></Link>
                            </div> */}
                            <div className="contentbox">
                                <Simplebar className="table-responsive sitescroll">
                                    <Table className="sitetable table-responsive-stack mb-0" id="table2">
                                        <thead>
                                            <tr>
                                                <th>Date & time</th>
                                                <th>Credited Token</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.32569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.32569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.369</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.52569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.62569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.72569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                            </tr>
                                            <tr>
                                                <td>18/06/2025, 05:05:00</td>
                                                <td>0.12569</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Simplebar>
                                <ResponsiveTable tableId="table2" />
                            </div>
                        </div>
                    </div>

                </Container>
            </article>
            <Userfooter />
        </div>
    )
}

export default Desktoppage;