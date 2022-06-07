/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/testimonial.module.css";
import testimonial from "../Json/Testimonial.json";
const Testimonial = () => {
  return (
    <Container fluid className={styles.testimonialContainer}>
      <Container>
        <Row>
          <h4 className={styles.testimonialText}>Testimonials</h4>
          {testimonial.map((elem) => {
            return (
              <>
                <Col xl={6} lg={6} md={6} className={styles.cols}>
                  <Card className={styles.card}>
                    <div className={styles.card1Div}>
                      <div>
                        <img src={elem.image} height={48} width={48}></img>
                      </div>
                      <div className={styles.clientDetail}>
                        <h6 className={styles.testimonialTitle}>
                          {elem.title1}
                        </h6>
                        <h6 className={styles.testimonialTitle1}>
                          {elem.title}
                        </h6>
                      </div>
                    </div>
                    <div className={styles.starDiv}>
                      <img src={elem.image1} />
                    </div>
                    <Card.Body className={styles.testimonailCardBody}>
                      <Card.Text className={styles.testimonialDetail}>
                        {elem.detail}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Testimonial;
