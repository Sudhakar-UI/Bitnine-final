"use client"
import React from "react"
import Link from "next/link"
import Userfooter from '../../components/Userfooter'
import Leftsidemenu from '../../components/Leftsidemenu'
import { Container, Form, Alert, Button, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import { useSideMenu } from "../../SideMenuProvider";
import MobileFooterNav from '@/app/components/Bottommenu';

const Mobilepage = () => {

    const { openMenu } = useSideMenu();

    return (
        <div className="pagecontent gridpagecontent mobilebg innerpagegrid mx-3">
            <article className="">
                <Container className="sitecontainer">
                    <div className="mbheadingbox">
                        <div className="humberbutton">
                            <a href="/dashboard" type="button" className="backbtn" id="backbtn" >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </a>
                        </div>

                        <div className="flex-one-cls flex-grow-1 text-center w-100">
                            <h2 className="heading-title text-center mb-0 flex-1">Delete Account</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>


                    <div className="mt-3">
                        <Alert className="mobile-alert-sec" variant="warning">
                            <b>Note :</b> <br />Please <b className="text-dark">Do Not</b> deposit any assets to  a deleted account. If you do, your funds will be lost, and we will not be able to retrieve them.
                        </Alert>
                    </div>


                    <div className="secttable p-0">
                        <h3>By continuing, you confirm that you have read and agree to the following. After deleting your account,</h3>
                        <ul className="del-accout-li mt-3">
                            <li>All trading capacities and login for your account will be disabled.</li>
                            <li>All API Keys for your account will be deleted.</li>
                            <li>All device for your account will be deleted.</li>
                            <li>All pending withdrawals will be cancelled.</li>
                            <li>All open orders will be cancelled.</li>
                        </ul>


                        <div className="lightgraybg">
                            <ol className="del-accout-li">
                                <li>Account cannot be merged after deletion.</li>
                                <li>Make sure you delete the deposit address of this account from your wallets to avoid assets losses.</li>
                                <li>Make sure you have withdrawn all your assets. Otherwise, you will be deemed to have abandoned all remaining assets in your account. BITnine is not liable for any assets that you fail to withdraw and lose due to account deletion and you will not be able to claim any type of compensation from BITnine for such assets.</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-2">
                        <Form className="siteformbg">
                            <div className="secttable p-0">
                                <h3>Account has been disabled due to :</h3>
                                <ul className="notslist mt-3 checkradiobox">
                                    <li>
                                        <div className="">
                                            <Form.Check type="checkbox" id="switch1" label="I don't understand cryptocurrency and don't want to trade anymore" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="checkbox" id="switch2" label="There is suspicious account activity, I would like to disable login for the account" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="checkbox" id="switch3" label="I have another account already, so I want to delete this one." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="checkbox" id="switch4" label="I don't want to use bitnine anymore." />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="">
                                            <Form.Check type="checkbox" id="switch5" label="Others" />
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <Form.Group className="form-group notslist mt-4 px-1">
                                <div>
                                    <Form.Check type="checkbox" id="understand" label="I fully understand and agree to the above." />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Button type="button" className="btn sitebtn btn-sm" id="deleteaccount">Delete Account</Button>
                            </Form.Group>

                            {/* <Alert variant="danger">
                                Please DO NOT deposit any assets to a deleted account. If you do, your funds will be lost, and we will not be able to retrieve them.
                            </Alert> */}
                        </Form>

                    </div>

                </Container>
            </article>
            <MobileFooterNav />
        </div>
    )
}
export default Mobilepage


