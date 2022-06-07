/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Row, Col, Container, Form } from "react-bootstrap";
import style from "../styles/login.module.css";
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
                <h2 className={style.loginText}>Login</h2>
                <h6 className={style.signupText}>
                  Don't have an account ?
                  <span id={style.signupLink}>Sign Up</span>
                </h6>

                <div className={style.socialButtonDiv}>
                  <button className={style.googleButton}>
                    <img
                      src="../Images/googleIcon.png"
                      height={24}
                      width={24}
                    />
                    <h6 className={style.googleText}>Google</h6>
                  </button>
                  <button className={style.facebookButton}>
                    <img
                      src="../Images/facebookkk.png"
                      height={24}
                      width={24}
                      //   className={style.facebookIcon}
                    />
                    <h6 className={style.googleText}>Facebook</h6>
                  </button>
                </div>
                <Form className={style.loginFormInput}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className={style.emailPlaceholder}>
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
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      className={style.rememberPlaceholder}
                    />
                  </Form.Group>
                  <h6 className={style.passWordText}>Forget password ?</h6>
                </div>

                <div className={style.loginButtonDiv}>
                  <button className={style.loginButton}>Login</button>
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
