import React from "react";
import { Container, Row, Col, FloatingLabel, Form } from "react-bootstrap";
import style from "../styles/contactForm.module.css";
const ContactForm = () => {
  return (
    <Container fluid className={style.contactForm}>
      <Container className={style.contactFormCon}>
        <Row>
          <h4 className={style.sendMessageText}>Send a Message</h4>

          <Col xl={6}>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className={style.floatingText}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </>
          </Col>

          <Col xl={6}>
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className={style.floatingText}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </>
          </Col>
          <Col xl={12}>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your Email"
              className={style.floatingText}
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Col>
          <Col xl={12}>
            <>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Comments"
                className={style.floatingText}
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
            </>
          </Col>
          <div className={style.buttonDiv}>
            <button className={style.buttonSend}>SEND</button>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactForm;
