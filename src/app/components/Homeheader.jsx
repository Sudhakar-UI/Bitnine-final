import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Navbar, Nav, Image, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "../../../public/assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HoverDropdown from "./Hoverdropdown";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import { useTheme } from "../context/ThemeContext";

const Homeheader = () => {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.remove("userpanelpage");
  });

  const { isNightMode, toggleNightMode } = useTheme();

  return (
    <header className="headermenu">
      <Navbar expand="lg" className="headbg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              {isNightMode ? (
                <Image
                  src="assets/images/logo-light.svg"
                  width={100}
                  height={57}
                  className="logo"
                  alt="logo"
                />
              ) : (
                <Image
                  src="assets/images/logo.svg"
                  width={100}
                  height={57}
                  className="logo"
                  alt="logo"
                />
              )}
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-between"
          >
            <Nav className="navbar-nav leftheadbg mx-auto">
              <Nav.Item>
                <Link
                  href="/trade"
                  id="tradelink"
                  className={`nav-link ${pathname === "/trade" ? "active" : ""
                    }`}
                >
                  Markets
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/saving"
                  id="savingslink"
                  className={`nav-link ${pathname === "/saving" ? "active" : ""
                    }`}
                >
                  Trade
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  href="/markets"
                  id="marketslink"
                  className={`nav-link ${pathname === "/markets" ? "active" : ""
                    }`}
                >
                  Earn
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/#features" id="featureslink" className="nav-link">
                  Features
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link href="/#aboutus" id="aboutuslink" className="nav-link">
                  Convert
                </Link>
              </Nav.Item>
            </Nav>
            <Nav className="navbar-nav rightheadbg">
              <Nav.Item>
                <Link
                  href="/signin"
                  id="login"
                  className="nav-link btn sitebtn2"
                >
                  Sign In
                </Link>
              </Nav.Item>
              <Nav.Item className="me-3">
                <Link
                  href="/signup"
                  id="register"
                  className="nav-link btn borderbtn2 me-1 ms-2"
                >
                  Sign Up
                </Link>
              </Nav.Item>

              <div className="vr-line"></div>

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
                className="langmenu"
              // style={{ paddingInline: "10px", paddingBlock: "0px" }}
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

              <Nav.Item>
                <Link href="#0" className="nav-link px-1" onClick={toggleNightMode}>
                  {isNightMode ? (
                    <Image
                      src="./assets/images/sun-icon.svg"
                      alt="Light mode"
                      className="menuicon"
                    />
                  ) : (
                    <Image
                      src="./assets/images/moon-icon.svg"
                      alt="Dark mode"
                      className="menuicon"
                    />
                  )}
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Homeheader;
