/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/wishlist.module.css";
const WishList = () => {
  return (
    <>
      <Header />
      <Container fluid className={style.wishlistContainer}>
        <Container>
          <div className={style.wishListDiv}>
            <h5 className={style.homeText}>Home</h5>
            <h5 className={style.slash}>/</h5>
            <h5 className={style.wishlistText}>Wishlist</h5>
          </div>

          <h2 className={style.wishlistTitle}>Wishlist</h2>
          <p className={style.wishListPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
            ullamcorper.
          </p>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default WishList;
