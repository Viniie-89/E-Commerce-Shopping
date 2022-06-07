/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/brand.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Container fluid className={styles.brandContainer}>
      <Container>
        <div>
          <Slider {...settings}>
            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className={styles.brandMainCol}
            >
              <Row>
                <Col xl={3} lg={3} md={4} sm={6} className={styles.brand1}>
                  <div>
                    <img src="../Images/brand1.png" />
                  </div>
                </Col>
                <Col xl={2} lg={3} md={4} sm={6} className={styles.brand2}>
                  <div>
                    <img src="../Images/brand2.png" />
                  </div>
                </Col>

                <Col xl={2} lg={3} md={4} sm={6} className={styles.brand3}>
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

            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className={styles.brandMainCol}
            >
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

            <Col
              xl={12}
              lg={12}
              md={12}
              sm={12}
              className={styles.brandMainCol}
            >
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
          </Slider>
        </div>
      </Container>
    </Container>
  );
};

export default Brand;
