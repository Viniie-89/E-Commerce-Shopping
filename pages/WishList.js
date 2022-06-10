/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import style from "../styles/wishlist.module.css";
import cartData from "../Json/CartData.json";

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

      <Container fluid className={style.cartCardContainer}>
        <Container>
          <Row>
            <Col xl={4} lg={4} className={style.productText}>
              Product
            </Col>
            <Col xl={3} lg={3} className={style.priceText}>
              Price
            </Col>
            <Col xl={2} lg={2} className={style.stockText}>
              Stock Status
            </Col>
            <Col xl={3} lg={3}></Col>
          </Row>

          <Row>
            {cartData.map((elem) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className={style.cartDetailMainDiv}>
                  <Col xl={4} lg={4}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <img src={elem.image1} />
                      <img src={elem.image2} height={100} width={100} />
                      <div className={style.productData}>
                        <h6 className={style.tshirtName}>{elem.tshirtTitle}</h6>
                        <h6 className={style.tshirtColorName}>
                          {elem.tshirtColor}
                        </h6>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} style={{ textAlign: "center" }}>
                    <div className={style.priceDiv}>
                      <h6 className={style.productPrice}>{elem.Price}</h6>
                      <h6 className={style.productPriceTitle}>
                        {elem.PriceTitle}
                      </h6>
                    </div>
                  </Col>
                  <Col xl={2} lg={2} style={{ textAlign: "center" }}>
                    <div className={style.stockDiv}>
                      <h6 className={style.stockTitleName}>{elem.stock}</h6>
                      <h6 className={style.stockTitleh6}>{elem.stockTitle}</h6>
                    </div>
                  </Col>
                  <Col xl={3} lg={3} style={{ textAlign: "center" }}>
                    <div className={style.cartButtonDiv}>
                      <button className={style.addToCartButton}>
                        {elem.button}
                      </button>
                    </div>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default WishList;
