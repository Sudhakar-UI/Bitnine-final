"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Tab, Nav, Form, Container, Row, Col, Button, InputGroup, Dropdown, OverlayTrigger, Tooltip, NavDropdown, Pagination } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faChartLine, faHistory, faEllipsisV, faAngleUp, faAngleDown, faSearch, faAngleRight, faArrowLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StatChart from './statChart';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import ResponsiveTable from '../../components/ResponsiveTable';
import '../../../../public/assets/css/mobileview.css'
import Spotchart from "./statChart";
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from "@/app/components/Bottommenu";




const Mobilepage = () => {

    const [activeKey, setActiveKey] = useState('1');
    const [activePage, setActivePage] = useState(null);


    const [showChart, setShowChart] = useState(true);
    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
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
        <div className="wallet-mobile mobilebg wallet-overwive">
            <div className="pagecontent gridpagecontent innerpagegrid">
                <div className="backgroundoverlay" id="backgroundoverlay"></div>

                <article className="mx-3  gridtabtopbox">
                    <Container className="sitecontainer walletoverviewbg ">
                        <div className="mbheadingbox">
                            <div className="humberbutton">
                                <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </a>
                            </div>

                            <div className="flex-one-cls flex-grow-1 text-center w-100">
                                <h2 className="heading-title text-center mb-0 flex-1">Wallet</h2>
                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                    <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                </button>
                            </div>

                        </div>
                        <div className="wallet-ph">
                            <div className="innerpagecontent">
                                {/* <div className="overview-drop">
                                    <NavDropdown className="usermenudrop nav-item show dropdown" title={<div className="over-txt">Overview <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="angleicon" /></div>} id="custom-nav-dropdown" onToggle={handleToggle}>
                                        <NavDropdown.Item as={Link} href="/wallet" id="walletlink" ><span className="iconboxbg active"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Wallet</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/spot-wallet" id="spotlink" ><span className="iconboxbg"><Image src="assets/images/spot.svg" alt="icon" width={100} height={100} /></span>Spot</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} href="/saving" id="earnlink" ><span className="iconboxbg"><Image src="assets/images/earn.svg" alt="icon" width={100} height={100} /></span>Earn</NavDropdown.Item>
                                    </NavDropdown>
                                </div> */}
                                <div className="d-flex  gap-3 justify-content-between mb-3 wallet-ph-div">
                                    <div className="wallet-nav-btn wallet-over-main w-100">
                                        <div className="wallet-nav-img">
                                            <Image className="pt-1" src="assets/images/wallet-frame-one.svg" style={{ filter: 'brightness(0) invert(1)' }} alt="icon" width={50} height={100} /></div>
                                        <p className="wallet-head">Overview</p>
                                    </div>
                                    <div className="wallet-nav-btn justify-content-between w-100">
                                        <div className="d-flex align-items-center gap-2">
                                            <Image className="wallet-nav-img" src="assets/images/wallet-frame-two.svg" alt="icon" width={100} height={100} />
                                            <p className="wallet-head">Funding</p>
                                        </div>
                                        <Image className="wallet-arrow-img" src="assets/images/Arrow-nav.svg" alt="icon" width={100} height={100} />
                                    </div>
                                </div>
                                <div className="d-flex  gap-3 justify-content-between wallet-ph-div">

                                    <div className="wallet-nav-btn justify-content-between w-100">
                                        <div className="d-flex align-items-center gap-2">
                                            <Image className="wallet-nav-img" src="assets/images/wallet-frame-three.svg" alt="icon" width={100} height={100} />
                                            <p className="wallet-head">Spot</p>
                                        </div>
                                        <Image className="wallet-arrow-img" src="assets/images/Arrow-nav.svg" alt="icon" width={100} height={100} />
                                    </div>
                                    <div className="wallet-nav-btn justify-content-between w-100">
                                        <div className="d-flex align-items-center gap-2">
                                            <Image className="wallet-nav-img" src="assets/images/wallet-frame-four.svg" alt="icon" width={100} height={100} />
                                            <p className="wallet-head">Earn</p>
                                        </div>
                                        <Image className="wallet-arrow-img" src="assets/images/Arrow-nav.svg" alt="icon" width={100} height={100} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="mb-1">Available Balance</p>
                                    <h3 className="subhead">$0.00</h3>
                                </div>
                                <div className="mobile-icon-bg">
                                    <FontAwesomeIcon icon={faEye} />
                                </div>
                            </div>
                            <div>
                                <div className="balancedirectbox mb-3 balancedirectbox-mobile">
                                    <div className="panelcontentbox mb-3">
                                        <div className="contentbox table-content d-flex align-items-start gap-2">
                                            <div>

                                                <Image
                                                    src="assets/images/deposit1.svg"
                                                    alt="icon"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <p className="tt-sub-text mb-0 text-start">Total Deposit</p>
                                                <h4 className="text-start">$2.365896</h4>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="panelcontentbox">
                                        <div className="contentbox table-content d-flex align-items-start gap-2">
                                            <div>

                                                <Image
                                                    src="assets/images/withdraw1.svg"
                                                    alt="icon"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="w-100">
                                                <p className="tt-sub-text mb-0 text-start w-100">Total Withdraw</p>
                                                <h4 className="text-start">$2.365896</h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="panelcontentbox panelcontentbox-wallet">
                                    <h4 className="subhead ">Balance Chart</h4>
                                    <Spotchart />
                                </div>
                            </div>

                            <div className="flexbox mt-3 wallet-search-move">
                                <div className="panelcontentbox wllettable pt-2 p-0">
                                    <div className="">
                                        <h2 className="heading-box pt-0 ps-2 border-0 mt-2">Wallet Balance</h2>
                                        <Form className="siteformbg">
                                            <div className="wallet-tbl">
                                                <Form.Group className="form-group mo-view wallet-search-main">
                                                    <InputGroup className="supportsearch">
                                                        <div className="input-group-append">
                                                            <InputGroup.Text><FontAwesomeIcon icon={faSearch} id='search_refurl' /></InputGroup.Text>
                                                        </div>
                                                        <div className="expand-input">
                                                            <Form.Control type="text" placeholder="Search" id="search-url" />
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                            </div>
                                        </Form>
                                    </div>
                                    <SimpleBar className="sitescroll">
                                        <Tab.Container id="left-tabs-example" defaultActiveKey="coin">
                                            <div className="innerpagetab historytab">
                                                <Nav variant="pills" className="tabbanner mb-1">
                                                    <Nav.Item> <Nav.Link eventKey="coin">Coin View</Nav.Link></Nav.Item>
                                                    <Nav.Item><Nav.Link eventKey="account">Account View</Nav.Link></Nav.Item>
                                                </Nav>
                                            </div>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="coin">
                                                    <div className="market-box mobile-table mt-4">
                                                        <div className="flex-market market-head-dash">
                                                            <div className="d-flex align-items-center">
                                                                <Image src="assets/images/color/btc.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                                                <div>
                                                                    <span className="tt-main">BTC/ETH </span>
                                                                    <p className="tt-sub-text mb-0">BTC</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="flex-market mt-2">
                                                            <p className="tt-sub-text">Balance</p>
                                                            <p className="tt-main-text">2562.365289</p>
                                                        </div>
                                                        <div className="flex-market">
                                                            <p className="tt-sub-text">Free Balance</p>
                                                            <p className="t-green">2.20% <FontAwesomeIcon icon={faArrowUp} /> </p>
                                                        </div>
                                                        <div className="flex-market">
                                                            <p className="tt-sub-text">Locked Balance</p>
                                                            <p className="tt-main-text">2562.365289</p>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="account" className="account-drop account-table">
                                                    <div className="market-box mobile-table mt-4">
                                                        <div className="flex-market market-head-dash">
                                                            <div className="d-flex align-items-center">
                                                                <Image src="/assets/images/spoticon-new.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                                                <div>
                                                                    <span className="tt-main">Spot </span>
                                                                </div>
                                                            </div>
                                                            <Dropdown className="account-drop">
                                                                <Dropdown.Toggle id="dropdown-icon-toggle">
                                                                    <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="fixed-dropdown-menu">
                                                                    <Dropdown.Item href="/deposit">Deposit</Dropdown.Item>
                                                                    <Dropdown.Item href="/trade">Trade</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                        </div>
                                                        <div className="flex-market mt-2">
                                                            <p className="tt-sub-text">Amount</p>
                                                            <p className="tt-main-text">2562.365289</p>
                                                        </div>
                                                        <div className="flex-market">
                                                            <p className="tt-sub-text mb-1">Ratio</p>
                                                            <p className="tt-main-text">2562.365289</p>

                                                        </div>

                                                    </div>
                                                    <div className="market-box mobile-table mt-4">
                                                        <div className="flex-market market-head-dash">
                                                            <div className="d-flex align-items-center">
                                                                <Image src="/assets/images/savings-new.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                                                <div>
                                                                    <span className="tt-main">Earn </span>
                                                                </div>
                                                            </div>
                                                            <Dropdown className="account-drop">
                                                                <Dropdown.Toggle id="dropdown-icon-toggle">
                                                                    <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="fixed-dropdown-menu">
                                                                    <Dropdown.Item href="/deposit">Deposit</Dropdown.Item>
                                                                    <Dropdown.Item href="/trade">Trade</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>

                                                        </div>
                                                        <div className="flex-market mt-2">
                                                            <p className="tt-sub-text">Amount</p>
                                                            <p className="tt-main-text">2562.365289</p>
                                                        </div>
                                                        <div className="flex-market">
                                                            <p className="tt-sub-text mb-1">Ratio</p>
                                                            <p className="tt-main-text">2562.365289</p>

                                                        </div>

                                                    </div>
                                                    <div className="market-box mobile-table mt-4">
                                                        <div className="flex-market market-head-dash">
                                                            <div className="d-flex align-items-center">
                                                                <Image src="/assets/images/funding-wallet-new.svg" width={25} height={25} alt="coin" className="coinlisticon" />
                                                                <div>
                                                                    <span className="tt-main">Funding </span>
                                                                </div>
                                                            </div>
                                                            <Dropdown className="account-drop">
                                                                <Dropdown.Toggle id="dropdown-icon-toggle">
                                                                    <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="fixed-dropdown-menu">
                                                                    <Dropdown.Item href="/deposit">Deposit</Dropdown.Item>
                                                                    <Dropdown.Item href="/trade">Trade</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className="flex-market mt-2">
                                                            <p className="tt-sub-text">Amount</p>
                                                            <p className="tt-main-text">2562.365289</p>
                                                        </div>
                                                        <div className="flex-market">
                                                            <p className="tt-sub-text mb-1">Ratio</p>
                                                            <p className="tt-main-text">2562.365289</p>

                                                        </div>

                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </div>

                            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal wltmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        BTC
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="px-1">
                                    <Table className="sitetable mb-0" id="table1">
                                        <tbody className="mb-table">
                                            <tr>
                                                <td>
                                                    Coin Price
                                                </td>
                                                <td>
                                                    $0.00254789
                                                    <br />
                                                    <span className="t-gray">$0.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Today's PnL
                                                </td>
                                                <td>
                                                    0.00
                                                    <br />
                                                    <span className="t-gray">$0.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Spot
                                                </td>
                                                <td>
                                                    *****
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Earn
                                                </td>
                                                <td>
                                                    *****
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Modal.Body>
                                <Modal.Footer className="wallet-modal">
                                    <div className="d-flex walbtn-mod">
                                        <Link className="sitebtn wal-btn btn-sm" href="/deposit">Deposit</Link>
                                        <Link className="sitebtn wal-btn btn-sm" href="/withdraw">Withdraw</Link>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Container>
                </article>
                <MobileFooterNav />

            </div>
        </div>
    );
};


export default Mobilepage;