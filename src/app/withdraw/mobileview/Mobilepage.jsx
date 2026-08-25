"use client"
import React, { useEffect, useState } from 'react'
import { Container, Form, Image, Alert, InputGroup, Modal, Button } from 'react-bootstrap';
import Link from 'next/link';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCopy } from '@fortawesome/free-solid-svg-icons';
import ResponsiveTable from '../../components/ResponsiveTable';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { Dropdown } from "react-bootstrap";
import { faEye, faChevronDown, faEllipsisVertical, faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";



const Mobilepage = () => {
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

    const { openMenu } = useSideMenu();
    const [showWallet, setShowWallet] = useState(false);
    const [showAccounts, setShowAccounts] = useState(false);

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

                                <div>
                                    <Form.Group className="form-group">
                                        <div className=' d-flex align-items-center justify-content-between'>
                                            <Form.Label >Wallet Addres</Form.Label>

                                            <Button onClick={handleShow4} className="sitebtn add-wht-btn btn-sm d-flex align-items-center w-auto justify-content-center ">
                                                <Image
                                                    src="/assets/images/wh-plus.svg"
                                                    alt="Logo"
                                                    className="send-img"
                                                />
                                                Add whitelist
                                            </Button>
                                        </div>
                                        <InputGroup className='withdraw-addr'>
                                            <Form.Control onClick={() => setShowAccounts(!showAccounts)} className='form-control  position-relative' id='walletaddres' />


                                            {showAccounts && (
                                                <div className="mt-2 mx-height acc-main-box">
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
                                                </div>
                                            )}
                                        </InputGroup>
                                    </Form.Group>
                                </div>

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
        </div>
    );
}

export default Mobilepage
