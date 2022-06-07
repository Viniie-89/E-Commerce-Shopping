/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/about.module.css";
import AboutData from "../Components/AboutData";

const About = () => {
  return (
    <>
      <Header />
      <Container fluid className={style.aboutContainer}>
        <Container className={style.aboutCon}>
          <Row>
            <Col xl={6} lg={5} md={12} className={style.col1}>
              <div className={style.homeDiv}>
                <h5 className={style.homeText}>Home</h5>
                <h5 className={style.slash}> / </h5>
                <h5 className={style.aboutUsText}>About Us</h5>
              </div>
              <h3 className={style.aboutUsTitle}>About Us</h3>
              <p className={style.aboutPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
            </Col>
            <Col xl={6} lg={7} md={12} className={style.aboutImageBackground}>
              <img
                src="../Images/imageAbout.png"
                height={268}
                width={483}
                className={style.image}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutData />
      <Footer />
    </>
  );
};

export default About;
