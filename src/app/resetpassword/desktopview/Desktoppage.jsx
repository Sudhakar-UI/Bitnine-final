"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import '../../../../public/assets/css/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";

const Page = () => {
	useEffect(() => {
		document.body.classList.add('loginbanner');
		document.body.classList.remove('userpanelpage');
		return () => {
			document.body.classList.remove("loginbanner");
		};
	});

	const { isNightMode } = useTheme();

	return (
		<>
			<section className="formbg">
				<Container className="sign">
					<div className="formboxbg">
						<div className="leftsideformbox">
							<Link href="/" className="lgimg">
								<Image src={
									isNightMode ?
										"/images/logo-light.svg" :
										"assets/images/logo.svg"
								} className="logo" width={50} height={50} alt="icon" />
							</Link>
							<h2>Join Bitnine and Start Trading Cryptocurrencies with Confidence</h2>
							<p>Trade securely on a modern and seamless platform designed for fast deposits, withdrawals, and spot trading.</p>
							<Image src="assets/images/login.png" className="loginiconb" width={50} height={50} alt="icon" />
						</div>
						<div className="rightsideformbox">
							<Form className="siteformbg">
								<div className="login-form">
									<div className="loginformbox">
										<div className="logcenterbox">
											<h3 className="heading-title pb-2">Reset Password</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address <span className="t-red">*</span></Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Email OTP code <span className="t-red">*</span></Form.Label>
													<Form.Control type="text" name="" id="code" />
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Password <span className="t-red">*</span></Form.Label>
													<InputGroup>
														<Form.Control type="password" id="password" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Confirm Password <span className="t-red">*</span></Form.Label>
													<InputGroup>
														<Form.Control type="password" id="confirmpassword" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<div className="text-center">
													<Button type="submit" className=" sitebtn ashbtn" id="submit">Update Password</Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray">Already have an account
												<Link href="/signin" className="ms-1 t-blue" id="signin"> Sign in </Link>
											</p>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray mb-0">Mail not received click resend link,
												<Link href="/signin" className="t-blue" id="resend"> Send Code</Link>
											</p>
										</div>
									</div>

								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}

export default Page;










