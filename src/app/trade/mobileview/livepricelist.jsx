"use client"
import React, { useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Image, Table, Nav, Tab, NavDropdown, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faL, faSortDown, faArrowUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const page = () => {

    const [showLiveTable, setShowLiveTable] = useState(false);

    const [showDropdown, setShowDropdown] = useState(false);

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);

    const livehandeClick = () => {
        setShowLiveTable(prev => !prev);
        // setShowLiveTable(false);
    }

    const toggleDropdown = (isOpen) => {
        setShowDropdown(isOpen);
    };

    const handleItemClick = (e) => {
        e.stopPropagation(); // Prevents dropdown from closing on inside clicks
    };

    const closeTab = () => {
        setShowDropdown(false); // Explicitly close the dropdown
        console.log('Dropdown closed');
    };


    return (
        <div className="livepricelist mobilebg">
            <div className='tradelive-pricelist'>
                <div>
                    <div className='d-flex justify-content-start align-items-center gap-1'>
                        <div>
                            <button className='bg-none border-0 px-0' onClick={livehandeClick}>
                                <Image src="./assets/images/live-leftoggle-icon.svg" className='live-leftoggle-icon' alt='live-leftoggle-icon'></Image>
                            </button>
                        </div>
                        <div>
                            <button onClick={setShowModal1} className='d-flex justify-content-start align-items-center gap-1 bg-none border-0 px-0'>
                                <Image src="./assets/images/color/btc.svg"></Image>
                                <div className='d-flex flex-column align-items-start'>
                                    <span className='fw-semibold'>BTC/USDT <FontAwesomeIcon icon={faSortDown} className='mb-1' /></span>
                                    <span className='t-green'>12.25% <FontAwesomeIcon icon={faArrowUp} className='' /></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <button
                            className='bg-none border-0'
                            data-bs-toggle="collapse"
                            href="#livepriceacco"
                            data-bs-parent="#accordion"
                            aria-expanded="false"
                        >
                            <Image src="./assets/images/live-toggle-icon.svg"></Image>
                        </button>
                    </div>
                </div>
                <div className={showLiveTable ? "d-block" : "d-none"}>
                    <div>
                        <SimpleBar className="table-responsive sitescroll">
                            <Table className="live-pricetable sitetable table-responsive-stack mb-0" id="table1">
                                <tbody>
                                    <tr>
                                        <td className="text-start">
                                            <div className="d-flex">
                                                <span className="fs-6 fw-semibold t-green">$0.236589</span>
                                            </div>
                                        </td>
                                        <td className="text-start liveprice-td">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="">24H High</span>
                                                <span className="">0.236589</span>
                                            </div>

                                        </td>
                                        <td className="text-start liveprice-td">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="">24H Low</span>
                                                <span className="">0.236589</span>
                                            </div>

                                        </td>
                                        <td className="text-start liveprice-td">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="">24H Volume (BTC)</span>
                                                <span className="">0.236589</span>
                                            </div>
                                        </td>
                                        <td className="text-start liveprice-td">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="">24H Amount (USDT)</span>
                                                <span className="">0.236589</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                        </SimpleBar>
                    </div>
                </div>
            </div>


            <Modal
                show={showModal1}
                onHide={handleClose1}
                className="modalbgt nummodal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Market List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='markets-modal-mb'>
                    <Tab.Container defaultActiveKey="market-list">
                        <div className="innerpagetab historytab market-list-md-tab">
                            <Nav variant="pills" className="tabbanner" id="marketpair_tab">
                                <Nav.Item><Nav.Link eventKey="market-list">Market List</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="fav-list">Favorites List</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content id="market_table1"> 
                            <Tab.Pane eventKey="market-list">
                                <div className="filtersearch px-3">
                                    <Form className="siteformbg">
                                        <Form.Group className="form-group mb-2">
                                            <Form.Control placeholder="Seacrh" id='searchtextbox' />
                                        </Form.Group >
                                    </Form>
                                </div>
                                <SimpleBar className="table-responsive">
                                    <Table className="market-list-tablemb sitetable table-responsive-stack mb-0" id='table6'>
                                        <tbody>
                                            <tr className='activerow'>
                                                <td>
                                                    <div className='d-flex align-items-center fw-semibold'>
                                                        <Image src="../assets/images/color/btc.svg" width={27} height={27} alt="coin" className="coinlisticon" />BTC/USDT
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">Last Price</span>
                                                        <span className="t-green">0.2465952</span>
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h change</span>
                                                        <span className="">+12.15%</span>
                                                    </div>

                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h Volume</span>
                                                        <span className="">0.00215455146</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='activerow'>
                                                <td>
                                                    <div className='d-flex align-items-center fw-semibold'>
                                                        <Image src="../assets/images/color/eth.svg" width={27} height={27} alt="coin" className="coinlisticon" />ETH/USDT
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">Last Price</span>
                                                        <span className="t-green">0.2465952</span>
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h change</span>
                                                        <span className="">+12.15%</span>
                                                    </div>

                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h Volume</span>
                                                        <span className="">0.00215455146</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='activerow'>
                                                <td>
                                                    <div className='d-flex align-items-center fw-semibold'>
                                                        <Image src="../assets/images/color/trx.svg" width={27} height={27} alt="coin" className="coinlisticon" />TRX/USDT
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">Last Price</span>
                                                        <span className="t-green">0.2465952</span>
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h change</span>
                                                        <span className="">+12.15%</span>
                                                    </div>

                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h Volume</span>
                                                        <span className="">0.00215455146</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='activerow'>
                                                <td>
                                                    <div className='d-flex align-items-center fw-semibold'>
                                                        <Image src="../assets/images/color/bnb.svg" width={27} height={27} alt="coin" className="coinlisticon" />BNB/USDT
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">Last Price</span>
                                                        <span className="t-green">0.2465952</span>
                                                    </div>
                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h change</span>
                                                        <span className="">+12.15%</span>
                                                    </div>

                                                </td>
                                                <td className="text-start liveprice-td">
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="">24h Volume</span>
                                                        <span className="">0.00215455146</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </SimpleBar>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fav-list">

                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </Modal.Body>
            </Modal>
        </div >
    )
}

export default page;