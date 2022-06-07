/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshirt from "../Json/Tshirt.json";
import styles from "../styles/tshirt.module.css";
const Tshirts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Container fluid className={styles.tshirtContainer}>
      <Container className={styles.tshirtCon}>
        <Row>
          <Col xl={5} lg={5} md={5}>
            <div>
              <Slider {...settings} className="tshirtArrow">
                {tshirt.map((elem) => {
                  return (
                    <>
                      <div className={styles.cardImg}>
                        <img
                          src={elem.image}
                          width={254}
                          height={383}
                          className={styles.tshirtImage}
                        />
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </Col>
          <Col xl={7} lg={7} md={7} className={styles.Col2}>
            <h1 className={styles.oblongersTitle}>The Oblongers Tshirts</h1>
            <div className={styles.colorDiv}>
              <div className={styles.threeColor}>
                <h6 className={styles.colorText}>Color</h6>
                <img
                  src="../Images/blackCircle.png"
                  className={styles.blackCircle}
                />
                <img
                  src="../Images/whiteCircle.png"
                  className={styles.blackCircle}
                />
                <img
                  src="../Images/greenCircle.png"
                  className={styles.blackCircle}
                />
              </div>
              <div className="d-flex">
                <img src="../Images/starImage.png" width={152} height={24} />
                <h6 className={styles.likes}>(21k)</h6>
              </div>
            </div>
            <div className={styles.sizeDiv}>
              <div>
                <h6 className={styles.sizeText}>Size</h6>
                <img
                  src="../Images/smallSize.png"
                  className={styles.sizeImage}
                />
                <img
                  src="../Images/mediumSize.png"
                  className={styles.sizeImage}
                />
                <img
                  src="../Images/largeSize.png"
                  className={styles.sizeImage}
                />
                <img
                  src="../Images/extraLarge.png"
                  className={styles.sizeImage}
                />
              </div>
              <h3 className={styles.dollar}>50$</h3>
            </div>

            <p className={styles.oblongerPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus. Proin et lacus blandit quam
              semper placerat
            </p>
            <div className={styles.buttoNDiv}>
              <button className={styles.orderButton}>Order Now</button>
            </div>

            <div className={styles.detailAccordion}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={styles.detail}>
                    Detail
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.accordionColorDiv}>
                      <div className={styles.colorsDiv}>
                        <h6 className={styles.colorsText}>Color</h6>
                        <img
                          src="../Images/blackCircle.png"
                          className={styles.blacksCircle}
                        />
                        <img
                          src="../Images/whiteCircle.png"
                          className={styles.blacksCircle}
                        />
                        <img
                          src="../Images/greenCircle.png"
                          className={styles.blacksCircle}
                        />
                      </div>
                      <div className="d-flex">
                        <img
                          src="../Images/starImage.png"
                          width={152}
                          height={24}
                          className={styles.starImage}
                        />
                        <h6 className={styles.likess}>(21k)</h6>
                      </div>
                    </div>
                    <div className={styles.sizesDiv}>
                      <div>
                        <h6 className={styles.sizesText}>Size</h6>
                        <img
                          src="../Images/smallSize.png"
                          className={styles.sizesImage}
                        />
                        <img
                          src="../Images/mediumSize.png"
                          className={styles.sizesImage}
                        />
                        <img
                          src="../Images/largeSize.png"
                          className={styles.sizesImage}
                        />
                        <img
                          src="../Images/extraLarge.png"
                          className={styles.sizesImage}
                        />
                      </div>
                      <h3 className={styles.dollars}>50$</h3>
                    </div>

                    <p className={styles.oblongersPara}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam mollis, justo nec porttitor auctor, erat sapien
                      faucibus lectus, vel tempor dolor augue et lectus. Proin
                      et lacus blandit quam semper placerat
                    </p>
                    <div className={styles.buttoNDivs}>
                      <button className={styles.orderButton}>Order Now</button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Tshirts;
