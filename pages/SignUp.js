/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import OffCanvasHeader from "../Components/OffCanvasHeader";

import Footer from "../Components/Footer";
import {
  Row,
  Col,
  Container,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import style from "../styles/signup.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const SignUp = () => {
  let router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameError("");
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameError("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const NameRegex = /^[A-Za-z]+$/;
    const EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    // const regex = /^[6-9]\d{9}$/;

    let errorOccur = false;
    if (firstName == "") {
      errorOccur = true;
      setFirstNameError("First name is Required !");
      console.log("1");
    } else if (!NameRegex.test(firstName)) {
      errorOccur = true;
      console.log("2");
      setFirstNameError("First Name must be in alphabets only !");
    } else {
      setFirstNameError("");
      console.log("3");
    }

    if (lastName == "") {
      errorOccur = true;
      setLastNameError("Last name is required");
      console.log("4");
    } else if (!NameRegex.test(lastName)) {
      errorOccur = true;
      console.log("5");
      setLastNameError("Last name must be Alphabets only");
    } else {
      setLastNameError("");
      console.log("6");
    }

    if (email == "") {
      errorOccur = true;
      console.log("7");
      setEmailError("email is required");
    } else if (!EmailRegex.test(email)) {
      errorOccur = true;
      console.log("8");
      setemailError("enter a valid email");
    } else {
      setEmailError("");
      console.log("9");
    }

    if (password == "") {
      errorOccur = true;
      console.log("10");
      setPasswordError("Password is required");
    }
    // } else if (!PasswordRegex.test(password)) {
    //   console.log("11");
    //   errorOccur = true;
    //   setPasswordError("password must contain atleast 1 special character");
    else {
      setPasswordError("");
      console.log("12");
    }

    if (confirmPassword == "") {
      errorOccur = true;
      console.log("13");
      setConfirmPasswordError("re-enter password is neccesary ");
    } else if (confirmPassword !== password) {
      errorOccur = true;
      console.log("14");
      setConfirmPasswordError("password doesn't match ");
    } else {
      setConfirmPasswordError("");
      console.log("15");
    }
    if (!errorOccur) {
      window.location.pathname = "/Login";
    }
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
              <Form onSubmit={handleSubmit}>
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
                        type="text"
                        placeholder="First name"
                        className={style.firstNamePlaceholder}
                        value={firstName}
                        onChange={handleFirstName}
                      />
                      {firstNameError && (
                        <span style={{ color: "red" }}>{firstNameError}</span>
                      )}
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
                        type="text"
                        placeholder="Last name"
                        className={style.lastNamePlaceholder}
                        value={lastName}
                        onChange={handleLastName}
                      />
                      {lastNameError && (
                        <span style={{ color: "red" }}>{lastNameError}</span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xl={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label className={style.emailLabel}>
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className={style.emailPlaceholder}
                        value={email}
                        onChange={handleEmail}
                      />
                      {emailError && (
                        <span style={{ color: "red" }}>{emailError}</span>
                      )}
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
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter password"
                        className={style.emailPlaceholder}
                        onChange={handlePassword}
                        value={password}
                      />
                      {passwordError && (
                        <span style={{ color: "red" }}>{passwordError}</span>
                      )}
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
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter keyword again"
                        className={style.emailPlaceholder}
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                      />
                      {confirmPasswordError && (
                        <span style={{ color: "red" }}>
                          {confirmPasswordError}
                        </span>
                      )}
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
                    {/* <Link href="/Login"> */}
                    <button className={style.signuPButtons}>Sign Up</button>
                    {/* </Link> */}
                  </Col>
                </Row>
              </Form>
            </Col>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SignUp;
