/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import OffCanvasHeader from "../Components/OffCanvasHeader";

import Footer from "../Components/Footer";
import style from "../styles/myAccount.module.css";
const MyAccount = () => {
  return (
    <>
      <OffCanvasHeader />
      <Container fluid className={style.aboutContainer}>
        <Container className={style.aboutCon}>
          <Row>
            <Col xl={6} lg={5} md={12} className={style.col1}>
              <div className={style.homeDiv}>
                <h5 className={style.homeText}>Home</h5>
                <h5 className={style.slash}> / </h5>
                <h5 className={style.aboutUsText}>My Account</h5>
              </div>
              <h3 className={style.aboutUsTitle}>My Account</h3>
              <p className={style.aboutPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
            </Col>
            <Col xl={6} lg={7} md={12} className={style.aboutImageBackground}>
              <Card className={style.myProfileCard}>
                <div>
                  <img
                    src="../Images/myProfileImage.png"
                    width={150}
                    height={150}
                    style={{ position: "relative" }}
                  ></img>
                  <div className={style.buttonDiv}>
                    <button className={style.imageEditButton}>
                      <img src="../Images/imageEdit.png" />
                    </button>
                  </div>
                </div>

                <Card.Body>
                  <Card.Title className={style.cardTitle1}>
                    Alexanderdrostact12
                  </Card.Title>
                  <Card.Title className={style.cardTitle2}>
                    Alexanderrostact567@gmail.com
                  </Card.Title>
                  <div className={style.updateButtonDiv}>
                    <button className={style.updateButton}>Update</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={style.formContainer}>
        <Container>
          <Row>
            <Col xl={6}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={style.firstnamelabel}>Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Alexanderdrostact12"
                  className={style.firstNamePlaceholder}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={style.firstnamelabel}>Street</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="jl.karadenan no 100"
                  className={style.firstNamePlaceholder}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className={style.firstnamelabel}>
                  Address
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={style.addressTextArea}
                  placeholder="Perum Mulya Sari, Jl. Candi Mendut No.36, RT 011/RW 005 (Belakang Polsek Lowokwaru), Kel. Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur, 65142"
                />
              </Form.Group>

              <div className={style.secondUpdatebuttonDiv}>
                <button className={style.secondUpdateButtons}>Update</button>
              </div>
            </Col>

            <Col xl={6} className={style.colForm2}>
              <Form.Group
                className={style.numberCol}
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className={style.firstnamelabel}>
                  No.phone
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="1234 1234 1234 1234"
                  className={style.numberPlaceholder}
                />
              </Form.Group>

              <Form className={style.genderForm}>
                <Form.Label className={style.firstnamelabel}>Gender</Form.Label>
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Male"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                      className={style.genderLabel}
                      style={{ marginLeft: "5px" }}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                      className={style.genderLabel}
                    />
                    <Form.Check
                      inline
                      label="Other"
                      type={type}
                      id={`inline-${type}-3`}
                      className={style.genderLabel}
                    />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default MyAccount;
