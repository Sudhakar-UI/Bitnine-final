"use client"
import React, { useState } from "react";
import { Container, Table, Button, Badge, Form, InputGroup, Image, Modal } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import CountdownTimer from '../Countdowntimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import MobileFooterNav from '@/app/components/Bottommenu';
import MobileHeader from "@/app/components/MobileHeader";


const Mobilepage = () => {

    const [showModal1, setShowModal1] = useState(false);
    const handleClose1 = () => setShowModal1(false);

    return (
        <div>
            <div className="pagecontent gridpagecontent innerpagegrid mobilebg mx-2">
                <article className="">
                    <Container className="container sitecontainer bankpage">

                        <MobileHeader title="Convert" /> 

                        <div className="panelcontentbox convertpage mb-3">
                            <Form className="siteformbg" method="post" autoComplete="off">
                                <div className="convertpage-mb d-flex flex-column row-gap-3">

                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Form.Label>From</Form.Label>
                                            <Form.Label>Balance: 1.00000000 BTC</Form.Label>
                                        </div>
                                        <div className="convertpage-mb-input d-flex justify-content-between align-items-center">
                                            <Form.Group>
                                                <InputGroup>
                                                    <Form.Control type="text" placeholder="0.00" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="">
                                                <Form.Select id='currency'>
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

                                    {/* Exchange Arrow Icon */}
                                    <div className="d-flex justify-content-center">
                                        <Image src="./assets/images/swap2.svg" className="convert-mb-icon"></Image>
                                    </div>


                                    <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Form.Label>To</Form.Label>
                                            <Form.Label>Balance: 1.00000000 ETH</Form.Label>
                                        </div>
                                        <div className="convertpage-mb-input d-flex justify-content-between align-items-center">
                                            <Form.Group>
                                                <InputGroup>
                                                    <Form.Control type="text" placeholder="0.00" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="">
                                                <Form.Select id='currency'>
                                                    <option>ETH</option>
                                                    <option>USDT</option>
                                                    <option>BNB</option>
                                                    <option>TRX</option>
                                                    <option>SOL</option>
                                                    <option>XRP</option>
                                                    <option>ADA</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>

                                {/* Exchange Rate & Button */}
                                <div className="d-flex flex-column row-gap-3 mt-3">
                                    <div className="d-flex gap-2 convert-countdown-bg">
                                        <div>
                                            <CountdownTimer minutes={1} id="countdowntimer" />
                                        </div>
                                        <div>
                                            <p className="m-0">Exchange Rate: 1 ETH = 1,842.834552 USDT</p>
                                            <p className="m-0">Refreshing in 30 seconds</p>
                                        </div>
                                    </div>
                                    <a href="#" onClick={setShowModal1} className="btn sitebtn btn-sm" id="convertbtn">Preview Conversion</a>
                                </div>

                            </Form>
                        </div>
                    </Container>
                </article>
                <MobileFooterNav />
            </div>

            <Modal
                show={showModal1}
                onHide={handleClose1}
                className="modalbgt nummodal convert-modal-mb"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Confirm
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column row-gap-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-1">
                                <Image src="./assets/images/color/btc.svg"></Image>
                                <span>10</span>
                            </div>
                            <span>BTC</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faArrowDown} className="ms-2" />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-1">
                                <Image src="./assets/images/color/eth.svg"></Image>
                                <span>10</span>
                            </div>
                            <span>BTC</span>
                        </div>
                    </div>
                    <div className="convert-countdown-bg mt-3">
                        <div>
                            <span>Rate</span>
                            <span>1BTC ≈ ETH</span>
                        </div>
                        <div>
                            <span>Inverse Rate</span>
                            <span>1ETH ≈ BTC</span>
                        </div>
                        <div>
                            <span>Payment Method</span>
                            <span>Spot Wallet</span>
                        </div>
                        <div>
                            <span>Transaction Fees</span>
                            <span>No Fees</span>
                        </div>
                        <div>
                            <span>You will receive</span>
                            <span>ETH</span>
                        </div>

                    </div>
                    <a href="#" className="btn sitebtn btn-sm mt-2" id="convertbtn">Convert</a>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Mobilepage;