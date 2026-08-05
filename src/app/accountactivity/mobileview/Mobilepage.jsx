"use client"
import React from "react"
import Link from "next/link"
import { Container, Table, Image, Tab, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import ResponsiveTable from '../../components/ResponsiveTable';
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
                            <h2 className="heading-title text-center mb-0 flex-1">Account Activity</h2>
                        </div>
                        <div className="humberbutton" onClick={openMenu}>
                            <button type="button" className="menubtn border-0 p-0" id="menubtn">
                                <Image src="assets/images/menu-bar.svg" className='menu-bar' />
                            </button>
                        </div>
                    </div>

                    <Tab.Container defaultActiveKey="loginactivity">
                        <div className="innerpagetab historytab">
                            <Nav variant="pills" className="tabbanner">
                                <Nav.Item><Nav.Link eventKey="loginactivity">Login Activity</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="secuactivity">Security Activity</Nav.Link></Nav.Item>
                            </Nav>
                        </div>
                        <Tab.Content className="contentbox">
                            <Tab.Pane eventKey="loginactivity" className="login-act">
                                <div className="panelcontentbox">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                            <tbody>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="secuactivity" className="sec-act">
                                <div className="panelcontentbox">
                                    <SimpleBar className="table-responsive sitescroll">
                                        <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                            <tbody>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Device</span>
                                                            <span className="t-gray">Date & Time</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Chrome 120.0.0.0</span>
                                                            <span className="table-white-tt fw-semibold">25-11-2025, 05:45</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Location</span>
                                                            <span className="t-gray">IP Address</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">India</span>
                                                            <span className="table-white-tt fw-semibold">103.116.149.10</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="t-gray">Source</span>
                                                            <span className="t-gray">Action</span>
                                                        </div>

                                                    </td>
                                                    <td className="text-start">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <span className="table-white-tt fw-semibold">Windows 10</span>
                                                            <span className="t-green">Logout</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </SimpleBar>
                                    <ResponsiveTable tableId="table1" />
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>


                </Container>
            </article>
            <MobileFooterNav />
        </div>
    )
}
export default Mobilepage


