"use client"
import React, { useState } from 'react'
import { Container, Form, Table, Badge, Image, InputGroup, Row, Col, Tab, Nav } from 'react-bootstrap';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faInfoCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import "react-datepicker/dist/react-datepicker.css";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import '../../../../public/assets/css/mobileview.css'
import MobileFooterNav from '@/app/components/Bottommenu';
import MobileHeader from "@/app/components/MobileHeader";

const Mobilepage = () => {

    return (
        <div className="pagecontent gridpagecontent innerpagegrid mobilebg">

            <MobileHeader title="Referral" />

            <article className="">
                <Container className="sitecontainer">
                    <div className="panelcontentbox contentbox">
                        <div className='d-flex gap-3 justify-content-between mb-3 wallet-ph-div'>
                            <div className='referral-mob-card w-100'>
                                <div className='referral-mob-icon'>
                                    <Image src="./assets/images/referral-mb-icon1.svg" height={50} width={50}></Image>
                                </div>
                                <div className='referral-mob-text'>
                                    <span>Your Sponsor</span>
                                    <span>None</span>
                                </div>
                            </div>
                            <div className='referral-mob-card w-100'>
                                <div className='referral-mob-icon'>
                                    <Image src="./assets/images/referral-mb-icon2.svg" height={50} width={50}></Image>
                                </div>
                                <div className='referral-mob-text'>
                                    <span>Total Downline</span>
                                    <span>02</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-3 justify-content-between mb-3 wallet-ph-div'>
                            <div className='referral-mob-card w-100'>
                                <div className='referral-mob-icon'>
                                    <Image src="./assets/images/referral-mb-icon3.svg" height={50} width={50}></Image>
                                </div>
                                <div className='referral-mob-text'>
                                    <span>Total Earnings</span>
                                    <span>0.0214</span>
                                </div>
                            </div>
                            <div className='referral-mob-card w-100'>
                                <div className='referral-mob-icon'>
                                    <Image src="./assets/images/referral-mb-icon4.svg" height={50} width={50}></Image>
                                </div>
                                <div className='referral-mob-text'>
                                    <span>Earnings Today</span>
                                    <span>0.0025</span>
                                </div>
                            </div>
                        </div>

                        <div className='affiliatebg'>
                            <h6 className='m-0'>Your Portfolio</h6>
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

                        <Tab.Container defaultActiveKey="downline">
                            <div className="innerpagetab historytab">
                                <Nav variant="pills" className="tabbanner">
                                    <Nav.Item><Nav.Link eventKey="downline">Downline Information</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="referralhis">Referral History</Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content className="contentbox">
                                <Tab.Pane eventKey="downline" className="login-act">
                                    <div>
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">User Name</span>
                                                                <span className="t-gray">Total Downline</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">Alisa Kirby</span>
                                                                <span className="table-white-tt fw-semibold">5</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Full Earned</span>
                                                                <span className="t-gray">User Status</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">0.21548</span>
                                                                <span className="t-green fw-semibold">Verified</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">User Name</span>
                                                                <span className="t-gray">Total Downline</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">Alisa Kirby</span>
                                                                <span className="table-white-tt fw-semibold">5</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Full Earned</span>
                                                                <span className="t-gray">User Status</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">0.21548</span>
                                                                <span className="t-green fw-semibold">Verified</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">User Name</span>
                                                                <span className="t-gray">Total Downline</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">Alisa Kirby</span>
                                                                <span className="table-white-tt fw-semibold">5</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Full Earned</span>
                                                                <span className="t-gray">User Status</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">0.21548</span>
                                                                <span className="t-green fw-semibold">Verified</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </SimpleBar>
                                        <ResponsiveTable tableId="table1" />
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="referralhis" className="sec-act">
                                    <div>
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="depo-hist-table sitetable table-responsive-stack" id="table2">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Date & Time</span>
                                                                <span className="t-gray">Credited Token</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">2025/11/05, 05:00:00</span>
                                                                <span className="table-white-tt fw-semibold">0.215486</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Action</span>
                                                                <span className="t-green">View Details</span>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Date & Time</span>
                                                                <span className="t-gray">Credited Token</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">2025/11/05, 05:00:00</span>
                                                                <span className="table-white-tt fw-semibold">0.215486</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Action</span>
                                                                <span className="t-green">View Details</span>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Date & Time</span>
                                                                <span className="t-gray">Credited Token</span>
                                                            </div>
                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="table-white-tt fw-semibold">2025/11/05, 05:00:00</span>
                                                                <span className="table-white-tt fw-semibold">0.215486</span>
                                                            </div>

                                                        </td>
                                                        <td className="text-start">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="t-gray">Action</span>
                                                                <span className="t-green">View Details</span>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>

                                        </SimpleBar>
                                        <ResponsiveTable tableId="table2" />
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Container>
            </article>

            <MobileFooterNav />
        </div>
    )
}

export default Mobilepage;