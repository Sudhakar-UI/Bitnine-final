
"use client"
import React, { useState, useEffect, useRef } from 'react'
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { Container, Form, Image, Table, InputGroup, Button, Badge, Modal, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faEye, faChevronDown, faEllipsisVertical, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ResponsiveTable from '../../components/ResponsiveTable';
import { Dropdown } from "react-bootstrap";

const Desktoppage = () => {

    useEffect(() => {
        // Show the modal when the page loadsfaAngleLeft
        setShowModal2(true);
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    const handleShow3 = () => setShowModal3(true);
    const handleClose3 = () => setShowModal3(false);
    const handleShow4 = () => setShowModal4(true);
    const handleClose4 = () => setShowModal4(false);


    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const [activeKey, setActiveKey] = useState('1');
    const [showWallet, setShowWallet] = useState(false);
    const [showAccounts, setShowAccounts] = useState(false);
    const dropdownRef = useRef(null);


    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer walletpagebg depositbg">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link href="/wallet" className='alink'><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link>Withdraw Crypto</h2>
                    </div>
                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox">
                            <Form className="siteformbg">
                                <div className="stpsflowbox">
                                    <Button onClick={handleShow4} className="sitebtn btn-sm d-flex align-items-center ms-auto justify-content-center ">
                                        <Image
                                            src="/assets/images/wh-plus.svg"
                                            alt="Logo"
                                            className="send-img"
                                        />
                                        Add whitelist
                                    </Button>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">1</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Crypto </Form.Label>
                                                <Form.Select className="form-control" id='currency'>
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>SOL</option>
                                                    <option>TRX</option>
                                                    <option>LTC</option>
                                                    <option>AVAX</option>
                                                    <option>DOGE</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">2</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Network</Form.Label>
                                                <Form.Select className="form-control" id='network'>
                                                    <option></option>
                                                    <option>BTC</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">3</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <div className=' d-flex align-items-center justify-content-between'>
                                                    <Form.Label >Wallet Addres</Form.Label>

                                                    {/* <span onClick={handleShow2}>Add whitelist</span> */}
                                                </div>
                                                <InputGroup>
                                                    <Form.Control onClick={() => setShowAccounts(!showAccounts)} className='form-control  position-relative' id='walletaddres' />


                                                    {showAccounts && (
                                                        <div className="mt-2  acc-main-box">
                                                            <div className='search-box-x'>
                                                                <Image
                                                                    src="assets/images/search-icon.svg"
                                                                    alt="Logo"
                                                                    className='copy-img'
                                                                />
                                                                <Form.Control
                                                                    placeholder="Search Your Accounts"
                                                                    className=' border-0 p-0'
                                                                />
                                                            </div>
                                                            <div className='mx-height'>
                                                                <div className="acc-box active">
                                                                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                                                        <div className=' d-flex align-items-center  gap-2'>
                                                                            <Image
                                                                                src="/assets/images/user-1.svg"
                                                                                alt="Logo"
                                                                                className="user-img"
                                                                            />
                                                                            <div>
                                                                                <p className="sub-head-acc mb-0">Address 1</p>
                                                                                <small>bc1qdv4...xtpgh</small>
                                                                            </div>
                                                                        </div>
                                                                        <Dropdown align="end">
                                                                            <Dropdown.Toggle
                                                                                as={FontAwesomeIcon}
                                                                                icon={faEllipsisVertical}
                                                                                className="icon-box-x icon-box-long"
                                                                            />

                                                                            <Dropdown.Menu className="wallet-dropdown">

                                                                                <Dropdown.Item
                                                                                    className="menu-item p-3 py-2 d-flex align-items-center justify-content-between"
                                                                                >
                                                                                    <span>Delete</span>
                                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                                </Dropdown.Item>

                                                                                <hr />

                                                                                <Dropdown.Item
                                                                                    className="menu-item p-3 py-2 d-flex align-items-center justify-content-between"
                                                                                    onClick={handleShow3}
                                                                                >
                                                                                    <span>Rename</span>
                                                                                    <FontAwesomeIcon icon={faPen} />
                                                                                </Dropdown.Item>

                                                                            </Dropdown.Menu>
                                                                        </Dropdown>

                                                                    </div>
                                                                </div>
                                                                <div className="acc-box ">
                                                                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                                                        <div className=' d-flex align-items-center  gap-2'>
                                                                            <Image
                                                                                src="/assets/images/user-2.svg"
                                                                                alt="Logo"
                                                                                className="user-img"
                                                                            />
                                                                            <div>
                                                                                <p className="sub-head-acc mb-0">Address 2</p>
                                                                                <small>bc1qdv4...xtpgh</small>
                                                                            </div>
                                                                        </div>
                                                                        <FontAwesomeIcon className='icon-box-x icon-box-long position-relative' icon={faEllipsisVertical} />


                                                                    </div>
                                                                </div>
                                                                <div className="acc-box ">
                                                                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                                                        <div className=' d-flex align-items-center  gap-2'>
                                                                            <Image
                                                                                src="/assets/images/user-2.svg"
                                                                                alt="Logo"
                                                                                className="user-img"
                                                                            />
                                                                            <div>
                                                                                <p className="sub-head-acc mb-0">Address 2</p>
                                                                                <small>bc1qdv4...xtpgh</small>
                                                                            </div>
                                                                        </div>
                                                                        <FontAwesomeIcon className='icon-box-x icon-box-long position-relative' icon={faEllipsisVertical} />


                                                                    </div>
                                                                </div>
                                                                <div className="acc-box ">
                                                                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                                                        <div className=' d-flex align-items-center  gap-2'>
                                                                            <Image
                                                                                src="/assets/images/user-2.svg"
                                                                                alt="Logo"
                                                                                className="user-img"
                                                                            />
                                                                            <div>
                                                                                <p className="sub-head-acc mb-0">Address 2</p>
                                                                                <small>bc1qdv4...xtpgh</small>
                                                                            </div>
                                                                        </div>
                                                                        <FontAwesomeIcon className='icon-box-x icon-box-long position-relative' icon={faEllipsisVertical} />


                                                                    </div>
                                                                </div>
                                                                <div className="acc-box ">
                                                                    <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                                                        <div className=' d-flex align-items-center  gap-2'>
                                                                            <Image
                                                                                src="/assets/images/user-2.svg"
                                                                                alt="Logo"
                                                                                className="user-img"
                                                                            />
                                                                            <div>
                                                                                <p className="sub-head-acc mb-0">Address 2</p>
                                                                                <small>bc1qdv4...xtpgh</small>
                                                                            </div>
                                                                        </div>
                                                                        <Dropdown align="end">
                                                                            <Dropdown.Toggle
                                                                                as={FontAwesomeIcon}
                                                                                icon={faEllipsisVertical}
                                                                                className="icon-box-x icon-box-long"
                                                                            />

                                                                            <Dropdown.Menu className="wallet-dropdown">

                                                                                <Dropdown.Item
                                                                                    className="menu-item p-3 py-2 d-flex align-items-center justify-content-between"
                                                                                >
                                                                                    <span>Delete</span>
                                                                                    <FontAwesomeIcon icon={faTrashCan} />
                                                                                </Dropdown.Item>

                                                                                <hr />

                                                                                <Dropdown.Item
                                                                                    className="menu-item p-3 py-2 d-flex align-items-center justify-content-between"
                                                                                    onClick={handleShow3}
                                                                                >
                                                                                    <span>Rename</span>
                                                                                    <FontAwesomeIcon icon={faPen} />
                                                                                </Dropdown.Item>

                                                                            </Dropdown.Menu>
                                                                        </Dropdown>

                                                                        {/* <FontAwesomeIcon className='icon-box-x icon-box-long position-relative' icon={faEllipsisVertical} /> */}


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="d-flex stpsfexbox">
                                        <div><span className="stpiconb">4</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Withdraw Amount</Form.Label>
                                                <Form.Control id='amount' />
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <div className="stoplimtboxt">
                                                    <div className="link-div">
                                                        <div className="activelimit" id='25'>25%</div>
                                                        <div id='50'>50%</div>
                                                        <div id='75'>75%</div>
                                                        <div id='100'>100%</div>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            <div className="lightgraybg">
                                                <div className="notestitle notesgray d-flex align-items-center">
                                                    <p className="pb-0">
                                                        <span className="t-gray">Min Withdraw</span><span className="t-black">0.00060000
                                                            BTC</span></p>
                                                    <p className="pb-0"><span className="t-gray">Max Withdraw</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                </div>
                                                <div className="notestitle notesgray d-flex align-items-center">
                                                    <p className="pb-0"><span className="t-gray">Total Withdraw</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                    <p className="pb-0"><span className="t-gray">Withdraw Fee</span><span className="t-black">0.00060000
                                                        BTC</span></p>
                                                </div>
                                            </div>
                                            <Form.Group className="form-group m-0 mt-3">
                                                <Button type="submit" className="sitebtn" id="withdrawsubmit">Withdraw</Button>
                                            </Form.Group>

                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="trendcoinbox mt-0 panelcontentbox">
                            <h4 className="subhead">How to Withdraw</h4>
                            <div className="hwtbg">
                                <h4 className="h4">1. Select your crypto</h4>
                                <p>Choose the cryptocurrency you want to withdraw.</p>
                                <h4 className="h4">2. Choose Network</h4>
                                <p>Select the correct blockchain network for the withdrawal.
                                    Supports popular networks like ERC20, BEP20, TRC20, depending on the coin.</p>
                                <h4 className="h4">3. Enter Wallet Address</h4>
                                <p>Enter the recipient's external wallet address.</p>
                                <h4 className="h4">4. Enter Withdrawal Amount</h4>
                                <p>Type the amount you want to withdraw or use quick percent buttons (25%, 50%, 75%, 100%).</p>
                                <h4 className="h4">5. Review and Confirm</h4>
                                <p>Verify withdrawal fee, minimum/maximum limit, and final amount.
                                    Click Withdraw to complete the transaction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wlltdpstbox">
                        <h2 className="subhead ps-2 pt-2">Recent Withdraw History</h2>
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                                <Table className="sitetable" id='table1'>
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Coin</th>
                                            <th>Withdraw Address</th>
                                            <th>Requested Amount</th>
                                            <th>Withdraw Fee</th>
                                            <th>Total Withdraw</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />TRX</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/sol.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />SOL</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/ada.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ADA</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                        <tr>
                                            <td>21/11/2025, 05:05:00</td>
                                            <td><Image src="assets/images/color/doge.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />DOGE</td>
                                            <td>FDATRWYTUNDJF8455674</td>
                                            <td><span className="t-green">256.39874</span></td>
                                            <td>0.5</td>
                                            <td>2563971</td>
                                            <td><Badge bg="success">Confirm</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Simplebar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />
            {/* QRimg */}
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal qrmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        QR Code
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="qrcode text-center">
                        <Image src="assets/images/qrcode.png" width={50} height={50} alt="coin" id='qrcode' />
                        <Button type="button" className="sitebtn" id="download">Download</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal qrmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        Rename
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Address name</Form.Label>
                    <div className='search-box-x'>
                        <Form.Control
                            placeholder="Search Address"
                            className=' border-0 p-0'
                        />
                    </div>
                    <Button type="button" className="sitebtn" id="download">Confirm</Button>

                </Modal.Body>
            </Modal>
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal qrmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        Add Whitelist
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='theme-pop'>
                    <Form.Group className="form-group">

                        <div>
                            <Form.Label>Select Crypto </Form.Label>
                            <Form.Select className="form-control" id='currency'>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>SOL</option>
                                <option>TRX</option>
                                <option>LTC</option>
                                <option>AVAX</option>
                                <option>DOGE</option>
                            </Form.Select>
                        </div>
                        <div className='my-2'>
                            <Form.Label >Select Network  </Form.Label>
                            <Form.Select className="form-control" id='currency'>
                                <option>BTC</option>
                                <option>ETH</option>
                                <option>SOL</option>
                                <option>TRX</option>
                                <option>LTC</option>
                                <option>AVAX</option>
                                <option>DOGE</option>
                            </Form.Select>
                        </div>
                        <div>
                            <Form.Label >Wallet Address</Form.Label>
                            <Form.Control id='amount' />
                        </div>
                        <div className='mt-2'>
                            <Form.Label >Account Name</Form.Label>
                            <Form.Control id='amount' />
                        </div>

                    </Form.Group>

                    <Button type="button" className="sitebtn" id="download">Confirm</Button>

                </Modal.Body>
            </Modal>
            {/* <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal qrmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                        Add whitelist
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='search-box-x'>
                        <Image
                            src="assets/images/search-icon.svg"
                            alt="Logo"
                            className='copy-img'
                        />
                        <Form.Control
                            placeholder="Search Your Accounts"
                            className=' border-0 p-0'
                        />
                    </div>
                    <div className='mt-2 mx-height'>
                        <div className='acc-box active'>
                            <div className=' d-flex align-items-center w-100 gap-2'>
                                <Image
                                    src="assets/images/user-1.svg"
                                    alt="Logo"
                                    className='user-img'
                                />
                                <div >
                                    <span className="sub-head">Account 1</span>
                                    <div className="position-relative" ref={dropdownRef}>
                                        <div className="copy-box d-flex align-items-center gap-2">
                                            <FontAwesomeIcon
                                                className="icon-box-x"
                                                icon={faChevronDown}
                                                onClick={() => setShowWallet(!showWallet)}
                                            />


                                        </div>

                                        {showWallet && (
                                            <div className="wallet-dropdown">
                                                <div className="wallet-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Image src="/assets/images/color/btc.svg" className="wall-img" alt="" />
                                                        <span>Bitcoin</span>
                                                    </div>
                                                    <small>bc1qdv4...xtpgh</small>
                                                </div>

                                                <div className="wallet-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Image src="/assets/images/color/sol.svg" className="wall-img" alt="" />
                                                        <span>Solana</span>
                                                    </div>
                                                    <small>GDuM7Qa...fGXRy</small>
                                                </div>

                                                <div className="wallet-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <Image src="/assets/images/color/trx.svg" className="wall-img" alt="" />
                                                        <span>Tron</span>
                                                    </div>
                                                    <small>TW5YCJw...cxe4S</small>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex align-items-center gap-2'>
                                <p className='mb-0'>$0.00</p>
                                <FontAwesomeIcon className='icon-box-x icon-box-long' icon={faEllipsisVertical} />
                            </div>


                        </div>
                        <div className='acc-box'>
                            <div className=' d-flex align-items-center gap-2'>
                                <Image
                                    src="assets/images/user-2.svg"
                                    alt="Logo"
                                    className='user-img'
                                />
                                <div className="sub-head">
                                    Account 2
                                </div>
                            </div>
                            <p className='mb-0'>$0.00</p>

                        </div>
                        <Button className="sitebtn d-flex align-items-center justify-content-center mt-3">
                            <Image
                                src="assets/images/wh-plus.svg"
                                alt="Logo"
                                className='send-img'
                            />
                            Add Token</Button>

                    </div>
                </Modal.Body>
            </Modal> */}
        </div>
    );
}

export default Desktoppage