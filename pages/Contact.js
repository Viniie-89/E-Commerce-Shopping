/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import style from "../styles/contact.module.css";
import ContactForm from "../Components/ContactForm";
const Contact = () => {
  return (
    <>
      <Header />
      <Container
        fluid
        className={style.contactContainer}
        style={{ position: "relative" }}
      >
        <Container className={style.contactCon}>
          <Row>
            <Col>
              <div className={style.contactDiv}>
                <h5 className={style.homeText}>Home</h5>
                <h5 className={style.slash}>/</h5>
                <h5 className={style.contactText}>Contact</h5>
              </div>
              <h2 className={style.contacth2}>Contact</h2>
              <p className={style.contactPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
            </Col>
          </Row>
        </Container>
        <div className={style.contactLoc}>
          <div
            style={{
              height: "250px",
              width: "428px",
              marginRight: "4%",
              backgroundColor: "white",
              boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)",
            }}
            className={style.cardDiv1}
          >
            <img
              src="../Images/location logo.png"
              height={42}
              width={42}
              className={style.locationImage}
            />
            <h2 className={style.locationText}>Location</h2>
            <p className={style.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam.
            </p>
          </div>
          <div
            style={{
              height: "250px",
              width: "428px",
              backgroundColor: "white",
              boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.1)",
            }}
            className={style.cardDiv1}
          >
            <img
              src="../Images/call logo.png"
              height={42}
              width={42}
              className={style.callImage}
            />
            <h2 className={style.contactTexts}>Contact</h2>
            <h6 className={style.tshirtEmail}>T-shirt12@gmail.com</h6>
            <h6 className={style.tshirtNumber}>(021) 12345678</h6>
          </div>
        </div>
      </Container>

      {/* <Container fluid>
        <Container> */}
      {/* </Container>
      </Container> */}

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
