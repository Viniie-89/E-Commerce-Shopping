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
} from "react-bootstrap";
import style from "../styles/header.module.css";
import wishlist from "../public/Images/cardts.svg";
import Link from "next/link";
const Header = () => {
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive(window.location.pathname);
  }, []);

  return (
    <Container fluid className={style.headerContainer}>
      {/* <Container> */}
      <Navbar collapseOnSelect expand="lg" variant="dark" className={style.nav}>
        <Container>
          <div>
            <Link href="/">
              <img src="../images/mangcoding.png" className={style.logoImage} />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className={style.navlinkEnd}>
            <Nav className={style.navbarnav}>
              <Nav.Link
                href="/"
                className={style.navlink}
                active={isActive === "/"}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/Shop"
                className={style.navlink}
                active={isActive === "/Shop"}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={style.navlink}
                active={isActive === "/About"}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="Contact"
                className={style.navlink}
                active={isActive === "/Contact"}
              >
                Contact
              </Nav.Link>

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
                </div>
              </Nav.Link>
              <Nav.Link className={style.navlink} active={isActive === "/Like"}>
                <div className={style.likeDiv}>
                  <img src="../Images/herts.svg" height={24} width={24} />
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
                </div>
              </Nav.Link>
              <div className={style.searchDiv}>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className={style.searchForm}
                    aria-label="Search"
                  />
                  {/* <div className={style.searchImageDiv}>
                    <img
                      src="../Images/searchImage.png"
                      height={18}
                      width={18}
                    />
                  </div> */}
                </Form>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Container> */}
    </Container>
  );
};

export default Header;
