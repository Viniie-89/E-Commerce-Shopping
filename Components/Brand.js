/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/brand.module.css";
const Brand = () => {
  return (
    <Container fluid className={styles.brandContainer}>
      <Container>
        <Col xl={12} lg={12} md={12} sm={12} className={styles.brandMainCol}>
          <Row>
            <Col xl={2} lg={3} md={4} sm={6} className={styles.brand1}>
              <div>
                <img src="../Images/brand1.png" />
              </div>
            </Col>
            <Col xl={2} lg={3} md={4} sm={6} className={styles.brand2}>
              <div>
                <img src="../Images/brand2.png" />
              </div>
            </Col>

            <Col xl={3} lg={3} md={4} sm={6} className={styles.brand3}>
              <div>
                <img src="../Images/brand3.png" />
              </div>
            </Col>

            <Col xl={2} lg={3} md={4} sm={6} className={styles.brand4}>
              <div>
                <img src="../Images/brand4.png" />
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} className={styles.brand5}>
              <div>
                <img src="../Images/brand5.png" />
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </Container>
  );
};

export default Brand;
