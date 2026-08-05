"use client"
import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Nav, Tab, InputGroup, Form, Button, Image, NavDropdown } from "react-bootstrap";
import Homeheader from '../../components/Homeheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "@/app/context/ThemeContext";
import SimpleBar from "simplebar-react";

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
							<div className="logbox">
								<div>
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
							</div>
						</div>
						<div className="rightsideformbox">
							<NavDropdown
								title={
									<div className="pull-left menushapeicon">
										<Image
											src="assets/images/langicon.svg"
											className="menuicon"
											alt="user"
											width={100}
											height={57}
										/>
									</div>
								}
								id="basic-nav-dropdown"
								className="langmenu auth-lang-dropdown"
								placement="bottom"
							>
								<SimpleBar className="chat-notification">
									<NavDropdown.Item as={Link} href="/" className="active">
										<span className="langenicon">
											<Image
												src="assets/images/eng.svg"
												alt="icon"
												width={100}
												height={100}
											/>
										</span>
										English
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} href="/">
										<span className="langenicon">
											<Image
												src="assets/images/ch.svg"
												alt="icon"
												width={100}
												height={100}
											/>
										</span>
										Chinese
									</NavDropdown.Item>
									<NavDropdown.Item as={Link} href="/">
										<span className="langenicon">
											<Image
												src="assets/images/ja.svg"
												alt="icon"
												width={100}
												height={100}
											/>
										</span>
										Japanese
									</NavDropdown.Item>
								</SimpleBar>
							</NavDropdown>
							<Form className="siteformbg">
								<div className="login-form">
									<div className="loginformbox">
										<div className="logcenterbox">
											<h3 className="heading-title pb-2">Sign In</h3>
											<div className="formcontentbox mt-3">
												<Form.Group className="form-group">
													<Form.Label>Email Address <span className="t-red">*</span></Form.Label>
													<Form.Control type="text" name="" id="email" />
												</Form.Group>
												<Form.Group className="form-group">
													<Form.Label>Password <span className="t-red">*</span></Form.Label>
													<InputGroup>
														<Form.Control type="email" id="password" />
														<div className="input-group-append">
															<InputGroup.Text> <FontAwesomeIcon icon={faEye} /> </InputGroup.Text>
														</div>
													</InputGroup>
												</Form.Group>
												<p className="btngray"> <Link href="/forgot" className="t-blue" id="reset">Forgot your password?</Link> </p>
												<div className="text-center mb-2">
													<Button type="submit" className=" sitebtn ashbtn" id="submit"> Sign In </Button>
												</div>
											</div>
										</div>
										<div className="logbottomcellbox">
											<p className="btngray"> Don't have an account?<Link href="/signup" className="ms-1 t-blue" id="register"> Sign Up </Link>
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


