"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
    Container,
    Row,
    Col,
    Image,
    Table,
    Tabs,
    Tab,
    Nav,
    Button,
    Accordion,
    Form,
} from "react-bootstrap";
import Homeheader from "../../components/Homeheader";
import Homefooter from "../../components/Homefooter";
import "react-multi-carousel/lib/styles.css";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ResponsiveTable from "../../../app/components/ResponsiveTable";
import { useTheme } from "@/app/context/ThemeContext";


const Desktoppage = () => {
    const scrollRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollRef.current;
            if (!container) return;

            const scrollLeft = container.scrollLeft;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const percentScrolled = (scrollLeft / maxScrollLeft) * 100;

            const progressBar = document.getElementById("scroll-progress-fill");
            if (progressBar) {
                progressBar.style.width = `${percentScrolled}%`;
            }
        };

        const timeout = setTimeout(() => {
            const container = scrollRef.current;
            if (container) {
                container.addEventListener("scroll", handleScroll);
            }
        }, 100); // small delay

        return () => {
            const container = scrollRef.current;
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        document.body.classList.remove("loginbanner");
        AOS.init();
    });

    const [activeKey, setActiveKey] = useState("1");

    const [activeTab, setActiveTab] = useState(0);

    const { isNightMode } = useTheme();

    return (
        <div className="homepagebg">

            <Homeheader />

            {/* Home Banner Section */}

            <section className="homebannerbg">
                <Container className="sitebannercontent">
                    <Row className="align-items-center row-gap-3">
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="heading-title">
                                Trade Crypto the <br /> Smarter Way with <br />{" "}
                                <span>BITnine</span>
                            </h1>
                            <p>Experience lightning-fast spot trading,</p>
                            <div className="email-wrapper-align">
                                <div className="email-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="email-input"
                                    />
                                    <Button className="email-btn">Sign Up</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>

                            {/* English Language  */}

                            {/* {isNightMode ? (
                                <Image
                                    src="assets/images/banner-img-dark.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            ) : (
                                <Image
                                    src="assets/images/banner-img.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            )} */}

                            {/* Chinese Language */}

                            {/* {isNightMode ? (
                                <Image
                                    src="assets/images/banner-img-ch-dark.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            ) : (
                                <Image
                                    src="assets/images/banner-img-ch.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            )} */}

                            {/* Japansese Language */}

                            {isNightMode ? (
                                <Image
                                    src="assets/images/banner-img-jp-dark.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            ) : (
                                <Image
                                    src="assets/images/banner-img-jp.svg"
                                    width={100}
                                    height={100}
                                    alt="banner"
                                    className="banner-img"
                                />
                            )}

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="homebannerbg home-banner-sub-bg-cls">
                <Container>
                    <div className="home-banner-sub-bg">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            <Image
                                src="./assets/images/speaker-icon.svg"
                                height={30}
                                width={30}
                            ></Image>
                            <p className="m-0">
                                Supercharge Your Trades, Get Up to $1,000 in Instant Bonus!
                            </p>
                        </div>
                        <Link href="#0" className="d-flex align-items-center gap-1">
                            More
                            <Image
                                src="./assets/images/arrow-right.svg"
                                height={25}
                                width={25}
                            ></Image>
                        </Link>
                    </div>
                </Container>
            </section>
            <section className="homebannerbg pt-2">
                <Container className="sitebannercontent">
                    <Row className="row-gap-2 mt-4 hm-banner-cards">
                        <Col lg={3} md={6} sm={12}>
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
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="d-flex justify-content-center">
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
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="d-flex justify-content-center">
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
                            </div>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <div className="d-flex justify-content-center">
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="markettablebg markettable-custombg" id="marketslist">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title text-center pb-2">
                        Find Your Next Winning Trade
                    </h2>
                    <p className="sub-heading text-center">
                        Track price changes, volume spikes, and new listings - all in one
                        clean market view
                    </p>

                    <Row className="row-gap-3">
                        <Col lg={8} md={6} sm={12}>
                            <div className="marketstab-tabs-bg">
                                <Tab.Container
                                    id="left-tabs-example"
                                    defaultActiveKey="hotspot"
                                >
                                    <div className="innerpagetab marketstab">
                                        <Nav variant="pills" className=" mb-1">
                                            <Nav.Item>
                                                <Nav.Link eventKey="hotspot">Hot Spot</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="toplooser">Top Looser</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="hotspot">
                                            <SimpleBar className="table-responsive sitescroll">
                                                <Table className="table sitetable m-0" id="table1">
                                                    <tbody className="border-0">
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/btc.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="btc"
                                                                    className="coinicon"
                                                                />{" "}
                                                                <span className="t-gray">BTC/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$102,599.9</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/eth.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="eth"
                                                                    className="coinicon"
                                                                />{" "}
                                                                <span className="t-gray">ETH/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$3,192.17</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/xrp.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="bnb"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">XRP/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$29.14</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-red">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/trx.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">TRX/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$238.49</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+5.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/sol.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">SOL/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$89756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/ton.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">TON/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/ada.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">ADA/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">$6</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">+2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                            <ResponsiveTable tableId="table1" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="toplooser">
                                            <SimpleBar className="table-responsive sitescroll">
                                                <Table
                                                    className="table sitetable m-0"
                                                    id="table2"
                                                >
                                                    <tbody className="border-0">
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/btc.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="btc"
                                                                    className="coinicon"
                                                                />{" "}
                                                                <span className="t-gray">BTC/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/eth.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="eth"
                                                                    className="coinicon"
                                                                />{" "}
                                                                <span className="t-gray">ETH/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/xrp.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="bnb"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">XRP/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-red">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/trx.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">TRX/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/sol.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">SOL/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/ton.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">TON/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <Image
                                                                    src="assets/images/color/ada.svg"
                                                                    width={35}
                                                                    height={35}
                                                                    alt="xrp"
                                                                    className="coinicon"
                                                                />
                                                                <span className="t-gray">ADA/USDT</span>
                                                            </td>
                                                            <td>
                                                                <span className="">0.05489756</span>
                                                            </td>
                                                            <td>
                                                                <span className="t-green">-2.29%</span>
                                                            </td>
                                                            <td>
                                                                <Link href="/trade" className="btn sitebtn">
                                                                    Trade
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </SimpleBar>
                                            <ResponsiveTable tableId="table2" />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Row className="row-gap-3">
                                <Col sm={12}>
                                    <div className="markets-mini-table">
                                        <h4 className="pb-2">Top Gainer</h4>
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="table sitetable m-0" id="table3">
                                                <tbody className="border-0">
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/eth.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="eth"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="t-gray">ETH/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/doge.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="t-gray">BTC/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/trx.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="xrp"
                                                                className="coinicon"
                                                            />
                                                            <span className="t-gray">TRX/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table3" />
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="markets-mini-table">
                                        <h4 className="pb-2">New Listing</h4>
                                        <SimpleBar className="table-responsive sitescroll">
                                            <Table className="table sitetable m-0" id="table4">
                                                <tbody className="border-0">
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/sol.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="eth"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="t-gray">SOL/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/ton.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="btc"
                                                                className="coinicon"
                                                            />{" "}
                                                            <span className="t-gray">TON/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Image
                                                                src="assets/images/color/ada.svg"
                                                                width={35}
                                                                height={35}
                                                                alt="xrp"
                                                                className="coinicon"
                                                            />
                                                            <span className="t-gray">ADA/USDT</span>
                                                        </td>
                                                        <td>
                                                            <span className="">0.05489756</span>
                                                        </td>
                                                        <td>
                                                            <span className="t-green">-2.29%</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </SimpleBar>
                                        <ResponsiveTable tableId="table4" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="howitbg">
                <Container data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="heading-title text-center">
                        Start Trading in Just a Few Steps
                    </h2>
                    <p className="sub-heading text-center">
                        Follow this quick setup to unlock secure wallets, instant trades,
                        and passive earnings.
                    </p>
                    <div className="howitbg-grid-cards">
                        <div className="howitbg-grid-card1">
                            <div className="d-flex align-items-center howitbg-grid-cards-align">
                                <span className="howitbg-grid-span">1</span>
                                <div className="howitbg-grid-line"></div>
                            </div>
                            <div className="d-flex flex-column row-gap-2">
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
                            <div className="d-flex flex-column row-gap-2">
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
                            <div className="d-flex flex-column row-gap-2">
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
                            <div className="d-flex flex-column row-gap-2">
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
                <div className="few-steps-container">
                    <Container>
                        <h2 className="heading-title text-center">
                            Start Trading in Just a Few Steps
                        </h2>
                        <p className="sub-heading text-center">
                            Follow this quick setup to unlock secure wallets, instant trades,
                            and passive earnings.
                        </p>

                        <div className="mt-4">
                            <Row className="align-items-center row-gap-3">
                                <Col lg={6} md={6} sm={12}>
                                    <div className="few-steps-nav">
                                        <button
                                            className={`few-steps-item ${activeTab === 0 ? "few-steps-item--active" : ""
                                                }`}
                                            onClick={() => setActiveTab(0)}
                                        >
                                            <h3 className="few-steps-title">
                                                Multi-Chain Crypto Wallets
                                            </h3>
                                            <p className="few-steps-subtitle mb-0">
                                                Manage 10+ major cryptocurrencies with support for
                                                ERC20, BEP20, and TRC20 networks.
                                            </p>
                                        </button>

                                        <button
                                            className={`few-steps-item ${activeTab === 1 ? "few-steps-item--active" : ""
                                                }`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            <h3 className="few-steps-title">
                                                Balance Convert (Swap)
                                            </h3>
                                            <p className="few-steps-subtitle mb-0">
                                                Swap assets quickly with zero complexity — best for
                                                beginners and pro traders.
                                            </p>
                                        </button>

                                        <button
                                            className={`few-steps-item ${activeTab === 2 ? "few-steps-item--active" : ""
                                                }`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            <h3 className="few-steps-title">
                                                Referral & Affiliate Program
                                            </h3>
                                            <p className="few-steps-subtitle mb-0">
                                                Invite users and earn recurring commissions on every
                                                trade.
                                            </p>
                                        </button>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="few-steps-content">
                                        <div className="few-steps-content-wrapper">
                                            <div
                                                className={`few-steps-panel ${activeTab === 0 ? "few-steps-panel--active" : ""
                                                    }`}
                                            >
                                                <div className="few-steps-placeholder">

                                                    {/* English */}

                                                    {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-dark-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )}

                                                    {/* Chinese */}

                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-dark-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}

                                                    {/* Japanese */}

                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-jp-dark-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-jp-img1.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}

                                                </div>
                                            </div>

                                            <div
                                                className={`few-steps-panel ${activeTab === 1 ? "few-steps-panel--active" : ""
                                                    }`}
                                            >
                                                <div className="few-steps-placeholder">

                                                    {/* English */}

                                                    {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-dark-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )}

                                                    {/* Chinese */}

                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-dark-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}

                                                    {/* Japanese */}

                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-jp-dark-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-jp-img2.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}

                                                </div>
                                            </div>

                                            <div
                                                className={`few-steps-panel ${activeTab === 2 ? "few-steps-panel--active" : ""
                                                    }`}
                                            >
                                                <div className="few-steps-placeholder">
                                                    {/* English */}
                                                    {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-dark-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )}


                                                    {/* Chinese */}
                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-dark-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}

                                                    {/* Japanese */}

                                                    {/* {isNightMode ? (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-dark-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    ) : (
                                                        <Image
                                                            src="./assets/images/trading-steps-ch-img3.svg"
                                                            className="few-teps-img"
                                                        ></Image>
                                                    )} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section >

            <section
                className="faqquetbanner"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <Container>
                    <div>
                        <h2 className="heading-title">FAQ’s</h2>
                        <p className="sub-heading">
                            Everything you need to know before getting started.
                        </p>
                        <div className="faqsecbox mx-auto mt-4">
                            <div className="faqcntbox">
                                <Accordion
                                    defaultActiveKey="1"
                                    activeKey={activeKey}
                                    onSelect={(k) => setActiveKey(k)}
                                    flush
                                >
                                    <Accordion.Item
                                        eventKey="1"
                                        className={activeKey === "1" ? "active" : ""}
                                    >
                                        <Accordion.Header>
                                            Do I need to complete KYC to start trading?
                                            <img
                                                src={activeKey === "1" ? "/assets/images/faq-up.svg" : "/assets/images/faq-down.svg"}
                                                className="faq-arrow"
                                                alt="toggle icon"
                                            />
                                        </Accordion.Header>

                                        <Accordion.Body>
                                            KYC may be required based on regional regulations or if
                                            you want higher withdrawal limits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                        eventKey="2"
                                        className={activeKey === "2" ? "active" : ""}
                                    >
                                        <Accordion.Header>
                                            How to trade cryptocurrencies on Coinlocally?
                                            <img
                                                src={activeKey === "2" ? "/assets/images/faq-up.svg" : "/assets/images/faq-down.svg"}
                                                className="faq-arrow"
                                                alt="toggle icon"
                                            />
                                        </Accordion.Header>

                                        <Accordion.Body>
                                            KYC may be required based on regional regulations or if
                                            you want higher withdrawal limits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                        eventKey="3"
                                        className={activeKey === "3" ? "active" : ""}
                                    >
                                        <Accordion.Header>
                                            What are the trading fees on Coinlocally?
                                            <img
                                                src={activeKey === "3" ? "/assets/images/faq-up.svg" : "/assets/images/faq-down.svg"}
                                                className="faq-arrow"
                                                alt="toggle icon"
                                            />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            KYC may be required based on regional regulations or if
                                            you want higher withdrawal limits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                        eventKey="4"
                                        className={activeKey === "4" ? "active" : ""}
                                    >
                                        <Accordion.Header>
                                            How to buy Bitcoin and other cryptocurrencies on
                                            Coinlocally?
                                            <img
                                                src={activeKey === "4" ? "/assets/images/faq-up.svg" : "/assets/images/faq-down.svg"}
                                                className="faq-arrow"
                                                alt="toggle icon"
                                            />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            KYC may be required based on regional regulations or if
                                            you want higher withdrawal limits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item
                                        eventKey="5"
                                        className={activeKey === "5" ? "active" : ""}
                                    >
                                        <Accordion.Header>
                                            What trading products are available on Coinlocally?
                                            <img
                                                src={activeKey === "5" ? "/assets/images/faq-up.svg" : "/assets/images/faq-down.svg"}
                                                className="faq-arrow"
                                                alt="toggle icon"
                                            />
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            KYC may be required based on regional regulations or if
                                            you want higher withdrawal limits.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Homefooter />
        </div >

    );
}

export default Desktoppage;
