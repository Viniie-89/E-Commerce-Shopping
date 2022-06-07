/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col, NavLink, NavbarBrand } from "react-bootstrap";
import style from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <Container fluid className={style.footerContainer}>
      <Container className={style.footerCon}>
        <Row>
          <Col xl={6} lg={12} md={12} sm={12}>
            <div>
              <img src="../images/footerLogo.png" height={33.96} width={160} />
            </div>
            <p className={style.footerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus.{" "}
            </p>
            <div className={style.footerButtonDiv}>
              <button className={style.footerLoginButton}>Login Now</button>
            </div>
          </Col>
          <Col
            xl={6}
            lg={12}
            md={12}
            sm={12}
            className={style.footerSecondPart}
          >
            <Row>
              <Col
                xs={12}
                sm={6}
                md={3}
                xl={3}
                lg={3}
                className={style.footerCol1}
              >
                <h5 className={style.footerHome}>Home</h5>
                <h6 className={style.footerHomeList}>Product</h6>
                <h6 className={style.footerHomeList}>Category</h6>
                <h6 className={style.footerHomeList}>Shop</h6>
                <h6 className={style.footerHomeList}>Login</h6>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={3}
                xl={3}
                lg={3}
                className={style.footerCol2}
              >
                <h5 className={style.footerHome}>Shop</h5>
                <h6 className={style.footerHomeList}>T-shirts</h6>
                <h6 className={style.footerHomeList}>Jacket</h6>
                <h6 className={style.footerHomeList}>Shirt</h6>
                <h6 className={style.footerHomeList}>Jeans</h6>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={3}
                xl={3}
                lg={3}
                className={style.footerCol3}
              >
                <h5 className={style.footerHome}>Category</h5>
                <h6 className={style.footerHomeList}>Men</h6>
                <h6 className={style.footerHomeList}>Children</h6>
                <h6 className={style.footerHomeList}>Women</h6>
              </Col>
              <Col
                xs={12}
                sm={6}
                md={3}
                xl={3}
                lg={3}
                className={style.footerCol4}
              >
                <h5 className={style.footerHome}>Contact</h5>
                <NavLink className={style.footerHomeListEmail}>
                  mangcoding@gmail.com
                </NavLink>
                <div className="d-flex">
                  <NavbarBrand>
                    <img src="../Images/facebookIcon.png" />
                  </NavbarBrand>

                  <NavbarBrand>
                    <img src="../Images/twetter.png" />
                  </NavbarBrand>

                  <NavbarBrand>
                    <img src="../Images/linkedin.png" />
                  </NavbarBrand>

                  <NavbarBrand>
                    <img src="../Images/instagram.png" />
                  </NavbarBrand>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </Container>
  );
};

export default Footer;
