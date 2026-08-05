"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
    Container,
    Image,
    Table,
    Tab,
    Nav,
    Form
} from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import Mobilehomefooter from "@/app/components/Mobilehomefooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTheme } from "@/app/context/ThemeContext";

const Mobilepage = () => {

    const { openMenu } = useSideMenu();

    const [isExpanded, setIsExpanded] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    const { isNightMode } = useTheme();

    return (

        <>
            <div className="mobilebg homepagebg">

                <Container>
                    <div className="mbheadingbox gap-2">
                        <div className="humberbutton">
                            <a href="#" type="button" className="backbtn" id="backbtn" >
                                <Image src="assets/images/globe.svg" className='menu-bar' />
                            </a>
                        </div>

                        <div className="search-container">
                            <div className={`search-box ${isExpanded ? "expanded" : ""}`}>
                                <span className="search-icon">
                                    <Image src="./assets/images/expand-search.svg"></Image>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search for currency or pair"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    onFocus={() => setIsExpanded(true)}
                                    onBlur={() => {
                                        setTimeout(() => {
                                            setIsExpanded(false);
                                        }, 100);
                                    }}
                                    className="search-input"
                                />
                            </div>
                            {isExpanded && (
                                <div className="search-suggestions">
                                    <Table className="sitetable table-responsive-stack mb-0" id="table5">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/btc.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">BTC/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/eth.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">ETH/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/xrp.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">XRP/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/trx.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">TRX/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/sol.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">SOL/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <span className="d-flex align-items-center">
                                                            <Image
                                                                src="assets/images/color/ton.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="text-dark fw-medium">TON/USDT</span>
                                                        </span>
                                                        <span className="d-flex flex-column">
                                                            <span className="text-dark fw-medium">$102,599.9</span>
                                                            <span className="t-green">+1.51%</span>
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>
                </Container>

                {/* Home Banner Section */}

                <section className="homebannerbg">
                    <Container>
                        <div className="home-mobile">
                            <h1 className="heading-title">
                                Trade Crypto the <br /> Smarter Way with{" "}
                                <span>BITnine</span>
                            </h1>
                            <button className="btn btn-sm home-mob-btn">Get Started</button>
                        </div>
                    </Container>
                </section>
                <section className="homebannerbg py-0">
                    <Container className="px-0">
                        <div className="d-flex justify-content-start align-items-center gap-2 ps-3">
                            <Image
                                src="./assets/images/speaker-icon.svg"
                                height={20}
                                width={20}
                            ></Image>
                            <p className="more-pr m-0">
                                Supercharge Your Trades, Get Up to $1,000 in Instant Bonus!
                            </p>
                        </div>
                    </Container>
                </section>


                <section className="homebannerbg py-2">
                    <Container>
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={'auto'}
                            spaceBetween={16}
                            centeredSlides={false}
                            pagination={{
                                clickable: true,
                                el: '.swiper-pagination-custom',
                            }}
                            className="home-banner-swiper hm-banner-cards"
                        >

                            <SwiperSlide>
                                <div className="d-flex justify-content-center">
                                    {/* English */}
                                    {/* {isNightMode ? (
                                        <Image src="./assets/images/hm-banner-dark-card1.png" height={100} width={100}></Image>
                                    ) : (
                                        <Image src="./assets/images/hm-banner-card1.png" height={100} width={100}></Image>
                                    )} */}

                                    {/* Chinese */}
                                    {isNightMode ? (
                                        <Image src="./assets/images/hm-banner-dark-ch-card1.png" height={100} width={100}></Image>
                                    ) : (
                                        <Image src="./assets/images/hm-banner-ch-card1.png" height={100} width={100}></Image>
                                    )}

                                    {/* {isNightMode ? (
                                        <Image src="./assets/images/hm-banner-dark-jp-card1.png" height={100} width={100}></Image>
                                    ) : (
                                        <Image src="./assets/images/hm-banner-jp-card1.png" height={100} width={100}></Image>
                                    )} */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* English */}
                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-card2.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-card2.png" height={100} width={100}></Image>
                                )} */}

                                {/* Chinese */}
                                {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-ch-card2.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-ch-card2.png" height={100} width={100}></Image>
                                )}

                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-jp-card2.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-jp-card2.png" height={100} width={100}></Image>
                                )} */}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* English */}
                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-card3.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-card3.png" height={100} width={100}></Image>
                                )} */}

                                {/* Chinese */}
                                {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-ch-card3.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-ch-card3.png" height={100} width={100}></Image>
                                )}

                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-jp-card3.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-jp-card3.png" height={100} width={100}></Image>
                                )} */}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/* English */}
                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-card4.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-card4.png" height={100} width={100}></Image>
                                )} */}

                                {/* Chinese */}
                                {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-ch-card4.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-ch-card4.png" height={100} width={100}></Image>
                                )}

                                {/* {isNightMode ? (
                                    <Image src="./assets/images/hm-banner-dark-jp-card4.png" height={100} width={100}></Image>
                                ) : (
                                    <Image src="./assets/images/hm-banner-jp-card4.png" height={100} width={100}></Image>
                                )} */}
                            </SwiperSlide>

                        </Swiper>

                        <div className="swiper-pagination-custom"></div>
                    </Container>
                </section>
                <section className="markettablebg markettable-mob-bg" id="marketslist">
                    <Container>
                        <h2 className="heading-title pb-2">
                            Find Your Next Winning Trade
                        </h2>
                        <div className="marketstab-mbtabs-bg">
                            <Tab.Container
                                id="left-tabs-example"
                                defaultActiveKey="hotspot"
                            >
                                <div className="innerpagetab marketsmmtab">
                                    <Nav variant="pills" className=" mb-1">
                                        <Nav.Item>
                                            <Nav.Link eventKey="hotspot">Hot Spot</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="topgainer">Top Gainer</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="toplooser">Top Looser</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="newlisting">New Listing</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="hotspot">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack mb-0" id="table1">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/btc.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">BTC/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/eth.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">ETH/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/xrp.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">XRP/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/trx.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TRX/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/sol.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">SOL/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/ton.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TON/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="topgainer">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack mb-0" id="table2">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/btc.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">BTC/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/eth.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">ETH/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/xrp.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">XRP/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/trx.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TRX/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/sol.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">SOL/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/ton.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TON/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="toplooser">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack mb-0" id="table3">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/btc.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">BTC/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/eth.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">ETH/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/xrp.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">XRP/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/trx.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TRX/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/sol.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">SOL/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/ton.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TON/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="newlisting">
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="sitetable table-responsive-stack mb-0" id="table4">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/btc.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">BTC/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/eth.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">ETH/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/xrp.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">XRP/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/trx.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TRX/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/sol.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">SOL/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <span className="d-flex align-items-center">
                                                                    <Image
                                                                        src="assets/images/color/ton.svg"
                                                                        width={35}
                                                                        height={35}
                                                                        alt="btc"
                                                                        className="coinicon"
                                                                    />{" "}
                                                                    <span className="text-dark fw-medium">TON/USDT</span>
                                                                </span>
                                                                <span className="d-flex flex-column">
                                                                    <span className="text-dark fw-medium">$102,599.9</span>
                                                                    <span className="t-green">+1.51%</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Container>
                </section>

                <section className="howitbg trading-steps-mob">
                    <Container>
                        <h2 className="heading-title">
                            Start Trading in Just a Few Steps
                        </h2>
                        <div className="d-flex flex-column row-gap-2">
                            <div className="howitbg-grid-card1">
                                <div className="d-flex align-items-center howitbg-grid-cards-align">
                                    <span className="howitbg-grid-span">1</span>
                                    <div className="howitbg-grid-line"></div>
                                </div>
                                <div className="d-flex flex-column row-gap-1">
                                    <h4>Create Your Account</h4>
                                    <p>
                                        Sign up quickly and secure your <br />
                                        account with 2FA.
                                    </p>
                                </div>
                            </div>
                            <div className="howitbg-grid-card2">
                                <div className="d-flex align-items-center howitbg-grid-cards-align">
                                    <span className="howitbg-grid-span">2</span>
                                    <div className="howitbg-grid-line"></div>
                                </div>
                                <div className="d-flex flex-column row-gap-1">
                                    <h4>Deposit & Manage Wallets</h4>
                                    <p>
                                        Access multi-chain wallets for <br />
                                        major cryptos across ERC20, <br />
                                        BEP20, and TRC20.
                                    </p>
                                </div>
                            </div>
                            <div className="howitbg-grid-card3">
                                <div className="d-flex align-items-center howitbg-grid-cards-align">
                                    <span className="howitbg-grid-span">3</span>
                                    <div className="howitbg-grid-line"></div>
                                </div>
                                <div className="d-flex flex-column row-gap-1">
                                    <h4>Trade Instantly</h4>
                                    <p>
                                        Buy and sell spot pairs with real-
                                        <br />
                                        time liquidity.
                                    </p>
                                </div>
                            </div>
                            <div className="howitbg-grid-card4">
                                <div className="d-flex align-items-center howitbg-grid-cards-align">
                                    <span className="howitbg-grid-span">4</span>
                                </div>
                                <div className="d-flex flex-column row-gap-1">
                                    <h4>Refer & Get Rewards</h4>
                                    <p>
                                        Invite friends and earn <br /> commissions through referrals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="featuresbg" id="features">
                    <div className="features-mob-cont">
                        <Container>
                            <h2 className="heading-title">
                                Powerful Features Built For Every Trader
                            </h2>

                            <div>

                                <Swiper
                                    modules={[Pagination]}
                                    slidesPerView={'auto'}
                                    spaceBetween={16}
                                    centeredSlides={false}
                                    pagination={{
                                        clickable: true,
                                        el: '.swiper-pagination-custom2',
                                    }}
                                    className="home-banner-swiper"
                                >

                                    <SwiperSlide>
                                        <div className="features-mob-card">
                                            <h5 className="sub-head m-0">Multi-Chain Crypto Wallets</h5>
                                            <p className="m-0">Manage 10+ major cryptocurrencies with support for ERC20, BEP20, and TRC20 networks.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="features-mob-card">
                                            <h5 className="sub-head m-0">Balance Convert (Swap)</h5>
                                            <p className="m-0">Swap assets quickly with zero complexity — best for beginners and pro traders.</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="features-mob-card">
                                            <h5 className="sub-head m-0">Multi-Chain Crypto Wallets</h5>
                                            <p className="m-0">Invite users and earn recurring commissions on every
                                                trade.</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                                <div className="swiper-pagination-custom2"></div>
                            </div>
                        </Container>
                    </div>
                </section>

                <MobileFooterNav />
            </div>
            <Mobilehomefooter />
        </>
    );
}

export default Mobilepage;
