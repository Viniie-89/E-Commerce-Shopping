/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import OffCanvasHeader from "../Components/OffCanvasHeader";

import Footer from "../Components/Footer";
import { Row, Col, Container, Form } from "react-bootstrap";
import style from "../styles/login.module.css";
import Link from "next/link";
import GoogleLogin from "react-google-login";
const Login = () => {
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = (googleData) => {
    console.log(googleData);
  };
  return (
    <>
      <OffCanvasHeader />

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
                <h2 className={style.loginText}>Login</h2>
                <h6 className={style.signupText}>
                  Don't have an account ?
                  <Link href="/SignUp">
                    <span id={style.signupLink}>Sign Up</span>
                  </Link>
                </h6>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "50%",
                  }}
                >
                  {/* <button className={style.googleButton}>
                    <img
                      src="../Images/googleIcon.png"
                      height={24}
                      width={24}
                    />
                    <h6 className={style.googleTexts}>Google</h6>
                  </button> */}
                  <GoogleLogin
                    clientId="816099084594-f2osu1uhntm77ovn176s74f121fpo8g7.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={"single_host_origin"}
                  ></GoogleLogin>

                  <button className={style.facebookButton}>
                    <img
                      src="../Images/facebookkk.png"
                      height={30}
                      width={30}
                      className={style.facebookImage}
                    />
                    <h6 className={style.facebookTexts}>Facebook</h6>
                  </button>
                </div>

                <Form className={style.loginFormInput}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label
                      className={style.emailPlaceholder}
                      // value={email}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className={style.emailText}
                    />
                  </Form.Group>
                </Form>

                <Form className={style.loginFormInput}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={style.passwordPlaceholder}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className={style.emailText}
                    />
                  </Form.Group>
                </Form>

                <div className={style.loginFormDiv}>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalCheck"
                  >
                    <Col>
                      <Form.Check
                        label="Remember me"
                        className={style.rememberPlaceholder}
                      />
                    </Col>
                  </Form.Group>
                  <h6 className={style.passWordText}>Forget password ?</h6>
                </div>

                <div className={style.loginButtonDiv}>
                  <Link href="/MyAccount">
                    <button className={style.loginButton}>Login</button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
