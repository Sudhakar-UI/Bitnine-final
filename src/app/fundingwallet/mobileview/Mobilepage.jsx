"use client"
import React, { useState } from "react";
import Link from 'next/link';
import { Modal, Image, Table, Form, Container, Button, InputGroup, OverlayTrigger, Tooltip, } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faSearch, faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';


const Mobilepage = () => {

    const [activeKey, setActiveKey] = useState('1');

    const [showChart, setShowChart] = useState(true);
    const [showModal1, setShowModal1] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);
    const [isOpen, setIsOpen] = useState(false);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);

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
        <div className="wallet-mobile mobilebg wallet-funding">
            <div className="pagecontent gridpagecontent innerpagegrid">
                <article className="gridtabtopbox mx-3">
                    <Container className="sitecontainer walletoverviewbg">
                        <div className="mbheadingbox">
                            <div className="humberbutton">
                                <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </a>
                            </div>

                            <div className="flex-one-cls flex-grow-1 text-center w-100">
                                <h2 className="heading-title text-center mb-0 flex-1">Funding Wallet</h2>
                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                    <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                </button>
                            </div>
                        </div>

                        <div className="wallet-ph mt-3">
                            <div className="innerpagecontent">
                                <div className="d-flex  gap-3 justify-content-between mb-3 wallet-ph-div">
                                    <div className="wallet-nav-btn justify-content-between w-100">
                                        <div className="d-flex align-items-center gap-2">
                                            <Image className="wallet-nav-img" src="assets/images/wallet-frame-one.svg" alt="icon" width={100} height={100} />
                                            <p className="wallet-head">Overview</p>
                                        </div>
                                        <Image className="wallet-arrow-img" src="assets/images/Arrow-nav.svg" alt="icon" width={100} height={100} />
                                    </div>
                                    <div className="wallet-nav-btn justify-content-between w-100 wallet-over-main">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="wallet-nav-img">
                                                <Image src="assets/images/wallet-frame-two.svg" style={{ filter: 'brightness(0) invert(1)' }} alt="icon" width={100} height={100} />
                                            </div>
                                            <p className="wallet-head">Funding</p>
                                        </div>

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
                            <div className="d-flex justify-content-between align-items-start mb-3 border-line">
                                <div>
                                    <p className="mb-1 t-gray">Estimated Balance</p>
                                    <h3 className="">$0.00000</h3>
                                    <p className="mb-0">Today's PnL
                                        <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
                                            <FontAwesomeIcon className="mx-2" icon={faCircleInfo} /></OverlayTrigger>
                                        <span>$ 0.000</span>
                                    </p>
                                </div>
                                <div className="mobile-icon-bg">
                                    <FontAwesomeIcon icon={faEye} />
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
                                                            <Form.Control type="text" className="mt-0" placeholder="Search" id="search-url" />
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="market-box mobile-table mt-1">
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
                                            <p className="tt-sub-text mb-1">Balance</p>
                                            <p className="tt-main-text mb-1">2562.365289</p>
                                        </div>
                                        <div className="flex-market">
                                            <p className="tt-sub-text mb-1">Free Balance</p>
                                            <p className="tt-main-text mb-1">2562.365289</p>

                                        </div>
                                        <div className="flex-market">
                                            <p className="tt-sub-text mb-1">Locked Balance</p>
                                            <p className="tt-main-text mb-1">2562.365289</p>
                                        </div>
                                        <div className="flex-market gap-4">
                                            <Button className="red-btn-main">Deposit</Button>
                                            <Button className="green-btn-main">Withdraw</Button>
                                        </div>
                                        <div className="flex-market gap-4 mt-2">
                                            <Link href="#0" className="blue-btn2" onClick={() => setShowModal1(true)}>Transfer</Link>
                                            <Link href="#0" className="blue-btn1">Convert</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Modal show={showModal1} onHide={handleClose1} className='modalbgt nummodal' aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Transfer
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="px-1">
                                <div className="d-flex flex-column gap-2 transfer-modal siteformbg">
                                    <Form.Group>
                                        <Form.Label>From</Form.Label>
                                        <Form.Select id='currency'>
                                            <option>Sopt</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <div className="d-flex justify-content-center">
                                        <Image src="./assets/images/swap2.svg" className="convert-mb-icon"></Image>
                                    </div>
                                    <Form.Group>
                                        <Form.Label>To</Form.Label>
                                        <Form.Select id='currency'>
                                            <option>Future</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Coin</Form.Label>
                                        <Form.Select id='currency'>
                                            <option>USDT Tether</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Coin</Form.Label>
                                        <InputGroup>
                                            <Form.Control type="text" />
                                        </InputGroup>
                                    </Form.Group>
                                </div>
                                <button className="btn sitebtn mt-3">Transfer</button>
                            </Modal.Body>
                        </Modal>
                    </Container>
                </article>
                <MobileFooterNav />

            </div>
        </div>
    );
};


export default Mobilepage;