"use client"
import React from "react";
import Link from "next/link";
import { Container, Image, Table, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from "@/app/components/Bottommenu";

const Desktoppage = () => {

    const { openMenu } = useSideMenu();

    return (
        <>
            <div className="mobilebg">
                <div className="pagecontent gridpagecontent innerpagegrid">
                    <div className="backgroundoverlay" id="backgroundoverlay"></div>

                    <section className="pt-0 mx-3 mobilebg">
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
                            </div>
                        </Container>
                    </section>

                </div>
            </div>
            <MobileFooterNav />
        </>
    )
}

export default Desktoppage