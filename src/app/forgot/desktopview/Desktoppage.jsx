"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
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
		<div>
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
											<h3 className="heading-title pb-2">Forgot Password</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address <span className="t-red">*</span></Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												{/* <Form.Group className="form-group">
														<Form.Label>Password</Form.Label>
														<InputGroup>
															<Form.Control type="password" id="password" />
															<div className="input-group-append">
																<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
															</div>
														</InputGroup>
													</Form.Group> */}
												<div className="text-center">
													<Button type="submit" className=" sitebtn ashbtn" id="submit">Submit</Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray"><Link href="/signup" className="ms-1 t-blue" id="register"><i className="fa fa-long-arrow-left me-2"></i> Back to login </Link>
											</p>
										</div>
									</div>

								</div>
							</Form>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default Page;


