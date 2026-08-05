"use client"
import React, { useEffect, useState } from 'react'
import { Container, Form, Image, Alert, InputGroup } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';


const Mobilepage = () => {

    const [activeKey, setActiveKey] = useState('1');

    const { openMenu } = useSideMenu();

    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid mx-3">
            <article className="">
                <Container className="sitecontainer walletpagebg depositbg">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>
                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Withdraw</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div className="mt-0 panelcontentbox">
                            <Form className="deposit-form siteformbg">
                                <Form.Group className="form-group">
                                    <Form.Label>Select Crypto </Form.Label>
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

                                <Form.Group className="form-group">
                                    <Form.Label>Select Network</Form.Label>
                                    <Form.Select id='network'>
                                        <option></option>
                                        <option>BTC</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="form-group walletaddres-input">
                                    <Form.Label>Wallet Address</Form.Label>
                                    <InputGroup>
                                        <Form.Control defaultValue="SDAFYTEUWYR645854" id='walletaddres' />
                                        <InputGroup.Text id="copyaddress" className="">
                                            <FontAwesomeIcon icon={faCopy} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Withdraw Amount</Form.Label>
                                    <InputGroup>
                                        <Form.Control type='text' />
                                    </InputGroup>
                                </Form.Group>
                            </Form>

                            <div className='d-flex align-items-center justify-content-between gap-3 mt-4'>
                                <span className='with-amt-select'>25</span>
                                <span className='with-amt-select'>50</span>
                                <span className='with-amt-select'>75</span>
                                <span className='with-amt-select'>100</span>
                            </div>

                            <button className='btn btn-sm sitebtn mt-3'>Submit</button>


                            <div className='d-flex flex-column row-gap-2 mt-3 with-details-span'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span className="text-black">Minimum Deposit Limit</span>
                                    <span className="t-gray fw-semibold">0.00060000 BTC</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span className="text-black">Deposit Fee</span>
                                    <span className="t-gray fw-semibold">0.00050000 BTC</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span className="text-black">Total Withdraw</span>
                                    <span className="t-gray fw-semibold">0.00050000 BTC</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <span className="text-black">Withdraw Fee</span>
                                    <span className="t-gray fw-semibold">0.00050000 BTC</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </article>
            <MobileFooterNav />
        </div>
    );
}

export default Mobilepage
