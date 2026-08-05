"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Container,
  Image,
  Nav,
  InputGroup,
  Tab,
  Table,
  Dropdown,
  Form,
  OverlayTrigger,
  Tooltip,
  Pagination,
} from "react-bootstrap";
import Userheader from "../../components/Userheader";
import Userfooter from "../../components/Userfooter";
import Leftsidemenu from "../../components/Leftsidemenu";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCircleInfo,
  faEllipsisV,
  faSearch,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Spotchart from "./statChart";
import ResponsiveTable from "../../components/ResponsiveTable";

const Page = () => {
  const [activePage, setActivePage] = useState(null);

  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const handleShow1 = () => setShowModal1(true);
  const [showModal1, setShowModal1] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  return (
    <div>
      <div className="pagecontent gridpagecontent innerpagegrid">
        <div className="backgroundoverlay" id="backgroundoverlay"></div>
        <Userheader />
        <Leftsidemenu />
        <article className="gridparentbox gridtabtopbox">
          <Container className="sitecontainer walletoverviewbg">
            <div className="wallet-desktop">
              <div className="innerpagecontent">
                <h2 className="h2">Wallet Overview</h2>
                <div className="tabrightbox boxtabb">
                  <Nav variant="pills" className="tabbanner border-0">
                    <Nav.Item>
                      <Link
                        href="deposit"
                        className="sitebtn btn-sm"
                        id="deposit"
                      >
                        Deposit
                      </Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Link
                        href="withdraw"
                        className="sitebtn btn-sm"
                        id="withdraw"
                      >
                        Withdraw
                      </Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Link
                        href="withdraw"
                        className="sitebtn btn-sm"
                        id="withdraw"
                      >
                        Transfer
                      </Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Link
                        href="withdraw"
                        className="sitebtn btn-sm"
                        id="withdraw"
                      >
                        Convert
                      </Link>

                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="flexbox mt-2">
                <div>
                  <div className="balanceshowt totblance panelcontentbox mb-2">
                    <div className="table-content">
                      <div>
                        <h4 className="subhead pb-0">
                          Estimated Balance
                          <span className="ps-1">
                            <FontAwesomeIcon icon={faEye} />
                          </span>
                        </h4>
                        <div>
                          <h4 className="h4">
                            $ 15,2569 <span>BTC</span>
                          </h4>
                          {/* <Form.Select id="convertcrypto" className="form-control co-drpbtn selectimgicon form-select">
                                                    <option>BTC</option>
                                                    <option>ETH</option>
                                                    <option>BNB</option>
                                                    <option>XRP</option>
                                                </Form.Select> */}
                        </div>
                      </div>
                      <div className="text-end">
                        <Image
                          src="assets/images/blanceicon.svg"
                          alt="icon"
                          className="tb-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="panelcontentbox wllettable">
                    <h4 className="subhead">Wallet Balance</h4>
                    <Form className="siteformbg assets-block">
                      <div className="wallet-tbl tabrightbox">
                        <Form.Group className="form-group mo-view">
                          <InputGroup className="supportsearch">
                            <div className="input-group-append">
                              <InputGroup.Text>
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  id="search_refurl"
                                />
                              </InputGroup.Text>
                            </div>
                            <div className="expand-input">
                              <Form.Control
                                type="text"
                                placeholder="Search"
                                id="search-url"
                              />
                            </div>
                          </InputGroup>
                        </Form.Group>
                        <div className="form-check me-2 pt-2">
                          <Form.Check
                            type="checkbox"
                            id="spotcheck"
                            label="Hide assets <1 USD"
                          />
                        </div>
                      </div>
                    </Form>
                        <SimpleBar className="table-responsive sitescroll">
                          <Tab.Container id="left-tabs-example" defaultActiveKey="coin">
                            <div className="innerpagetab historytab">
                              <Nav variant="pills" className="tabbanner mb-1">
                                <Nav.Item> <Nav.Link eventKey="coin">Coin View</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link eventKey="account">Account View</Nav.Link></Nav.Item>
                              </Nav>
                            </div>
                            <Tab.Content>
                              <Tab.Pane eventKey="coin">
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table
                                    className="sitetable table-responsive-stack mb-0"
                                    id="table1"
                                  >
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Balance</th>
                                        <th>Free Balance</th>
                                        <th>Locked Balance</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/btc.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          BTC
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/eth.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          ETH
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ltc.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          LTC
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/bnb.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          BNB
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/trx.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          TRX
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/sol.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          SOL
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/xrp.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          XRP
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ada.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          ADA
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/doge.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          DOGE
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/ton.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          TON
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/hype.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          HYPE
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <Image
                                            src="assets/images/color/usdt.svg"
                                            width={50}
                                            height={50}
                                            alt="coin"
                                            className="coinlisticon"
                                          />
                                          USDT
                                        </td>
                                        <td>0.293985</td>
                                        <td>0.32569</td>
                                        <td>0.00254789</td>
                                        <td>
                                          <Link
                                            href="/deposit"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Deposit
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm me-2"
                                          >
                                            Withdraw
                                          </Link>
                                          <Link
                                            href="/withdraw"
                                            className="btn sitebtn btn-sm"
                                          >
                                            Convert
                                          </Link>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table1" />
                              </Tab.Pane>
                              <Tab.Pane eventKey="account" >
                                <SimpleBar className="table-responsive sitescroll">
                                  <Table className="sitetable table-responsive-stack mb-0" id="table1">
                                    <thead>
                                      <tr>
                                        <th>Account</th>
                                        <th>Amount</th>
                                        <th>Ratio</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="coin-cell">
                                          <Image src="assets/images/spoticon-new.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                          <span>Spot</span>
                                        </td>
                                        <td>$0.293985</td>
                                        <td>$0.00254789</td>
                                        <td>
                                          <Dropdown className="account-drop">
                                            <Dropdown.Toggle id="dropdown-icon-toggle">
                                              <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="fixed-dropdown-menu">
                                              <Dropdown.Item href="/deposit">Transfer</Dropdown.Item>
                                              <Dropdown.Item href="/trade">Trade</Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="coin-cell">
                                          <Image src="assets/images/savings-new.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                          <span>Earn</span>
                                        </td>
                                        <td>$0.293985</td>
                                        <td>$0.00254789</td>
                                        <td>
                                          <Dropdown className="account-drop">
                                            <Dropdown.Toggle id="dropdown-icon-toggle">
                                              <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                            </Dropdown.Toggle>
                                           <Dropdown.Menu className="fixed-dropdown-menu">
                                              <Dropdown.Item href="/withdraw">Transfer</Dropdown.Item>
                                              <Dropdown.Item href="/trade">Trade</Dropdown.Item>
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="coin-cell">
                                          <Image src="assets/images/funding-wallet-new.svg" width={50} height={50} alt="coin" className="coinlisticon" />
                                          <span>Funding</span>
                                        </td>
                                        <td>$0.293985</td>
                                        <td>$0.00254789</td>
                                        <td>
                                          <Dropdown className="account-drop">
                                            <Dropdown.Toggle id="dropdown-icon-toggle">
                                              <span className="elicon faEllipsisV"><FontAwesomeIcon icon={faEllipsisV} /></span>
                                            </Dropdown.Toggle>
                                           <Dropdown.Menu className="fixed-dropdown-menu">
                                              <Dropdown.Item href="/deposit">Deposit</Dropdown.Item>
                                              {/* <Dropdown.Item href="/trade">Trade</Dropdown.Item> */}
                                            </Dropdown.Menu>
                                          </Dropdown>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </Table>
                                </SimpleBar>
                                <ResponsiveTable tableId="table2" />
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </SimpleBar>
                        <ResponsiveTable tableId="table1" />
                        <Pagination>
                          <Pagination.Prev />
                          <Pagination.Ellipsis />
                          <Pagination.Item active={activePage === 1} onClick={() => handlePageClick(1)}>
                            {1}
                          </Pagination.Item>
                          <Pagination.Item active={activePage === 2} onClick={() => handlePageClick(2)} >
                            {2}
                          </Pagination.Item>
                          <Pagination.Item active={activePage === 3} onClick={() => handlePageClick(3)} >
                            {3}
                          </Pagination.Item>
                          <Pagination.Ellipsis />
                          <Pagination.Next />
                        </Pagination>


                   
                    
                  </div>

                </div>
                <div>
                  <div className="balancedirectbox mb-3">
                    <div className="panelcontentbox mb-3">
                      <div className="contentbox table-content">
                        <div>
                          <h5>Total Deposit</h5>
                          <h4>$2.365896</h4>
                        </div>
                        <div>
                          {" "}
                          <Image
                            src="assets/images/deposit1.svg"
                            alt="icon"
                            width={100}
                            height={100}
                          />{" "}
                        </div>
                      </div>
                    </div>
                    <div className="panelcontentbox">
                      <div className="contentbox table-content">
                        <div>
                          <h5>Total Withdraw</h5>
                          <h4>$2.365896</h4>
                        </div>
                        <div>
                          {" "}
                          <Image
                            src="assets/images/withdraw1.svg"
                            alt="icon"
                            width={100}
                            height={100}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panelcontentbox">
                    <h4 className="subhead">Balance Chart</h4>
                    <Spotchart />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </article>
        <Userfooter />
      </div>
    </div>
  );
};

export default Page;
