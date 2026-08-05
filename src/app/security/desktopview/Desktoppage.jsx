"use client"
import React, { useState, useEffect } from "react"
import Userheader from '../../components/Userheader'
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, InputGroup, Image, Modal, Button, Form, Alert, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link"

const page = () => {
    useEffect(() => {
        // Show the modal when the page loads
        setShowModal10(true);
    }, []);


    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);


    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);

    const handleClose4 = () => setShowModal4(false);
    const handleShow4 = () => setShowModal4(true);

    const handleClose5 = () => setShowModal5(false);
    const handleShow5 = () => setShowModal5(true);

    const handleClose6 = () => setShowModal6(false);
    const handleShow6 = () => setShowModal6(true);

    const handleClose7 = () => setShowModal7(false);
    const handleShow7 = () => setShowModal7(true);

    const handleClose8 = () => setShowModal8(false);
    const handleShow8 = () => setShowModal8(true);

    const handleClose9 = () => setShowModal9(false);
    const handleShow9 = () => setShowModal9(true);

    const handleClose10 = () => setShowModal10(false);
    const handleShow10 = () => setShowModal10(true);
    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox gridtabtopbox">
                <Container className="sitecontainer">
                    <div className="innerpagecontent">
                        <h2 className="h2">Security Settings</h2>
                    </div>
                    <div className='innerpagetab boxtabb'>
                        {/* <Alert variant="warning">
                            <b>Note :</b> For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert> */}
                        <div className="securitypage">
                            <div className="securityinnerbox panelcontentbox mt-0">
                                       <div className="d-flex ">
                                    <div>
                                        <h2 className="subhead pb-2">Two-Factor Authentication (2FA)</h2>
                                        <p className="mb-0">Add an extra layer of security to your account. Use two verification steps each time you log in.</p>
                                    </div>
                                    <div className="faverifybox">
                                        <div className="profiletablebox contentbox">
                                            <div> <Image src="assets/images/auth.svg" className="securityiconbox" /> </div>
                                            <div>
                                                <h4>Google Authentication<span className="secure-status t-green ms-2">
                                                    <i className="fa fa-check-circle me-1"></i>Enabled
                                                </span></h4>
                                                <h5 className="t-gray">Secure your logins, withdrawals, and account changes.
                                                </h5>
                                            </div>
                                            <div>  <Button id="googleauth" className="sitebtn  green-btn btn-sm" onClick={handleShow1}>Enable</Button> </div>
                                        </div>
                                        <hr />
                                        <div className="profiletablebox contentbox">
                                            <div> <Image src="assets/images/email.svg" className="securityiconbox" /> </div>
                                            <div>
                                                <h4>Email<span className="secure-status t-gray ms-2">
                                                    <i className="fa fa-check-circle me-1 t-green"></i>John@gmail.com</span> </h4>
                                                <h5 className="t-gray">Use email verification for login and recovery.
                                                </h5>
                                            </div>
                                            <div> <Button id="emailauth" className="sitebtn  green-btn btn-sm" onClick={handleShow3}>
                                                Enable
                                            </Button> </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="securityinnerbox panelcontentbox mt-3">
                                        <div className="d-flex align-items-center">
                                    <div>
                                        <h2 className="subhead pb-2">Identity Verification</h2>
                                        <p>Verify your identity to unlock full platform access and enhance your account protection.</p>
                                    </div>
                                    <div className="faverifybox">
                                        <div className="panelcontentbox">
                                            <div className="profiletablebox contentbox">
                                                <div> <Image src="assets/images/kycicon.svg" className="securityiconbox" /> </div>
                                                <div>
                                                    <h4>KYC Verification</h4>
                                                    <h5 className="t-gray">View your verification status and login activity history.
                                                    </h5>
                                                </div>
                                                <div>  <Link id="kycauth" className="sitebtn btn-sm" href="/kyc">Continue</Link> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="securityinnerbox mt-3">
                                <div className="bottomsecurebox">
                                    <div className="profiletablebox contentbox panelcontentbox">
                                        <div> <Image src="assets/images/anticode.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Anti-phishing Code<span className="secure-status t-green ms-2">
                                                <i className="fa fa-check-circle me-1"></i>Anti-phishing Code
                                            </span></h4>
                                            <h5 className="t-gray">Create a unique code to confirm that emails from us are genuine and avoid phishing attempts.</h5>
                                        </div>
                                        <div> <Link id="anticodeauth" className="sitebtn btn-sm" href="/anticode">Update</Link> </div>
                                    </div>
                                    <div className="profiletablebox contentbox panelcontentbox">
                                        <div> <Image src="assets/images/loginpwicon.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Login Password</h4>
                                            <h5 className="t-gray">Update your account password to keep your profile secure.</h5>
                                        </div>
                                        <div> <Button id="passwordauth" className="sitebtn  btn-sm" onClick={handleShow7} >Change</Button> </div>
                                    </div>
                                    <div className="profiletablebox contentbox panelcontentbox">
                                        <div> <Image src="assets/images/account-activities.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Account Activities</h4>
                                            <h5 className="t-gray">
                                               Review your login and security activity.</h5>
                                        </div>
                                        <div> <Link id="activityauth" className="sitebtn btn-sm" href="/accountactivity">View</Link> </div>
                                    </div>
                                    <div className="profiletablebox contentbox panelcontentbox">
                                        <div> <Image src="assets/images/delete.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Delete Account</h4>
                                            <h5 className="t-gray">Warning: Permanently delete your account. This action cannot be undone.</h5>
                                        </div>
                                        <div> <Link id="deleteauth" className="sitebtn  green-btn btn-sm" href="/deleteaccount">Proceed</Link> </div>
                                    </div>
                                    <div className="profiletablebox contentbox panelcontentbox">
                                        <div> <Image src="assets/images/freeze-account.svg" className="securityiconbox" /> </div>
                                        <div>
                                            <h4>Freeze Account</h4>
                                            <h5 className="t-gray">Freeze your account to disable all functions immediately</h5>
                                        </div>
                                        <div> <Link id="deleteauth" className="sitebtn  green-btn btn-sm" href="/freezeaccount">Proceed</Link> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </article>
            <Userfooter />


            {/* Google Authenticator  */}
            <Modal show={showModal1} onHide={handleClose1} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Email */}
            <Modal show={showModal2} onHide={handleClose2} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Are you sure you want to change your email address?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className="notslist">
                        <li> Withdrawals will be disabled for 24 hours after changing email to protect your account. </li>
                        <li> Unlinking your email may expose you to a greater risk of unauthorized access. We strongly
                            recommend you to turn on your multi-factor authentication. </li>
                        <li> You will need to log in to your account after changing your email. </li>
                    </ul>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="" data-bs-dismiss="modal">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose2(); handleShow3(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* Change Email */}
            {/* Email verification */}
            <Modal show={showModal3} onHide={handleClose3} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Emaill Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group">
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />
                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" id="cancel">Cancel</Button>
                            <Link href="/auth" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* Phone Number  */}
            <Modal show={showModal4} onHide={handleClose4} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="code" type="text" />

                                <InputGroup.Text id="getcode">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose4(); handleShow5(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal5} onHide={handleClose5} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Phone Number
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter Mobile Number</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2">+91</InputGroup.Text>
                                <Form.Control name="code" id="verificode" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter SMS Verification Code</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="smscode" type="text" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Login Password */}
            <Modal show={showModal6} onHide={handleClose6} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose6(); handleShow7(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal show={showModal7} onHide={handleClose7} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Account Restrictions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>For your security, withdrawals will be temporarily unavailable for 24 hours after changing security settings.</p>
                    <div className="d-flex gap-2 mt-3">
                        <Button type="button" className="sitebtn">Cancel</Button>
                        <Button className="btn sitebtn" onClick={() => { handleClose7(); handleShow8(); }}>Confirm</Button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showModal8} onHide={handleClose8} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Security Verification
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Form.Group className="form-group" >
                            <Form.Label>Enter the 6-digit code will be sent to test****@gmail.com</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control name="code" id="verificode" />
                                <InputGroup.Text id="basic-addon2">Get Code</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" onClick={() => { handleClose8(); handleShow9(); }}>Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal show={showModal9} onHide={handleClose9} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change Login Password
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='siteformbg'>
                        <Alert variant="warning">
                            <b>Note :</b>For your security, withdrawals will be temporarily unavaliable for 24 hours after changing security settings
                        </Alert>
                        <Form.Group className="form-group">
                            <Form.Label>Current Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="currentPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>New Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="newPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEye} id="eye1" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Confirm Password</Form.Label>
                            <InputGroup>
                                <Form.Control type="password" id="confirmPassword" />
                                <div className="input-group-append">
                                    <InputGroup.Text> <FontAwesomeIcon icon={faEyeSlash} id="eye3" /> </InputGroup.Text>
                                </div>
                            </InputGroup>
                        </Form.Group>

                        <div className="d-flex gap-2 mt-3">
                            <Button type="button" className="sitebtn" data-bs-dismiss="modal">Cancel</Button>
                            <Link href="" className="btn sitebtn" id="confirm">Confirm</Link>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* protect */}
            <Modal show={showModal10} onHide={handleClose10} className='modalbgt authmodal' aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                       Increase Your Account Security
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="content">Your current security level is low. For better protection of your funds, please enable at least one more verification method.</p>
                    <div className="fundboxb">
                        <a href="#" onClick={() => { handleClose10(); handleShow1(); }} className="table-content lightgraybg">
                            <div>
                                <Image src="assets/images/auth.svg" />
                            </div>
                            <div>
                                <h5>Authenticator App <span className="t-red">(Recommended)</span></h5>
                            </div>
                            <div className="text-end">
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </a>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

export default page