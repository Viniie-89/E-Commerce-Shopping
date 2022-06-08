/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Row, Col, Container, Form, FloatingLabel } from "react-bootstrap";
import style from "../styles/signup.module.css";
import Link from "next/link";
const Login = () => {
  return (
    <>
      <Header />

      <Container fluid className={style.loginContainer}>
        <img
          src="../Images/modelImage.png"
          height={858}
          width={1440}
          className={style.loginImage}
        />
        <div className={style.gradientDiv}>
          <Container className={style.loginCon}>
            <Row>
              <Col xl={6}>
                <div className={style.loginDiv}>
                  <h5 className={style.homeText}>Home</h5>
                  <h5 className={style.slash}>/</h5>
                  <h5 className={style.contactText}>My Account</h5>
                </div>
                <h2 className={style.myAccountText}>My Account</h2>
                <h2 className={style.loginText}>Sign Up</h2>
                <h6 className={style.signupText}>
                  you have Account ?
                  <Link href="/Login">
                    <span id={style.signupLink}>Login</span>
                  </Link>
                </h6>

                <div className={style.socialButtonDiv}>
                  <button className={style.googleButton}>
                    <img
                      src="../Images/googleIcon.png"
                      height={24}
                      width={24}
                      className={style.googleImage}
                    />
                    <h6 className={style.googleText}>Google</h6>
                  </button>
                  <button className={style.facebookButton}>
                    <img
                      src="../Images/facebookkk.png"
                      height={24}
                      width={24}
                      className={style.googleImage}
                      //   className={style.facebookIcon}
                    />
                    <h6 className={style.googleText}>Facebook</h6>
                  </button>
                </div>
              </Col>
            </Row>

            <Col xl={12} className={style.signUpFormDivName}>
              <Row>
                <Col xl={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={style.firstNameLabel}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="First name"
                      className={style.firstNamePlaceholder}
                    />
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={style.firstNameLabel}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Last name"
                      className={style.lastNamePlaceholder}
                    />
                  </Form.Group>
                </Col>

                <Col xl={12}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={style.emailLabel}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className={style.emailPlaceholder}
                    />
                  </Form.Group>
                </Col>

                <Col xl={12}>
                  <>
                    <Form.Label
                      htmlFor="inputPassword5"
                      className={style.passwordLabel}
                    >
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Enter password"
                      className={style.emailPlaceholder}
                    />
                  </>
                </Col>

                <Col xl={12}>
                  <>
                    <Form.Label
                      htmlFor="inputPassword5"
                      className={style.passwordLabels}
                    >
                      Enter Keyword Again
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="inputPassword5"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Enter keyword again"
                      className={style.emailPlaceholder}
                    />
                  </>
                </Col>
                <Col xl={6}>
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      className={style.rememberPlaceholder}
                    />
                  </Form.Group>
                </Col>
                <Col xl={12} className={style.signUpButton}>
                  <Link href="/MyAccount">
                    <button className={style.signuPButtons}>Sign Up</button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
