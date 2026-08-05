"use client"
import React from "react";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Image, Table, Nav, Tab } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import ResponsiveTable from '../../components/ResponsiveTable';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from "@/app/components/Bottommenu";



const page = () => {

    const { openMenu } = useSideMenu();

    return (
        <>
            <div className="mobilebg">
                <div className="pagecontent gridpagecontent innerpagegrid">
                    <div className="backgroundoverlay" id="backgroundoverlay"></div>

                    <section className="pt-0 mx-3  mobilebg">
                        <Container className="sitecontainer">
                            <div className="mbheadingbox">
                                <div className="humberbutton">
                                    <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </a>
                                </div>

                                <div className="flex-one-cls flex-grow-1 text-center w-100">
                                    <h2 className="heading-title text-center mb-0 flex-1">Markets</h2>
                                </div>
                                <div className="humberbutton" onClick={openMenu}>
                                    <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                        <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                    </button>
                                </div>

                            </div>

                            <div className="panelcontentbox p-1 mobile-table">
                                <div className="market-box">
                                    <div className="flex-market market-head">
                                        <div>
                                            <Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                            <span className="tt-main">BTC/ETH </span>
                                        </div>
                                        <Link href="/trade" className="btn sitebtn tt-sitebtn">Trade</Link>

                                    </div>
                                    <div className="flex-market mt-2">
                                        <p className="tt-sub-text">Last Price</p>
                                        <p className="tt-main-text">2562.365289</p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text">24h change</p>
                                        <p className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /> </p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text">24h Base Volume</p>
                                        <p className="tt-main-text">2562.365289</p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text mb-0">Quote Volume</p>
                                        <p className="tt-main-text mb-0">2562.365289</p>
                                    </div>
                                </div>
                                <div className="market-box">
                                    <div className="flex-market market-head">
                                        <div>
                                            <Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                            <span className="tt-main">ETH/BTC</span>
                                        </div>
                                        <Link href="/trade" className="btn sitebtn tt-sitebtn">Trade</Link>

                                    </div>
                                    <div className="flex-market mt-2">
                                        <p className="tt-sub-text">Last Price</p>
                                        <p className="tt-main-text">2562.365289</p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text">24h change</p>
                                        <p className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /> </p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text">24h Base Volume</p>
                                        <p className="tt-main-text">2562.365289</p>
                                    </div>
                                    <div className="flex-market">
                                        <p className="tt-sub-text mb-0">Quote Volume</p>
                                        <p className="tt-main-text mb-0">2562.365289</p>
                                    </div>
                                </div>
                                <Tab.Container defaultActiveKey="hotspot">
                                    {/* <div className="innerpagetab historytab">
                  <Nav variant="pills" className="tabbanner">
                    <Nav.Item><Nav.Link eventKey="hotspot">Hot Spot</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="gain">Top Gainer</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="losser">Top Looser</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="listing">New Listing</Nav.Link></Nav.Item>
                  </Nav>
                </div> */}
                                    {/* <Tab.Content className="mt-0">
                                    <Tab.Pane eventKey="hotspot">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable m-0" id="table1">

                                                <tbody>
                                                    <tr>
                                                        <td className="img-bg"></td> <br />                                                         
                                                        <td className="text-end"><Link href="/trade" className="btn sitebtn tt-sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>                                                     
                                                        <td><span className="tt-sub-text">Last Price</span></td> <br />
                                                        <td className="text-end tt-main-text">2562.365289</td>                                                        
                                                    </tr>
                                                    <tr>                                         
                                                        <td className="tt-sub-text">24h change</td> <br />
                                                        <td className="text-end"><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>                                                     
                                                    </tr>
                                                      <tr>                                                     
                                                        <td><span className="tt-sub-text">24h Base Volume</span></td> <br />
                                                        <td className="text-end tt-main-text">2562.365289</td>                                                        
                                                    </tr>
                                                      <tr>                                                     
                                                        <td><span className="tt-sub-text">Quote Volume</span></td> <br />
                                                        <td className="text-end tt-main-text">2562.365289</td>                                                        
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table1" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="gain">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable" id="table2">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Last Price</th>
                                                        <th>24h Change</th>
                                                        <th>24 baseVolume</th>
                                                        <th>QuoteVolume</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table2" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="losser">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable" id="table3">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Last Price</th>
                                                        <th>24h Change</th>
                                                        <th>24 baseVolume</th>
                                                        <th>QuoteVolume</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table3" />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="listing">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable" id="table4">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Last Price</th>
                                                        <th>24h Change</th>
                                                        <th>24 baseVolume</th>
                                                        <th>QuoteVolume</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />BTC/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/eth.svg" width={25} height={25} alt="coin" className="coinlisticon" />ETH/BTC</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/bnb.svg" width={25} height={25} alt="coin" className="coinlisticon" />BNB/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/trx.svg" width={25} height={25} alt="coin" className="coinlisticon" />TRX/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/sol.svg" width={25} height={25} alt="coin" className="coinlisticon" />SOL/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td><Image src="assets/images/color/ada.svg" width={25} height={25} alt="coin" className="coinlisticon" />ADA/ETH</td>
                                                        <td>2562.365289</td>
                                                        <td><span className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /></span></td>
                                                        <td>2562.365289</td>
                                                        <td>2562.365289</td>
                                                        <td><Link href="/trade" className="btn sitebtn">Trade</Link></td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table4" />
                                    </Tab.Pane>
                                </Tab.Content> */}
                                </Tab.Container>
                            </div>
                        </Container>
                    </section>

                </div>
            </div>
            <MobileFooterNav />
        </>

    );
};

export default page;