"use client"
import React, { useEffect, useState } from 'react'
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import { Container, Form, Image, Table, InputGroup, Button, Modal } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';

const Desktoppage = () => {

    useEffect(() => {
        // Show the modal when the page loads
        setShowModal2(true);
    }, []);

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const [activeKey, setActiveKey] = useState('1');
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer walletpagebg depositbg">
                    <div className="innerpagecontent">
                        <h2 className="h2 text-start"><Link className='alink' href="/wallet"><span className="pe-2"><FontAwesomeIcon icon={faAngleLeft} /></span></Link> Deposit Crypto</h2>
                    </div>
                    <div className="flexboxtable leftsidetabbg">
                        <div className="mt-0 panelcontentbox">
                            <Form className="siteformbg">
                                <div className="stpsflowbox">
                                    <div className="d-flex stpsfexbox currentstep">
                                        <div><span className="stpiconb">1</span></div>
                                        <div>
                                            <Form.Group className="form-group">
                                                <Form.Label>Select Crypto </Form.Label>
                                                <Form.Select className="form-control" id='currency'>
                                                    <option>USDT</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>TRX</option>
                                                    <option>SOL</option>
                                                    <option>XRP</option>
                                                    <option>ADA</option>
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
                                    <div className="d-flex stpsfexbox addressstep">
                                        <div><span className="stpiconb">3</span></div>
                                        <div>
                                            <Form.Group className="form-group mb-2">
                                                <Form.Label>Wallet Addres</Form.Label>
                                                <InputGroup>
                                                    <Form.Control defaultValue="SDAFYTEUWYR645854" className=' border-0 fnt-bd ps-0 height-auto' id='walletaddres' />
                                                    <InputGroup.Text id="copyaddress" className="cpybtn border-0 height-auto">
                                                        <Link href="#" className="me-3"><Image src="assets/images/copy.svg" alt='icon' width={100} height={100} /></Link>
                                                        <Link href="#qrcode" onClick={handleShow1}><Image src="assets/images/qr.svg" alt='rq' width={100} height={100} /></Link>
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </Form.Group>
                                            <div className="notestitle notesgray d-flex align-items-center lightgraybg">
                                                <p className="pb-0">
                                                    <span className="t-gray">Minimum Deposit Limit</span>
                                                    <span className="t-black">0.00060000 BTC</span>
                                                </p>
                                                <p className="pb-0">
                                                    <span className="t-gray">Deposit Fee</span>
                                                    <span className="t-black">0.00050000 BTC</span>
                                                </p>
                                            </div>
                                            <p className="text-danger alerttxt mt-2 mb-0">
                                                Note : Deposit may take from a few minutes to over 30
                                                minutes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        <div className="trendcoinbox mt-0 panelcontentbox">
                            <h4 className="subhead">How to Deposit</h4>
                            <div className="hwtbg">
                                <h4 className="h4">1. Select your crypto</h4>
                                <p>Choose the cryptocurrency you want to deposit.</p>
                                <h4 className="h4">2. Choose Network</h4>
                                <p>Supports USDT & USDC on ERC20, BEP20 and TRC20 networks.</p>
                                <h4 className="h4">3. Get Your Deposit Address</h4>
                                <p>Copy the deposit address provided or scan the QR code.</p>
                                <h4 className="h4">4. Send From Your Wallet</h4>
                                <p>Open your external wallet/exchange, enter the copied address, and initiate the transfer.</p>
                                <h4 className="h4">5. Wait for Confirmation</h4>
                                <p>Blockchain confirmations may take a few minutes depending on the network traffic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wlltdpstbox">
                        <h2 className="subhead ps-2 pt-2">Recent Deposit History</h2>
                        <div className="panelcontentbox">
                            <Simplebar className="table-responsive sitescroll">
                                <Table className="sitetable" id='table1'>
                                    <thead>
                                        <tr>
                                            <th>Date & Time</th>
                                            <th>Coin</th>
                                            <th>TX Hash</th>
                                            <th>Sender</th>
                                            <th>Receiver</th>
                                            <th>Deposit</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="nodata">
                                            <td colSpan={8} className='text-center'>
                                                <Image src="assets/images/nodata.svg" width={50} height={50} alt="nodata" />
                                                No record found
                                            </td>
                                        </tr>
                                        {/* <!-- <tr>
                        <td>21/11/2025, 05:05:00</td>
                        <td><Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BTC</td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                        <td>FDATRWYTUNDJF8455674</td>
                        <td>2563971</td>
                        <td><Badge bg="success">Confirm</Badge></td> 
                         </tr>
                        <tr>
                          <td>21/11/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />ETH</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>21/11/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/xrp.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />XRP</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>21/11/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />BNB</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>
                        <tr>
                          <td>21/11/2025, 05:05:00</td>
                          <td><Image src="assets/images/color/usd.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />USD</td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td><span className="t-green">FDATRWYTUNDJF8455674</span></td>
                          <td>FDATRWYTUNDJF8455674</td>
                          <td>2563971</td>
                          <td><Badge bg="success">Confirm</Badge></td>
                        </tr>--> */}
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
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className='text-center'>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <h4 className="subhead">Need to verify KYC to proceed with deposit, withdrawal</h4>
                        <Image src="assets/images/kycpopimg.svg" width={50} height={50} alt="coin" id='kyc' className='kycverfyimg' />
                        <Button type="button" className="sitebtn btn-block" id="verify">Verify Now</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Desktoppage
