/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import Brand from "../Components/Brand";
import Category from "../Components/Category";
import Product from "../Components/Product";
import Tshirts from "../Components/Tshirts";
import Testimonial from "../Components/Testimonial";
export default function Home() {
  return (
    <>
      <Header />
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
              <h5 className={styles.bannerTitle}>
                Get the Latest Dress Models From Us
              </h5>
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
                </Col>
                <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                  <div>
                    <img
                      src="../Images/girl.png"
                      height={522}
                      width={400}
                      className={styles.girlImg}
                    />
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
              <div className={styles.modelButton}>
                <button className={styles.buttonLogin}>Login Now</button>
              </div>
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
