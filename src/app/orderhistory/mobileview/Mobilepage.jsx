"use client";
import React, { useState } from "react";
import Leftsidemenu from "../../components/Leftsidemenu";
import { Container, Image, Table, Form, Button, Badge, Row, Col } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponsiveTable from "../../components/ResponsiveTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../public/assets/css/mobileview.css'
import MobileFooterNav from '@/app/components/Bottommenu';
import MobileHeader from "@/app/components/MobileHeader";

const Mobilepage = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <div className="pagecontent gridpagecontent mobilebg innerpagegrid openorder-history mx-2">
                <article className="">
                    <Container className="container sitecontainer historypage">

                        <MobileHeader title="Order History" />

                        <div className="whistory-form mt-4">
                            <Form className="siteformbg">

                                <Form.Group className="mb-3">
                                    <Form.Select id="coin">
                                        <option>Open Order History</option>
                                        <option>Withdraw History</option>
                                        <option>Deposit History</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className="d-flex gap-2">
                                    <Form.Group className="form-group dateinput w-100">
                                        <DatePicker selected={startDate} placeholder="From Date" id='startdate' onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                    </Form.Group>

                                    <Form.Group className="form-group dateinput w-100">
                                        <DatePicker selected={endDate} placeholder="To Date" id='enddate' onChange={(date) => setEndDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                    </Form.Group>
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Select id="coin">
                                        <option>All</option>
                                        <option>BTC</option>
                                        <option>BNB</option>
                                        <option>ETH</option>
                                        <option>TRX</option>
                                        <option>SOL</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className="verify-iden">
                                    <Form.Group className="form-group d-flex gap-2">
                                        <Button className="btn security-canel-btn btn-sm w-100" id="clear">
                                            Clear
                                        </Button>
                                        <Link href="/" className="btn sitebtn btn-sm red-btn" id="reset">
                                            Reset
                                        </Link>
                                    </Form.Group>
                                </div>
                            </Form>
                        </div>

                        <div className="panelcontentbox priceboxflex">
                            <SimpleBar className="table-responsive sitescroll">
                                <Table className="depo-hist-table sitetable table-responsive-stack" id="table1">
                                    <tbody>
                                        <tr>
                                            <td className="text-start" colSpan={3}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src="assets/images/color/btc.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium fs-6">Bitcoin</span>
                                                        <span>BTC</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="my-2 p-0" >
                                                <hr className="m-0" />
                                            </td>

                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Network</span>
                                                    <span className="table-white-tt">BTC</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="table-white-tt">25-11-2025, 05:45:11</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="table-white-tt">FDARTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Receiver</span>
                                                    <span className="table-white-tt">DETFTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">TX Hash</span>
                                                    <span className="table-white-tt">YRDSTAFPJ564685SF4FS</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Withdraw</span>
                                                    <span className="table-white-tt">65453213</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Status</span>
                                                    <span className="t-green">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-start" colSpan={3}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src="assets/images/color/eth.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium fs-6">Ethereum</span>
                                                        <span>ETH</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="my-2 p-0" >
                                                <hr className="m-0" />
                                            </td>

                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Network</span>
                                                    <span className="table-white-tt">BTC</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="table-white-tt">25-11-2025, 05:45:11</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="table-white-tt">FDARTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Receiver</span>
                                                    <span className="table-white-tt">DETFTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">TX Hash</span>
                                                    <span className="table-white-tt">YRDSTAFPJ564685SF4FS</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Withdraw</span>
                                                    <span className="table-white-tt">65453213</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Status</span>
                                                    <span className="t-green">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-start" colSpan={3}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src="assets/images/color/bnb.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium fs-6">BNB</span>
                                                        <span>BNB</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="my-2 p-0" >
                                                <hr className="m-0" />
                                            </td>

                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Network</span>
                                                    <span className="table-white-tt">BTC</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="table-white-tt">25-11-2025, 05:45:11</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="table-white-tt">FDARTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Receiver</span>
                                                    <span className="table-white-tt">DETFTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">TX Hash</span>
                                                    <span className="table-white-tt">YRDSTAFPJ564685SF4FS</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Withdraw</span>
                                                    <span className="table-white-tt">65453213</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Status</span>
                                                    <span className="t-green">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-start" colSpan={3}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src="assets/images/color/trx.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium fs-6">TRX</span>
                                                        <span>TRX</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="my-2 p-0" >
                                                <hr className="m-0" />
                                            </td>

                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Network</span>
                                                    <span className="table-white-tt">BTC</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="table-white-tt">25-11-2025, 05:45:11</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="table-white-tt">FDARTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Receiver</span>
                                                    <span className="table-white-tt">DETFTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">TX Hash</span>
                                                    <span className="table-white-tt">YRDSTAFPJ564685SF4FS</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Withdraw</span>
                                                    <span className="table-white-tt">65453213</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Status</span>
                                                    <span className="t-green">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-start" colSpan={3}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <Image src="assets/images/color/sol.svg" width="{50}" height="{50}" alt="coin" className="coinicon" />
                                                    <div className="d-flex flex-column">
                                                        <span className="fw-medium fs-6">SOL</span>
                                                        <span>SOL</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="my-2 p-0" >
                                                <hr className="m-0" />
                                            </td>

                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Network</span>
                                                    <span className="table-white-tt">BTC</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Date & Time</span>
                                                    <span className="table-white-tt">25-11-2025, 05:45:11</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Sender</span>
                                                    <span className="table-white-tt">FDARTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Receiver</span>
                                                    <span className="table-white-tt">DETFTAFPJ564685SF4FS</span>
                                                </div>

                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">TX Hash</span>
                                                    <span className="table-white-tt">YRDSTAFPJ564685SF4FS</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Withdraw</span>
                                                    <span className="table-white-tt">65453213</span>
                                                </div>
                                            </td>
                                            <td className="text-start">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <span className="t-gray">Status</span>
                                                    <span className="t-green">Confirm</span>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>

                            </SimpleBar>
                            <ResponsiveTable tableId="table1" />
                        </div>
                    </Container>
                </article>
                <MobileFooterNav />
            </div>
        </div>
    );
};

export default Mobilepage;
