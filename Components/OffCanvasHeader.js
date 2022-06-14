/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Router from "next/router";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
  NavLink,
  Offcanvas,
} from "react-bootstrap";
import style from "../styles/header.module.css";
import wishlist from "../public/Images/cardts.svg";
import Link from "next/link";
const Header = () => {
  const [isActive, setIsActive] = useState("/");

  useEffect(() => {
    console.log(window.location.pathname, "abcd");
    setIsActive(window.location.pathname);
  }, []);

  return (
    <>
      <Container fluid className={style.headerContainer}>
        {/* <Container> */}
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          className={style.nav}
        >
          <Container>
            <div>
              <Link href="/">
                <img
                  src="../images/mangcoding.png"
                  className={style.logoImage}
                />
              </Link>
            </div>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            {/* <Navbar.Collapse className={style.navlinkEnd}> */}
            <Nav className={style.navbarnav}>
              <Nav.Link
                href="/"
                className={style.navlink}
                active={isActive === "/"}
              >
                Home
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                href="/Shop"
                className={style.navlink}
                active={isActive === "/Shop"}
              >
                Shop
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={style.navlink}
                active={isActive === "/About"}
              >
                About Us
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                href="Contact"
                className={style.navlink}
                active={isActive === "/Contact"}
              >
                Contact
                <span className="dot"></span>
              </Nav.Link>

              <div className={style.iconDiv}>
                <Nav.Link
                  href="/WishList"
                  className={style.navlink}
                  active={isActive === "/WishList"}
                >
                  <div className={style.cartDiv}>
                    <img
                      src="../Images/cardts.svg"
                      height={24}
                      width={24}
                      className={style.cardImage}
                    />
                    <span className="dot"></span>
                  </div>
                </Nav.Link>
                <Nav.Link
                  className={style.navlink}
                  active={isActive === "/Like"}
                >
                  <div className={style.likeDiv}>
                    <img src="../Images/herts.svg" height={24} width={24} />
                    <span className="dot"></span>
                  </div>
                </Nav.Link>
                <Nav.Link
                  className={style.navlink}
                  href="Login"
                  active={isActive === "/Login"}
                >
                  <div className={style.profileDiv}>
                    <img
                      src="../Images/user.svg"
                      height={24}
                      width={24}
                      className={style.cardImage}
                    />
                    <span className="dot"></span>
                  </div>
                </Nav.Link>
              </div>
              <div className={style.searchDiv}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className={style.searchForm}
                    aria-label="Search"
                  />
                </Form>
              </div>
            </Nav>
            {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
        {/* </Container> */}
      </Container>

      <div className={style.mobile}>
        <Navbar expand={false} className={style.nav}>
          <Container>
            <Navbar.Brand href="#">
              <div>
                <Link href="/">
                  <img
                    src="../images/mangcoding.png"
                    className={style.logoImage}
                  />
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="/"
                    className={style.navlinks}
                    active={isActive === "/"}
                    style={{
                      color: isActive === "/" ? "red" : "blue",
                    }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="/Shop"
                    className={style.navlinks}
                    active={isActive === "/Shop"}
                  >
                    Shop
                  </Nav.Link>
                  <Nav.Link
                    href="/About"
                    className={style.navlinks}
                    active={isActive === "/About"}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="Contact"
                    className={style.navlinks}
                    active={isActive === "/Contact"}
                  >
                    Contact
                  </Nav.Link>

                  <div className={style.iconDiv}>
                    <Nav.Link
                      href="/WishList"
                      className={style.navlinks}
                      active={isActive === "/WishList"}
                    >
                      <div className={style.cartDiv}>
                        <img
                          src="../Images/offcanvasCart.svg"
                          height={24}
                          width={24}
                          className={style.cardImage}
                        />
                      </div>
                    </Nav.Link>
                    <Nav.Link
                      className={style.navlinks}
                      active={isActive === "/Like"}
                    >
                      <div className={style.likeDiv}>
                        <img
                          src="../Images/offcanvasHeart.svg"
                          height={24}
                          width={24}
                        />
                      </div>
                    </Nav.Link>
                    <Nav.Link
                      className={style.navlinks}
                      href="Login"
                      active={isActive === "/Login"}
                    >
                      <div className={style.profileDiv}>
                        <img
                          src="../Images/offcanvasUser.svg"
                          height={24}
                          width={24}
                          className={style.cardImage}
                        />
                      </div>
                    </Nav.Link>
                  </div>
                  <div className={style.searchDivOffCanvas}>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className={style.searchFormOffcanvas}
                        aria-label="Search"
                      />
                    </Form>
                  </div>
                </Nav>

                {/* <Button variant="outline-success">Contact Us</Button> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
