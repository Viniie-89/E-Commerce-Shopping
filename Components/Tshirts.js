/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tshirt from "../Json/Tshirt.json";
import styles from "../styles/tshirt.module.css";
const Tshirts = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActiveBlack, setIsActiveBlack] = useState(false);
  const [isActiveWhite, setIsActiveWhite] = useState(false);
  const [isActiveGreen, setIsActiveGreen] = useState(false);
  useEffect(() => {
    SmallButton();
  }, []);

  const SmallButton = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
  };

  const mediumButton = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const largeButton = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const extraLargeButton = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };

  const blackButton = () => {
    setIsActiveBlack(true);
    setIsActiveWhite(false);
    setIsActiveGreen(false);
  };

  const whiteButton = () => {
    setIsActiveBlack(false);
    setIsActiveWhite(true);
    setIsActiveGreen(false);
  };

  const greenButton = () => {
    setIsActiveBlack(false);
    setIsActiveWhite(false);
    setIsActiveGreen(true);
  };
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
                      <div className={styles.shadowDiv}></div>
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
                <button
                  active="true"
                  className={styles.buttonColor}
                  onClick={blackButton}
                  style={{
                    borderRadius: isActive ? "50px" : "0px",
                  }}
                >
                  <img
                    src="../Images/blackCircle.png"
                    className={styles.blackCircle}
                  />
                </button>
                <button
                  active={isActiveWhite}
                  onClick={whiteButton}
                  className={styles.buttonColor}
                  style={{
                    borderRadius: isActiveWhite ? "50px" : "0px",
                  }}
                >
                  <img
                    src="../Images/whiteCircle.png"
                    className={styles.blackCircle}
                  />
                </button>
                <button
                  active={isActiveGreen}
                  onClick={greenButton}
                  className={styles.buttonColor}
                  style={{
                    borderRadius: isActiveGreen ? "50px" : "0px",
                  }}
                >
                  <img
                    src="../Images/greenCircle.png"
                    className={styles.blackCircle}
                  />
                </button>
              </div>
              <div className="d-flex">
                <img src="../Images/starImage.png" width={152} height={24} />
                <h6 className={styles.likes}>(21k)</h6>
              </div>
            </div>
            <div className={styles.sizeDiv}>
              <div>
                <h6 className={styles.sizeText}>Size</h6>
                <button
                  active="true"
                  className={styles.sizeButtonSmall}
                  onClick={SmallButton}
                  style={{
                    backgroundColor: isActive ? "#5463FF" : "white",
                    color: isActive ? "white" : "black",
                  }}
                >
                  <h6>S</h6>
                </button>
                <button
                  className={styles.sizeButtonMedium}
                  onClick={mediumButton}
                  active={isActive1}
                  style={{
                    backgroundColor: isActive1 ? "#5463FF" : "white",
                    color: isActive1 ? "white" : "black",
                  }}
                >
                  <h6>M</h6>
                </button>
                <button
                  className={styles.sizeButtonLarge}
                  onClick={largeButton}
                  active={isActive2}
                  style={{
                    backgroundColor: isActive2 ? "#5463FF" : "white",
                    color: isActive2 ? "white" : "black",
                  }}
                >
                  <h6>L</h6>
                </button>
                <button
                  className={styles.sizeButtonExtraLarge}
                  onClick={extraLargeButton}
                  active={isActive3}
                  style={{
                    backgroundColor: isActive3 ? "#5463FF" : "white",
                    color: isActive3 ? "white" : "black",
                  }}
                >
                  <h6>XL</h6>
                </button>
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
