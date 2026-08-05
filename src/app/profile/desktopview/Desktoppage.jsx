"use client"
import React, { useState } from 'react';
import { Container, Form, Row, Col, Image, Button,Table  } from 'react-bootstrap';
import Userheader from '../../components/Userheader';
import Userfooter from '../../components/Userfooter';
import Leftsidemenu from '../../components/Leftsidemenu';
import UploadForm from '../UploadForm';
import 'react-loading-skeleton/dist/skeleton.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const page = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="pagecontent gridpagecontent innerpagegrid">
            <div className="backgroundoverlay" id="backgroundoverlay"></div>
            <Userheader />
            <Leftsidemenu />
            <article className="gridparentbox">
                <Container className="sitecontainer profilepage">
                    <div className="innerpagecontent">
                        <h2 className="h2">My Acccount</h2>
                    </div>
                    <div className="panelcontentbox gradientdarkbg p-0">
                        <div className="profiletopbanner table-content text-center"></div>
                        <div className="flexbox pf-flexbox">
                            <div className="profilebox">
                                <div className="profilimg">
                                    <div className="profilepic" style={{ backgroundImage: 'url(../assets/images/profile.svg)' }} id='profilepic'>
                                    </div>
                                    <UploadForm />
                                </div>
                                <div className="profiledatainfo mt-3">
                                    <h3 className="h5"> Johnwilliam <span className="t-red ms-2">
                                        <FontAwesomeIcon icon={faTimesCircle} />
                                        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
                                    </span></h3>
                                    <h4><span className="desc t-gray">Update your nickname and manage your account.  <small className='t-red'>(Upload your image like jpg,jpeg,png (MAX: 1MB))</small></span></h4>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flexbox pf-box mt-3'>
                        <div className="panelcontentbox">
                              <h2 className="subhead pb-3">Your Profile Details</h2>
                            <div className="basicinfo">
                                <Form className="siteformbg">                                  
                                    <SimpleBar className="table-responsive">
                                        <Table className="sitetable m-0" id='table1'>
                                            <tbody>
                                                <tr>
                                                    <td><h4>User Name</h4></td>
                                                    <td>Johnwilliam</td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Email Address</h4></td>
                                                    <td>Johnwilliam@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td><h4>Bio</h4></td>
                                                    <td>test Bio.</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </SimpleBar>
                                </Form>
                            </div>
                        </div>
                        <div className="panelcontentbox">
                            <h2 className="subhead">Basic Informations</h2>
                            <Form className="siteformbg">
                                <Row>
                                    <Col lg={6} md={6}>
                                        <Form.Group className="form-group">
                                            <Form.Label>User Name</Form.Label>
                                            <input className="form-control" id='username' />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={6}>
                                        <Form.Group className="form-group dateinput">
                                            <Form.Label>Birth Date</Form.Label>
                                            <DatePicker selected={startDate} placeholder="From Date" id='dob' onChange={(date) => setStartDate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown dropdownMode="select" className="form-control" />
                                        </Form.Group>

                                    </Col>
                                    <Col lg={12} md={12}>
                                        <Form.Group className="form-group">
                                            <Form.Label>Bio</Form.Label>
                                            <textarea className="form-control" rows={2} id='bio'></textarea>
                                        </Form.Group>
                                    </Col>

                                    <div className="form-group profbtn m-0">
                                        <Button type="submit" className="btn sitebtn" id="editsubmit">Submit</Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>

                    </div>
                </Container>
            </article>
            <Userfooter />
        </div >
    )
}

export default page