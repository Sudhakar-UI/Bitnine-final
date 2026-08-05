import React, { useEffect } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Button } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import '../../../public/assets/css/user.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckCircle, faEye } from '@fortawesome/free-solid-svg-icons';
import HoverDropdown from './Hoverdropdown';
import { useTheme } from "../context/ThemeContext";

const Userheader = () => {

  const pathname = usePathname();

  const { isNightMode, toggleNightMode } = useTheme();

  useEffect(() => {
    document.body.classList.add('userpanelpage');
    return () => {
      document.body.classList.remove('userpanelpage');
    };
  })
  const sidebarCollapse = () => {
    const element = document.querySelector('#leftsidemenu');
    const element1 = document.querySelector('#backgroundoverlay');
    const element2 = document.querySelector('#leftsidemenumobile');

    if (window.innerWidth <= 1080) {
      if (element) {
        element.classList.add('active');
      }
      if (element1) {
        element1.classList.add('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.add('pagewrapperbox');
    } else {
      if (element) {
        element.classList.remove('active');
      }
      if (element1) {
        element1.classList.remove('active');
      }
      if (element2) {
        element2.classList.add('active');
      }
      document.body.classList.remove('pagewrapperbox');
    }
  };
  return (

    <header className="headermenu headermenu-user">
      <Navbar expand="lg" className="headbg uheadbg">
        <Container>
          <div className="mobiletoggle">
            <Button type="button" onClick={sidebarCollapse} className="btn sidebtntoggle">
              <Image src="assets/images/menubar.svg" width={100} height={57} alt="logo" />
            </Button>
          </div>
          <Navbar.Brand>
            <Link href="/">
              {isNightMode ? (
                <Image src="assets/images/logo-light.svg" width={100} height={57} className="logo " alt="logo" />
              ) : (
                <Image src="assets/images/logo.svg" width={100} height={57} className="logo " alt="logo" />
              )}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav leftheadbg">
              <Nav.Item><Link href="/markets" id="marketslink" className={`nav-link ${pathname === '/markets' ? 'active' : ''}`}>Markets</Link></Nav.Item>
              <Nav.Item><Link href="/trade" id="trade" className={`nav-link ${pathname === '/trade' ? 'active' : ''}`}>Trade</Link></Nav.Item>
              <HoverDropdown title="Earn" id="earnlink">
                <NavDropdown.Item as={Link} href="/saving" className={`${pathname === '/saving' ? 'active' : ''}`}>
                  <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/overview.svg" alt="icon" width={100} height={100} /></span></span><span>Overview<br /></span></div>
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/earn" className={`${pathname === '/earn' ? 'active' : ''}`}>
                  <div className="tableicon"><span><span className="iconboxbg"><Image src="assets/images/earnhistory.svg" alt="icon" width={100} height={100} /></span></span><span>History<br /></span></div>
                </NavDropdown.Item>
              </HoverDropdown>
              <Nav.Item><Link href="/convert" id="convertlink" className={`nav-link ${pathname === '/convert' ? 'active' : ''}`}>Convert</Link></Nav.Item>
            </Nav>
            <Nav className="navbar-nav ms-auto rightheadbg">
              {pathname === '/trade' ? (
                <>
                  <Nav.Item>
                    <Link href="#0" className="nav-link px-1" onClick={toggleNightMode}>
                      {isNightMode ? (
                        <Image src="./assets/images/sun-icon.svg" className="menuicon menuicon-moon"></Image>
                      ) : (
                        <Image src="./assets/images/moon-icon.svg" className="menuicon menuicon-moon"></Image>
                      )}
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link
                      href="/signin"
                      id="login"
                      className="nav-link btn tradebtn"
                    >
                      Sign In
                    </Link>
                  </Nav.Item>
                  <Nav.Item className="me-3">
                    <Link
                      href="/signup"
                      id="register"
                      className="nav-link btn tradebtn2 me-1 ms-2"
                    >
                      Sign Up
                    </Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Link
                      href="/deposit"
                      className={`nav-link btn sitebtn webhide mt-1  ${pathname === '/deposit' ? 'active' : ''}`}
                      id="depositlink"
                    >
                      Deposit
                    </Link>
                  </Nav.Item>
                  <HoverDropdown title="Assets" id="assetsdrp" className="webhide">
                    <NavDropdown.Item as={Link} href="/wallet" id="walletlink" className={`${pathname === '/wallet' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/walleticon.svg" alt="icon" width={100} height={100} /></span>Wallet</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/deposit" id="depositlink" className={`${pathname === '/deposit' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/depositicon1.svg" alt="icon" width={100} height={100} /></span>Deposit</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/withdraw" id="withdrawlink" className={`${pathname === '/withdraw' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/withdrawicon1.svg" alt="icon" width={100} height={100} /></span>Withdraw</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/deposithistory" id="depositlink" className={`${pathname === '/deposithistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/dpsthistory.svg" alt="icon" width={100} height={100} /></span>Deposit History</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/withdrawhistory" id="withdrawlink" className={`${pathname === '/withdrawhistory' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/wthdrawhistory.svg" alt="icon" width={100} height={100} /></span>Withdraw History</NavDropdown.Item>
                  </HoverDropdown>
                  <NavDropdown title={<div className="pull-left notifyicon"><Image src="assets/images/langicon.svg" className="menuicon" alt="user" width={100} height={57} /></div>} id="basic-nav-dropdown" className="langmenu">
                    <SimpleBar className="chat-notification">
                      <NavDropdown.Item as={Link} href="/" className="active">
                        <span className="langenicon"><Image src="assets/images/eng.svg" alt="icon" width={100} height={100} /></span>
                        English
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/" >
                        <span className="langenicon"><Image src="assets/images/ch.svg" alt="icon" width={100} height={100} /></span>
                        Chinese
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/">
                        <span className="langenicon"><Image src="assets/images/ja.svg" alt="icon" width={100} height={100} /></span>
                        Japanese
                      </NavDropdown.Item>
                    </SimpleBar>
                  </NavDropdown>
                  <Nav.Item>
                    <Link href="#0" className="nav-link px-1" onClick={toggleNightMode}>
                      {isNightMode ? (
                        <Image src="./assets/images/sun-icon.svg" className="menuicon menuicon-moon"></Image>
                      ) : (
                        <Image src="./assets/images/moon-icon.svg" className="menuicon menuicon-moon"></Image>
                      )}
                    </Link>
                  </Nav.Item>
                  <HoverDropdown title={<div className="pull-left"><Image src="assets/images/bell.svg" className="menuicon" alt="user" width={100} height={57} /> <span className="counticon"></span></div>} id="basic-nav-dropdown" className="notifyicon">
                    <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>Notifications</p></NavDropdown.Item>
                    <SimpleBar className="chat-notification">
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                    </SimpleBar>
                  </HoverDropdown>
                  <HoverDropdown title={<div className="pull-left"><Image src="assets/images/support.svg" className="menuicon" alt="user" width={100} height={57} /> <span className="counticon"></span></div>} id="basic-nav-dropdown" className="notifyicon">
                    <NavDropdown.Item className="userprofiledrop" as={Link} href="/support"><p>Notifications</p></NavDropdown.Item>
                    <SimpleBar className="chat-notification">
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} href="/support">Test Message<br /><small>July 30, 2025</small><span className="righticon">
                        <Image src="assets/images/righticon.svg" alt="icon" width={100} height={100} /></span>
                      </NavDropdown.Item>
                    </SimpleBar>
                  </HoverDropdown>

                  <HoverDropdown className="usermenudrop" title={<div className="pull-left"><Image src="assets/images/profile.svg" className="photopic" alt="user" /></div>} id="profiledrp">
                    <NavDropdown.Item as={Link} href="/profile" className="profilesubdropbox">
                      <span className="photopic">
                        <Image src="assets/images/profile.svg" alt="icon" width={100} height={100} id="profile" />
                      </span>
                      <h5>Johnwilliam@gmail.com<span className="t-gray ms-1"><span className="t-green"> <FontAwesomeIcon icon={faCheckCircle} /></span></span><br /><span className="t-gray">username</span></h5>
                    </NavDropdown.Item>
                    <hr />
                    <NavDropdown.Item as={Link} href="/dashboard" id="dashboardlink"><span className="iconboxbg"><Image src="assets/images/homeicon.svg" alt="icon" width={100} height={100} /></span>Dashboard</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/profile" id="profilelink"><span className="iconboxbg"><Image src="assets/images/usericon.svg" alt="icon" width={100} height={100} /></span>Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/security" id="securitylink"><span className="iconboxbg"><Image src="assets/images/securityicon.svg" alt="icon" width={100} height={100} /></span>Security</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/kyc" id="kyclink" className={`${pathname === '/kyc' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/kycicon-1.svg" alt="icon" width={100} height={100} /></span>Kyc</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/referral" id="reflink" className={`${pathname === '/referral' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/reficon1.svg" alt="icon" width={100} height={100} /></span>Referral</NavDropdown.Item>
                    <NavDropdown.Item as={Link} href="/support" id="supportlink" className={`${pathname === '/support' ? 'active' : ''}`}><span className="iconboxbg"><Image src="assets/images/supporticon.svg" alt="icon" width={100} height={100} /></span>Support</NavDropdown.Item>
                    <hr />
                    <NavDropdown.Item as={Link} href="/" id="logoutlink"><span className="iconboxbg"><Image src="assets/images/logouticon.svg" alt="icon" width={100} height={100} /></span>Logout</NavDropdown.Item>
                  </HoverDropdown>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Userheader