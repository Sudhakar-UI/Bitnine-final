import React from "react";
import Link from "next/link";
import { Container, Row, Col, Form, InputGroup, Image } from "react-bootstrap";
const Homefooter = () => {
  return (
    <footer className="footerbottombg">
      <section>
        <Container>
          <div className="footerbox">
            <Row className="menusec subscribebg">
              <Col lg={3} md={3}>
                <div className="footabtcnt">
                  <div className="mb-3 footlogo">
                    <Image
                      src="assets/images/logo-white.svg"
                      width={100}
                      height={57}
                      className=""
                      alt="logo"
                    />
                  </div>
                  <p>
                 Your trusted platform for trading, staking, <br /> and
                    growing your crypto securely. Akshay
                  </p>
                  <div className="footlogo-align">
                    <Image src="./assets/images/telegram-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/instagram-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/x-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/youtube-icon.svg" className="foot-logos-icon" ></Image>
                    <Image src="./assets/images/medium-icon.svg" className="foot-logos-icon" ></Image>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6}>
                <h3 className="h3">Menu</h3>
                <ul>
                  <li>
                    <Link id="marketslink" href="#0">
                      Markets
                    </Link>
                  </li>
                  <li>
                    <Link id="tradelink" href="#0">
                      Trade
                    </Link>
                  </li>
                  <li>
                    <Link id="earnlink" href="#0">
                      Earn
                    </Link>
                  </li>
                  <li>
                    <Link id="featureslink" href="#0">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link id="convertlink" href="#0">
                      Convert
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6}>
                <h3 className="h3">Quick Links</h3>
                <ul>
                  <li>
                    <Link id="spottradinglink" href="#0">
                      Spot Trading
                    </Link>
                  </li>
                  <li>
                    <Link id="stakinglink" href="#0">
                      Staking
                    </Link>
                  </li>
                  <li>
                    <Link id="referrallink" href="#0">
                      Referral Program
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={6}>
                <h3 className="h3">Legal</h3>
                <ul>
                  <li>
                    <Link id="aboutuslink" href="#0">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link id="privacylink" href="#0">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link id="termslink" href="#0">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
          {/* <hr /> */}
        </Container>

        {/* <div className="subscribebg contactsec">
          <Container className="sitecontainer">
            <Row>
              <Col lg={6} md={6} className="footersubtn">
                <p className="ftxt">
                  Copyright © 2025. bitnine All rights reserved.
                </p>
              </Col>
              <Col lg={6} md={6}>
                <div className="followusdiv">
                  <div className="socialbg">
                    <div className="d-flex">
                      <div>
                        <Link id="instalink" href={"#"}>
                          {" "}
                          <Image
                            src="assets/images/instagram.svg"
                            alt="icon"
                            className="scicon"
                            width={30}
                            height={30}
                          />{" "}
                        </Link>{" "}
                      </div>
                      <div>
                        <Link id="fblink" href={"#"}>
                          {" "}
                          <Image
                            src="assets/images/fb.svg"
                            alt="icon"
                            className="scicon"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                      <div>
                        <Link id="youtubelink" href={"#"}>
                          {" "}
                          <Image
                            src="assets/images/youtube.svg"
                            alt="icon"
                            className="scicon"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>
    </footer>
  );
};
export default Homefooter;
