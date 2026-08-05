"use client"
import React, { useState } from 'react'
import { Container, Image, Table, Modal, Form, Button } from 'react-bootstrap';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import Mobilehomefooter from "@/app/components/Mobilehomefooter";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTheme } from '@/app/context/ThemeContext';


const Mobilepage = () => {

  const { openMenu } = useSideMenu();

  const { isNightMode } = useTheme();

  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Container>
        <div className="mbheadingbox gap-2 mobilebg">
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

      <Container>
        <div className='affiliate-hero-section'>
          <div>
            <h2 className="heading-title">Join Our Partner Program <br />
              Earn Up to 50% + 10% <br />
              Bonus Commissions </h2>
            <p>Invite your network to Bitnine and earn <br /> effortlessly. No trading required.</p>
            <button className="aff-btn" onClick={handleShowModal}>Become Affiliate</button>
          </div>
        </div>
      </Container>

      <Container>
        <div className='why-affiliate-section'>
          <h2 className="heading-title">Why join BITnine Affiliate Program?</h2>
          <div className='d-flex flex-column row-gap-2'>
            <div className='why-aff-box-align'>
              <Image src={
                isNightMode ?
                  "./assets/images/why-join-icon1-light.svg" :
                  "./assets/images/why-join-icon1.svg"}>
              </Image>
              <div className='d-flex flex-column row-gap-1'>
                <h4>High Commission</h4>
                <p>Up to 50+10% commissions on each trade of your referred users</p>
              </div>
            </div>
            <div className='why-aff-box-align'>
              <Image src={
                isNightMode ?
                  "./assets/images/why-join-icon2-light.svg" :
                  "./assets/images/why-join-icon2.svg"}>
              </Image>
              <div className='d-flex flex-column row-gap-1'>
                <h4>Daily Settlement</h4>
                <p>Cashback's are settled daily accompanied by a detailed performance report</p>
              </div>
            </div>
            <div className='why-aff-box-align'>
              <Image src={
                isNightMode ?
                  "./assets/images/why-join-icon3-light.svg" :
                  "./assets/images/why-join-icon3.svg"}>
              </Image>
              <div className='d-flex flex-column row-gap-1'>
                <h4>Second Level Referral</h4>
                <p>Gain an additional 10% commission from the networks of referees that you invited</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className='value-beyond-section'>
          <h2 className="heading-title">Value Beyond Commissions</h2>

          <div>
            <Swiper
              modules={[Pagination]}
              slidesPerView={'auto'}
              spaceBetween={16}
              centeredSlides={false}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom3',
              }}
              className="value-beyond-swiper"
            >
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon1.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Transparent Dashboard</h4>
                    <p>Get real-time visibility into your campaigns, earnings, and performance. Track progress clearly with a unified and easy-to-use dashboard.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon2.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Dedicated Support</h4>
                    <p>Our 24/7 expert support team is always available to assist you and your audience, ensuring quick resolution and a smooth experience.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon3.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Verified by Bitnine</h4>
                    <p>Receive official verification and a dedicated profile on Bitnine, strengthening trust, credibility, and long-term confidence with your followers.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon4.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Exclusive Campaigns</h4>
                    <p>Launch tailored promotional campaigns for your audience with curated rewards and shareable, trackable campaign links.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon5.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Referral Customization</h4>
                    <p>Share your referral page with a custom image and display name, creating a more personal and recognizable experience for your audience.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="value-beyond-box">
                  <div className="beyond-icon">
                    <Image src="./assets/images/beyond-icon6.svg"></Image>
                  </div>
                  <div className='d-flex flex-column gap-1'>
                    <h4 className="sub-heading">Lifetime Commissions</h4>
                    <p>Earn commissions without expiration. Once approved, your referrals continue generating value for you, with no limits or time restrictions.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className="swiper-pagination-custom3"></div>
          </div>

        </div>
      </Container>

      <div className='ready-to-earn'>
        <h2 className="heading-title">Ready to Earn? Let’s Begin</h2>
        <Container>
          <div className='earn-grid'>
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
      </div>

      <Modal show={showModal} onHide={handleCloseModal} className='modalbgt authmodal app-form' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>
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
              <Form.Label>Personal Channel <span className='t-gray'>(Twitter, Linkedin, Youtube Channel)</span> <span className="t-red">*</span></Form.Label>
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

      <Mobilehomefooter />

      <MobileFooterNav />
    </div>
  )
}

export default Mobilepage