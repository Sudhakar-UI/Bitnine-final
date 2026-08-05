"use client"
import React, { useState } from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Table, Button, Badge, Form, InputGroup, Image, Row, Col } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CountdownTimer from '../Countdowntimer';
import ResponsiveTable from '../../components/ResponsiveTable';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Desktoppage = () => {


    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid">

                <div className="backgroundoverlay" id="backgroundoverlay"></div>
                <Userheader />
                <Leftsidemenu />
                <article className="gridparentbox">
                    <Container className="container sitecontainer bankpage">
                        <div className="innerpagecontent">
                            <h2 className="h2">Convert</h2>
                        </div>
                        <div className="panelcontentbox convertpage-desktop mb-3">
                            <Form className="siteformbg row covrtpage-dp-row align-items-center" method="post" autoComplete="off">
                                <Col>
                                    <div className="convert-box-align">
                                        <div className="convert-box">
                                            <Form.Group>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Form.Label>You are Converting</Form.Label>
                                                    <Form.Label className="text-right"> Available: <span className="t-green">2.3659</span> </Form.Label>
                                                </div>
                                                <div className="d-flex">
                                                    <Form.Control type="text" placeholder="Enter Amount" />
                                                    <Form.Select>
                                                        <option value="">BTC</option>
                                                        <option value="">ETH</option>
                                                        <option value="">BNB</option>
                                                        <option value="">XRP</option>
                                                    </Form.Select> 
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div>
                                            <Image src="./assets/images/swap-icon.svg" className="convert-desktop-icon"></Image>
                                        </div>
                                        <div className="convert-box">
                                            <Form.Group>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <Form.Label>You will receive</Form.Label>
                                                    <Form.Label className="text-right"> Available: <span className="t-green">2.3659</span> </Form.Label>
                                                </div>
                                                <div className="d-flex">
                                                    <Form.Control type="text" placeholder="Enter Amount" />
                                                    <Form.Select>
                                                        <option value="">USDT</option>
                                                        <option value="">ETH</option>
                                                        <option value="">BTC</option>
                                                        <option value="">BNB</option>
                                                        <option value="">XRP</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="convert-timer d-flex align-items-center gap-2">
                                        <div>
                                            <CountdownTimer minutes={1} id="countdowntimer" />
                                        </div>
                                        <div>
                                            <p className="content mb-0">Exchange Rate: 1 ETH = 1,842.834552 USDT</p>
                                            <p className="content m-0">Refreshing in 30 seconds</p>
                                        </div>
                                    </div>
                                    <div className="text-start mt-4">
                                        <a href="#" className="btn sitebtn btn-sm" id="convertbtn">Convert</a>
                                    </div>
                                </Col>
                            </Form>
                        </div>
                        <div className="panelcontentbox devicetable">
                            <h2 className="heading-box pt-0 ps-2 border-0">Recent Convert History</h2>
                            <div className="tabrightbox">
                                <Link href="#" className="alink">View All  <FontAwesomeIcon icon={faArrowRight} /></Link>
                            </div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="sitetable" id="table1">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Date & Time</th>
                                            <th>Pair</th>
                                            <th>Convert Amount</th>
                                            <th>Receive Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/btc.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BTC/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/eth.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                ETH/BTC
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/bnb.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                BNB/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/trx.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                TRX/BTC
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/sol.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                SOL/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/xrp.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                XRP/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>11-12-2024 05:00:05</td>
                                            <td>
                                                <Image src="assets/images/color/ada.svg" width="{50}"
                                                    height="{50}" alt="coin" className="coinicon" />
                                                ADA/ETH
                                            </td>
                                            <td>10,0000256</td>
                                            <td>58.26</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Container>
                </article>
                <Userfooter />
            </div>
        </div>
    );
};

export default Desktoppage;