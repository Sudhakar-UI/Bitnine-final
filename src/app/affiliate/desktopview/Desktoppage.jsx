"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Container,
    Row,
    Col,
    Image,
    Form,
    Modal,
    Button,
    Accordion,
} from "react-bootstrap";
import Homeheader from "../../components/Homeheader";
import Homefooter from "../../components/Homefooter";
import { useTheme } from "@/app/context/ThemeContext";

const Desktoppage = () => {

    const [activeKey, setActiveKey] = useState("1");

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const { isNightMode } = useTheme();

    return (
        <div className="affiliate-page">
            <Homeheader />
            <section className="affiliate-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} md={6} sm={12}>
                            <div>
                                <h2 className="heading-title">Join Our Partner Program <br />
                                    Earn Up to 50% + 10% <br />
                                    Bonus Commissions </h2>
                                <p>Invite your network to Bitnine and earn effortlessly. <br />No trading required.</p>
                                <button className="aff-btn" onClick={handleShowModal}>Become Affiliate</button>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="d-flex justify-content-center">
                            <Image src="./assets/images/affiliate-hero-img.svg" alt="affiliate-hero-img" className="affiliate-hero-img" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="why-affiliate-section">
                <h2 className="heading-title">Why join BITnine Affiliate Program?</h2>
                <Container className="mt-4">
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <div className="why-affiliate-box">
                                <Image src={
                                    isNightMode ?
                                        "./assets/images/why-join-icon1-light.svg" :
                                        "./assets/images/why-join-icon1.svg"}>
                                </Image>
                                <h5 className="sub-heading">High Commission</h5>
                                <p className="content">Up to 50+10% commissions on each trade of <br /> your referred users</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="why-affiliate-box">
                                <Image src={
                                    isNightMode ?
                                        "./assets/images/why-join-icon2-light.svg" :
                                        "./assets/images/why-join-icon2.svg"}>
                                </Image>
                                <h5 className="sub-heading">Daily Settlement</h5>
                                <p className="content">Cashback's are settled daily accompanied by a <br /> detailed performance report</p>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <div className="why-affiliate-box">
                                <Image src={
                                    isNightMode ?
                                        "./assets/images/why-join-icon3-light.svg" :
                                        "./assets/images/why-join-icon3.svg"}>
                                </Image>
                                <h5 className="sub-heading">Second Level Referral</h5>
                                <p className="content">Gain an additional 10% commission from the <br /> networks of referees that you invited</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="value-beyond-section">
                <h2 className="heading-title">Value Beyond Commissions</h2>
                <p className="content">Access exclusive tools, priority support, and growth insights designed <br /> to help you succeed beyond just earnings.</p>
                <Container className="mt-4">
                    <Row className="row-gap-3">
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon1.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Transparent Dashboard</h4>
                                <p>Get real-time visibility into your campaigns, earnings, and performance. Track progress clearly with a unified and easy-to-use dashboard.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon2.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Dedicated Support</h4>
                                <p>Our 24/7 expert support team is always available to assist you and your audience, ensuring quick resolution and a smooth experience.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon3.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Verified by Bitnine</h4>
                                <p>Receive official verification and a dedicated profile on Bitnine, strengthening trust, credibility, and long-term confidence with your followers.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon4.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Exclusive Campaigns</h4>
                                <p>Launch tailored promotional campaigns for your audience with curated rewards and shareable, trackable campaign links.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon5.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Referral Customization</h4>
                                <p>Share your referral page with a custom image and display name, creating a more personal and recognizable experience for your audience.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="value-beyond-box">
                                <div className="beyond-icon">
                                    <Image src="./assets/images/beyond-icon6.svg"></Image>
                                </div>
                                <h4 className="sub-heading">Lifetime Commissions</h4>
                                <p>Earn commissions without expiration. Once approved, your referrals continue generating value for you, with no limits or time restrictions.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="ready-to-earn">
                <h2 className="heading-title">Ready to Earn? Let’s Begin</h2>
                <Container className="mt-4">
                    <div className="earn-grid">
                        <div className="earn-box">
                            <Image src="./assets/images/earn-icon1.svg"></Image>
                            <h5 className="sub-heading">Share your affiliate link</h5>
                            <p className="content">Share your unique affiliate link and start earning rewards for every successful referral.</p>
                        </div>
                        <div className="earn-box">
                            <Image src="./assets/images/earn-icon2.svg"></Image>
                            <h5 className="sub-heading">Earn up to 50+10% commission</h5>
                            <p className="content">Get rewarded with up to 50% commission and an extra 10% for continued referrals.</p>
                        </div>
                        <div className="earn-box">
                            <Image src="./assets/images/earn-icon3.svg"></Image>
                            <h5 className="sub-heading">Submit your Application</h5>
                            <p className="content">Apply to join our affiliate program and get started in just a few simple steps.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="affiliate-faq-sec">
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


            <Modal show={showModal} onHide={handleCloseModal} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center">
                        Application Form
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="mb-3">
                            <Form.Label>First name <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>What languages do you speak? <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Telegram ID <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Personal Channel (Twitter, Linkedin, Youtube Channel) <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="">
                            <Form.Label>Take a minute to tell us about yourself (Max 250 Words) <span className="t-red">*</span></Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                            />
                        </Form.Group>
                        <div className="w-100 mt-3">
                            <Button type="button" className="sitebtn w-100">Submit</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            <Homefooter />
        </div>
    )
}

export default Desktoppage