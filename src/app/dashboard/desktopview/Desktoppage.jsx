"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Image, Form, Modal, Table, Badge, InputGroup, DropdownButton, Dropdown, Button, Nav, Tab, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleInfo, faLongArrowRight, faEyeSlash, faAngleRight, faCheckCircle, faCopy, faEdit, faRightLong, faArrowRight, faAnglesRight, faArrowsUpDown, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import 'react-loading-skeleton/dist/skeleton.css'
import ResponsiveTable from '../../components/ResponsiveTable';
import StatChart from '../statChart';


const Page = () => {
	const [showModal1, setShowModal1] = useState(false);

	const handleClose1 = () => setShowModal1(false);
	const handleShow1 = () => setShowModal1(true);
	return (
		<div className="pagecontent gridpagecontent innerpagegrid">

			<div className="backgroundoverlay" id="backgroundoverlay"></div>
			<Userheader />
			<Leftsidemenu />
			<article className="gridparentbox gridtabtopbox">
				<Container className="sitecontainer dashboardpage">
					<div className="innerpagecontent">
						<h2 className="h2">Welcome Johnwilliam <span className='wave mx-1'>👋</span> </h2>
					</div>
					<div className="introbox panelcontentbox gradientdarkbg mb-3">
						<div className="cryptobox">
							<div className="table-content">
								<div>
									<div className="profileiconpic"><Image src="assets/images/profile.svg" className='photopic dashpic' /></div>
								</div>
								<div>
									<h4 className="h4 mb-2">Johnwilliam<Link href="#" id="editprofile" className="t-gray ms-2" onClick={handleShow1}><span className="t-green ms-1"><FontAwesomeIcon icon={faEdit} /></span></Link>
									</h4>
									<div className="table-content cryptdetbox">
										<div>
											<h4 className="t-gray h4">Email </h4>
											<h5 className="h5">john***@gmail.com</h5> </div>
										<div>
											<h4 className="t-gray h4">UID</h4>
											<h5 className="h5">551356848 <span className="ms-2"><FontAwesomeIcon icon={faCopy} /></span></h5>
										</div>
										<div>
											<h4 className="t-gray h4">Security Level </h4>
											<h5 className="t-red h5">Low <FontAwesomeIcon icon={faAngleRight} /></h5> </div>
										<div>
											<h4 className="t-gray h4">Last Sign In</h4>
											<h5 className="h5">13-11-2025, 09:45:25 (IP: 106.51.22.60)</h5> </div>
									</div>
								</div>
							</div>

						</div>
					</div>
					<div className="chartflexbox mb-3">
						<div>
							<div className="panelcontentbox">
								<h2 className="subhead pb-2">Get started — activate your account in 3 quick steps</h2>
								<p>Complete these steps to unlock trading, deposits and withdrawals. It only takes a few minutes.</p>
								<div className="welcomebanner qcgo-dash">
									<div className="table-content panelcontentbox dashstepsbox">
										<div className="no">1</div>
										<div>
											<span><Image src="assets/images/verifyicon.svg" /></span>
										</div>
										<div>
											<h5>Verify Your Identity</h5>
											<p>Upload documents to unlock features</p>
											<Link href="/kyc" className="btn sitebtn btn-sm">Continue kyc</Link>
										</div>
									</div>
									<div className="table-content panelcontentbox">
										<div className="no">2</div>
										<div> <Image src="assets/images/dpsiticon.svg" /> </div>
										<div>
											<h5>Deposit Crypto</h5>
											<p>Choose crypto & deposit crypto amount</p>
											<Link href="#" className="btn sitebtn btn-sm">Deposit</Link>
										</div>
									</div>

									<div className="table-content panelcontentbox">
										<div className="no">3</div>
										<div> <Image src="assets/images/starttradeicon.svg" /> </div>
										<div>
											<h5>Start Trading</h5>
											<p>Buy/Sell crypto instantly on spot market</p>
											<Link href="#" className="btn sitebtn btn-sm">Trade</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flexbox dashboardflexbox">
						<div>
							<div className="securpanelbox">
								<div className="overviewbalancebox panelcontentbox">
									<div className="table-content">
										<div>
											<h4 className="subhead">Balance details <FontAwesomeIcon icon={faEyeSlash} /></h4>
											<div className="d-flex cry-content">
												<h3 className="h3">$ 15,2569 <span>BTC</span></h3>
											</div>
											{/* <p>$1234 USD</p> */}
												<p className="mt-1 me-2">Today's PnL
													<OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Today's PnL</Tooltip>}>
														<FontAwesomeIcon icon={faCircleInfo} className="ms-1" /></OverlayTrigger>
													<span> $ 0.000</span>
												</p>
										</div>
										<div className="text-end dwt-btn">
											{/* <Link href="/deposit" className="btn btn-sm borderbtn me-1">Deposit</Link>
											<Link href="/withdraw" className="btn btn-sm borderbtn me-1">Withdraw</Link>
											<Link href="/withdraw" className="btn btn-sm borderbtn me-1">Transfer</Link> */}
											<div className="wallet-high dashbaord-chart">
												<StatChart />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="devicebox devicetable mt-3">
								<div className="panelcontentbox">
									<h4 className="subhead pb-2">Account Access History</h4>
									<div className="tabrightbox">
										<Link href="/accountactivity" className="alink">View All <FontAwesomeIcon icon={faArrowRight} /></Link>
									</div>
									<SimpleBar className="table-responsive">
										<Table className="sitetable" id='table1'>
											<thead>
												<tr>
													<th>Date</th>
													<th>Device</th>
													<th>Browser</th>
													<th>Location</th>
													<th>IP Address</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>
												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>
												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>

												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>
												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>
												<tr>
													<td>21/11/2025 13:20:17</td>
													<td>Web</td>
													<td>Chrome (Linux)</td>
													<td>Malappuram India</td>
													<td>42.109.143.229</td>
												</tr>
											</tbody>
										</Table>
									</SimpleBar>
									<ResponsiveTable tableId="table1" />
								</div>
							</div>
						</div>
						<div>
							<div className="table-content panelcontentbox mb-3">
								<div>
									<h5 className='subhead pb-2'>Bitnine Earn</h5>
									<p className="t-gray mb-1">Smart Earning Starts Here - 300+ Crypto Assets Supported</p>
								</div>
								<div className="tabrightbox"> <Link href="/kyc" className="alink"><FontAwesomeIcon icon={faLongArrowRight} /></Link> </div>
							</div>
							<div className="panelcontentbox referbox mb-3">
								<Form className="siteformbg">
									<h5 className='subhead pb-2'>Refer a friend</h5>
									<Form.Group className="form-group m-0">
										<p className="mb-1 t-gray">Invite friends and earn passive income!</p>
										<InputGroup className="mb-0">
											<Form.Control name="code" value="J57QZ0XA" readOnly />
											<InputGroup.Text><FontAwesomeIcon icon={faCopy} /></InputGroup.Text>
										</InputGroup>

										<label className="m-0">Your referral code</label>
									</Form.Group>
								</Form>
								<div className="tabrightbox"> <Link href="#" className="alink"><FontAwesomeIcon icon={faLongArrowRight} /></Link> </div>
							</div>
						</div>
					</div>
				</Container>
			</article>
			<Userfooter />

			<Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Set Nickname</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="siteformbg">
						<Form.Group className="form-group">
							<Form.Label>My Nickname</Form.Label>
							<Form.Control type="text" name="" id="nickname" placeholder="Enter Nickname" />
						</Form.Group>
						<Form.Group className="form-group noteslist">
							<p><b>Notes :</b></p>
							<p>1. You can only change your nickname once in 30 days, please edit it carefully.</p>
							<p>2. Upon submission, your nickname will be reviewed. If any insulting or politically sensitive language is detected, your nickname will be rejected.</p>
							<p>3. Your nickname in use will be reviewed by the platform from time to time. If any rule violation is detected, your nickname will become invalid, and you will have to submit another nickname for review.</p>
						</Form.Group>
						<Form.Group className="form-group text-center d-flex flxbtn m-0">
							<Button className="borderbtn me-2 w-100">Cancel</Button>
							<Button className="sitebtn w-100">Confirm</Button>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Page;