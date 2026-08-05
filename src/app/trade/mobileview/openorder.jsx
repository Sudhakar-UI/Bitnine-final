import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Table, Nav, Tab, Button } from 'react-bootstrap';
import Link from 'next/link';
import ResponsiveTable from '../../components/ResponsiveTable';


const openorder = () => {
    return (
        <div className="griddragoption openhistory-mb">
            <Tab.Container defaultActiveKey="openhistory">
                <div className="innerpagetab historytab">
                    <Nav variant="pills" className="tabbanner">
                        <Nav.Item><Nav.Link eventKey="openhistory" id='openhistory'>Open History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="orderhistory" id='orderhistory'>Order History</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="tradehistory" id='tradehistory'>Trade History</Nav.Link></Nav.Item>
                    </Nav>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="openhistory">
                        <div>
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                    <tbody>
                                        <tr>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="t-gray">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">30-11-2023, 11:55:45</span>
                                                    <span className="table-white-tt fw-semibold">Limit</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="t-gray">Receiver</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJdG6GMaP</span>
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJnG6GMaP</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Order</span>
                                                    <span className="t-gray">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-green fw-semibold">Buy</span>
                                                    <span className="t-green fw-semibold">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="t-gray">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">30-11-2023, 11:55:45</span>
                                                    <span className="table-white-tt fw-semibold">Limit</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="t-gray">Receiver</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJdG6GMaP</span>
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJnG6GMaP</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Order</span>
                                                    <span className="t-gray">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-green fw-semibold">Buy</span>
                                                    <span className="t-green fw-semibold">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="t-gray">Order Type</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">30-11-2023, 11:55:45</span>
                                                    <span className="table-white-tt fw-semibold">Limit</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="t-gray">Receiver</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJdG6GMaP</span>
                                                    <span className="table-white-tt fw-semibold">mxCRLrADoJnG6GMaP</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Order</span>
                                                    <span className="t-gray">Status</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-green fw-semibold">Buy</span>
                                                    <span className="t-green fw-semibold">Confirm</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <Button
                                                    type="button"
                                                    className="sitebtn site-blue-btn"
                                                >
                                                    Cancel
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="orderhistory">

                    </Tab.Pane>
                    <Tab.Pane eventKey="tradehistory">

                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default openorder