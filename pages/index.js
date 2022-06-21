/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import OffCanvasHeader from "../Components/OffCanvasHeader";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Brand from "../Components/Brand";
import Category from "../Components/Category";
import Product from "../Components/Product";
import Tshirts from "../Components/Tshirts";
import Testimonial from "../Components/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";
import bannerData from "../Json/bannerData.json";
import "animate.css";
import ScrollTop from "../Components/ScrollTop";
import Link from "next/link";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const [data, setData] = useState("../Images/MenImages3.png");

  return (
    <>
      <ScrollTop />
      <OffCanvasHeader />
      <Container fluid className={styles.bannerContainer}>
        <Container className={styles.bannerCon}>
          <Row>
            <Col
              xl={5}
              lg={5}
              md={5}
              sm={12}
              xs={12}
              className={styles.bannerCol1}
            >
              <div className={styles.typewriterDiv}>
                <h5 className={styles.bannerTitle} style={{ color: "white" }}>
                  Get the Latest Dress Models&nbsp;
                  <span>
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={150}
                      deleteSpeed={100}
                      delaySpeed={1000}
                      words={["from us", "from us"]}
                    />
                  </span>
                </h5>
              </div>

              <p className={styles.bannerDetail}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
              <div className={styles.bannerButtons}>
                <button className={styles.bannerButton}>Shop Now</button>
              </div>
            </Col>
            <Col
              xl={7}
              lg={7}
              md={7}
              sm={12}
              xs={12}
              className={styles.bannerSecondCol}
            >
              <Row>
                <Col
                  xl={3}
                  lg={3}
                  md={3}
                  sm={6}
                  xs={6}
                  className={styles.bannerSecondPart}
                >
                  <h6 className={styles.listH6}>More List</h6>
                  <div className="animate__animated animate__zoomIn animate-duration: 3s">
                    <div>
                      <img
                        src="../Images/suit.png"
                        height={268}
                        width={173}
                        className={styles.suitImg}
                      />
                    </div>

                    <div className={styles.shirtDiv}>
                      <img
                        src="../Images/shirt.png"
                        height={219}
                        width={146}
                        className={styles.shirtImg}
                      />
                    </div>
                  </div>
                </Col>

                <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                  <div className="animate__animated animate__zoomIn animate-duration: 3s">
                    <div className={styles.imageGirl}>
                      <img
                        src={data}
                        height={522}
                        width={412}
                        className={styles.girlImg}
                        alt="image1"
                      />
                    </div>

                    <div className={styles.imageSlider}>
                      <div>
                        <Slider {...settings} className="bannerArrow">
                          {bannerData.map((elem) => {
                            return (
                              <>
                                <div>
                                  <img
                                    src={elem.image1}
                                    // onClick={() => setData(elem.image1)}
                                    className={styles.firstSliderImage}
                                    style={{ cursor: "pointer" }}
                                    height={"100%"}
                                    width={"100%"}
                                  ></img>
                                </div>
                              </>
                            );
                          })}

                          {/* <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider1.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider1.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div>

                          <div>
                            <img
                              src="../Images/bannerSlider2.png"
                              className={styles.secondSliderImage}
                            ></img>
                          </div> */}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Brand />

      <Category />
      <Product />
      <Tshirts />
      <Testimonial />

      <Container fluid className={styles.modelContainer}>
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <h3 className={styles.modelH3}>Look For Models Now</h3>
              <p className={styles.modelPara}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
                gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
                ullamcorper.
              </p>
              <Link href="/Login">
                <div className={styles.modelButton}>
                  <button className={styles.buttonLogin}>Login Now</button>
                </div>
              </Link>
            </Col>
            <Col xl={6} lg={6} md={6} className={styles.Modelcol2}>
              <img
                src="../Images/modelImage.png"
                width={590}
                height={340}
                className={styles.ShirtImage}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
