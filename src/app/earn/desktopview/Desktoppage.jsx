"use client"
import React from "react";
import Link from 'next/link';
import { Container, Image, Nav, Tab, Table, Form } from 'react-bootstrap';
import Leftsidemenu from '../../components/Leftsidemenu';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';

const Desktoppage = () => {
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer earnbg">
                    <div className="innerpagecontent">
                        <h2 className="h2">Earn History</h2>
                    </div>
                    <div className='earntablebg mt-3 panelcontentbox'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="current">
                            <div className="innerpagetab historytab">
                                <Nav variant="pills" className="tabbanner">
                                    <Nav.Item> <Nav.Link eventKey="current">Current Holding</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="historical">Historical Holding</Nav.Link></Nav.Item>
                                </Nav>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="current">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable mb-0" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>Assets</th>
                                                    <th>Amount</th>
                                                    <th>Profit(up to date)</th>
                                                    <th>Duration</th>
                                                    <th>Locked Days</th>
                                                    <th>Early APY</th>
                                                    <th>Est.APY</th>
                                                    <th>Subscribe Date</th>
                                                    <th>Min Unlock days</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" /> BTC</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" />XRP</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ada.svg" width={50} height={50} alt="coin" className="coinlisticon" />ADA</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="historical">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="sitetable mb-0" id="table2">
                                            <thead>
                                                <tr>
                                                    <th>Assets</th>
                                                    <th>Amount</th>
                                                    <th>Profit</th>
                                                    <th>Duration</th>
                                                    <th>Early APY</th>
                                                    <th>Est.APY</th>
                                                    <th>Min. Unlock days</th>
                                                    <th>Subscribe Date</th>
                                                    <th>Unlocked Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><Image src="assets/images/color/btc.svg" width={50} height={50} alt="coin" className="coinlisticon" /> BTC</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/eth.svg" width={50} height={50} alt="coin" className="coinlisticon" />ETH</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/bnb.svg" width={50} height={50} alt="coin" className="coinlisticon" />BNB</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/trx.svg" width={50} height={50} alt="coin" className="coinlisticon" />TRX</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/sol.svg" width={50} height={50} alt="coin" className="coinlisticon" />SOL</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/xrp.svg" width={50} height={50} alt="coin" className="coinlisticon" />XRP</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                                <tr>
                                                    <td><Image src="assets/images/color/ada.svg" width={50} height={50} alt="coin" className="coinlisticon" />ADA</td>
                                                    <td>000000000</td>
                                                    <td>18/11/2025 </td>
                                                    <td>30 </td>
                                                    <td>18/11/2025</td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td><span className="t-green">5%</span></td>
                                                    <td>18/11/2025</td>
                                                    <td>18/11/2025</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table2" />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </Container >
            </article >
            <Userfooter />
        </div>
    );
}

export default Desktoppage;