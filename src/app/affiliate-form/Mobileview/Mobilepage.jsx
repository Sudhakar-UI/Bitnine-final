"use client";
import React, { useEffect, useState } from "react";
import { Container, Form, Button, FormCheck, Image } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../../../../public/assets/css/home.css";
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';
import { useTheme } from "@/app/context/ThemeContext";

const page = () => {

    const [activeTab, setActiveTab] = useState(1);

    const { openMenu } = useSideMenu();

    const { isNightMode } = useTheme();

    return (
        <>
            <article className="affiliate-form-page-align mobilebg">
                <div className="innerpages affiliate-mb-page">
                    <Container>

                        <div className="mbheadingbox">
                            <div className="humberbutton">
                                <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </a>
                            </div>

                            <div className="flex-one-cls flex-grow-1 text-center w-100">
                                <h2 className="heading-title text-center mb-0 flex-1">Affiliate Form</h2>
                            </div>
                            <div className="humberbutton" onClick={openMenu}>
                                <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                    <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="heading-title pb-3">
                                Join the Bitnine Affiliate Program
                            </h2>
                            <p className="content mb-0 text-center">
                                Bitnine Affiliate Program is for who have active social media
                                profiles. There are many different social medias which are
                                important for Bitnine such as ; Youtube, Instagram, Facebook,
                                Twitter, Telegram
                                <br />
                                Please complete the form, and if you meet the program criteria
                                we will reach out to you. Thank you for applying! To get more
                                information, please check out{" "}
                                <span>
                                    <Link className="afflink" href="#">
                                        Bitnine Affiliate Program Guide
                                    </Link>
                                </span>
                                .
                            </p>
                        </div>

                        <div className="row mt-4">
                            <div className="col-lg-12 mx-auto">
                                {/* STEP BAR */}
                                <div className="steps-wrapper">
                                    {/* STEP 1 */}
                                    <div className="step-item">
                                        <div
                                            className={`step-circle ${activeTab > 0
                                                ? "completed"
                                                : activeTab === 0
                                                    ? "active"
                                                    : ""
                                                }`}
                                        >
                                            <FontAwesomeIcon icon={faCheck} color="#fff" />
                                        </div>
                                        <div
                                            className={`step-label ${activeTab === 0 ? "active" : ""
                                                }`}
                                        >
                                            Register
                                        </div>
                                        <div
                                            className={`step-line ${activeTab > 0 ? "completed" : ""
                                                }`}
                                        ></div>
                                    </div>

                                    {/* STEP 2 */}
                                    <div className="step-item">
                                        <div
                                            className={`step-circle ${activeTab > 1
                                                ? "completed"
                                                : activeTab === 1
                                                    ? "active"
                                                    : ""
                                                }`}
                                        >
                                            <FontAwesomeIcon icon={faCheck} color="#fff" />
                                        </div>
                                        <div
                                            className={`step-label ${activeTab === 1 ? "active" : ""
                                                }`}
                                        >
                                            Submit your application
                                        </div>
                                        <div
                                            className={`step-line ${activeTab > 1 ? "completed" : ""
                                                }`}
                                        ></div>
                                    </div>

                                    {/* STEP 3 */}
                                    <div className="step-item">
                                        <div
                                            className={`step-circle ${activeTab === 2 ? "active" : ""
                                                }`}
                                        >
                                            <FontAwesomeIcon icon={faCheck} color="#fff" />
                                        </div>
                                        <div
                                            className={`step-label ${activeTab === 2 ? "active" : ""
                                                }`}
                                        >
                                            Done
                                        </div>
                                    </div>
                                </div>
                                {/* END STEP BAR */}

                                {activeTab === 1 && (
                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <h4 className="m-0">Submit your Application</h4>
                                    </div>
                                )}

                                <div className="aff-form-container">
                                    {/* CONTENT */}
                                    <div className="aff-form-content">
                                        {/* TAB 1 */}
                                        {activeTab === 0 && (
                                            <div>
                                                <h2 className="aff-form-title">Register</h2>
                                                <p>
                                                    Welcome! Please click "Submit your application" to
                                                    start.
                                                </p>

                                                <div className="d-flex gap-3 aff-next-btn-border">
                                                    <button
                                                        className="aff-next-btn"
                                                        onClick={() => setActiveTab(1)}
                                                    >
                                                        Start Application
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {/* TAB 2 */}
                                        {activeTab === 1 && (
                                            <form className="aff-form-form siteformbg">
                                                <div className="logcenterbox">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Nickname</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            id="nickname"
                                                        />{" "}
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Your Affiliate Type</Form.Label>
                                                        <Form.Select id="affiliatetype">
                                                            <option>Crypto influencer (Individual)</option>
                                                            <option>
                                                                Social Media influencer (Non-Crypto Community)
                                                            </option>
                                                            <option>Developer / Trading Tools</option>
                                                            <option>Others</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Language</Form.Label>
                                                        <Form.Select id="language">
                                                            <option>English</option>
                                                            <option>Espaniol</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Contact Info</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            name=""
                                                            id="contactinfo"
                                                        />{" "}
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>
                                                            Which country or region do you plan on marketing
                                                            in?
                                                        </Form.Label>
                                                        <Form.Select id="country">
                                                            <option>English</option>
                                                            <option>Espaniol</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Primary Promo Platform</Form.Label>
                                                        <Form.Select id="promoplatform">
                                                            <option>Twitter</option>
                                                            <option>Telegram</option>
                                                            <option>Line</option>
                                                            <option>KakaoTalk</option>
                                                            <option>VK</option>
                                                            <option>Search Engine Marketing (SEM)</option>
                                                            <option>Blog</option>
                                                            <option>Affiliate Marketing</option>
                                                            <option>Forum</option>
                                                            <option>Yotube</option>
                                                            <option>Twitch</option>
                                                            <option>Discord</option>
                                                            <option>Instagram</option>
                                                            <option>Linkedin</option>
                                                            <option>Facebook</option>
                                                            <option>Odnoklaasniki</option>
                                                            <option>Rutube</option>
                                                            <option>Content Sites</option>
                                                            <option>Others</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>
                                                            Other Social Media Platforms
                                                        </Form.Label>
                                                        <div className="affi-social-forms othersocials">
                                                            <div className="affi-social-forms-left">
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="twitter"
                                                                    label="Twitter"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="telegram"
                                                                    label="Telegram"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="line"
                                                                    label="Line"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="kakaotalk"
                                                                    label="KakaoTalk"
                                                                />
                                                                <FormCheck type="checkbox" id="vk" label="VK" />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="sem"
                                                                    label="Search Engine Marketing (SEM)"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="blog"
                                                                    label="Blog"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="affiliate"
                                                                    label="Affiliate Marketing"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="forum"
                                                                    label="Forum"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="others"
                                                                    label="Others"
                                                                />

                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="youtube"
                                                                    label="Yotube"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="twitch"
                                                                    label="Twitch"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="discord"
                                                                    label="Discord"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="instagram"
                                                                    label="Instagram"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="linkedin"
                                                                    label="Linkedin"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="facebook"
                                                                    label="Facebook"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="odnoklaasniki"
                                                                    label="Odnoklaasniki"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="rutube"
                                                                    label="Rutube"
                                                                />
                                                                <FormCheck
                                                                    type="checkbox"
                                                                    id="contentsites"
                                                                    label="Content Sites"
                                                                />
                                                            </div>
                                                            {/* <div className="affi-social-forms-right">

                              </div> */}
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>
                                                            Is there anything else that you would like to
                                                            share?
                                                        </Form.Label>
                                                        <textarea
                                                            className="form-control"
                                                            rows={4}
                                                            id="textarea1"
                                                        ></textarea>
                                                    </Form.Group>
                                                    <Form.Group className="form-group">
                                                        <Form.Label>
                                                            How did you hear about Bitnine Platform?
                                                        </Form.Label>
                                                        <Form.Select
                                                            id="hearingplatform"
                                                        >
                                                            <option>Bitnine Website</option>
                                                            <option>Another Affiliate</option>
                                                            <option>Bitnine Instagram</option>
                                                            <option>Bitnine Telegram</option>
                                                            <option>Others</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </div>

                                                {/* ➜ Next Button Added Here */}
                                                <div className="d-flex gap-3 aff-next-btn-border">
                                                    <button className="btn sitebtn w-100">Reset</button>
                                                    <button
                                                        type="button"
                                                        className="sitebtn w-100"
                                                        onClick={() => setActiveTab(2)}
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </form>
                                        )}

                                        {/* TAB 3 */}
                                        {activeTab === 2 && (
                                            <div>
                                                <h4 className="sub-heading my-3">
                                                    Your Submission has been received
                                                </h4>
                                                <p className="content mb-0">
                                                    Your application is under review. Results will be sent
                                                    via on-site push notifications. It will take 1–2
                                                    working days.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <MobileFooterNav />
            </article>
        </>
    );
};

export default page;
