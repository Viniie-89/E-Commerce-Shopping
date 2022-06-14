/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import OffCanvasHeader from "../Components/OffCanvasHeader";

import Footer from "../Components/Footer";
import {
  Container,
  Row,
  Col,
  Accordion,
  FloatingLabel,
  Form,
  Card,
} from "react-bootstrap";
import style from "../styles/checkout.module.css";
import checkoutData from "../Json/checkoutData.json";
const WishList = () => {
  return (
    <>
      <OffCanvasHeader />
      <Container fluid className={style.wishlistContainer}>
        <Container>
          <div className={style.wishListDiv}>
            <h5 className={style.homeText}>Home</h5>
            <h5 className={style.slash}>/</h5>
            <h5 className={style.wishlistText}>Checkout</h5>
          </div>

          <h2 className={style.wishlistTitle}>Cart</h2>
          <p className={style.wishListPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
            gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
            ullamcorper.
          </p>
        </Container>
      </Container>

      <Container fluid className={style.cartContainer}>
        <Container>
          <h3 className={style.cartText}>Cart Product</h3>
          <Row>
            <Col xl={8} lg={7} className={style.cartDetailCol}>
              {checkoutData.map((elem) => {
                return (
                  <div className={style.highestMainDiv}>
                    <div className={style.mainDiv}>
                      <div className={style.productDiv}>
                        <img src={elem.image1} />
                        <div className={style.productDetail}>
                          <h6 className={style.tshirtText}>
                            {elem.productTitle}
                          </h6>
                          <h6 className={style.colorText}>
                            {elem.productColor}
                          </h6>
                        </div>
                      </div>
                      <div className={style.priceDetailDiv}>
                        <h6 className={style.usdText}>{elem.priceDollar}</h6>
                        <h6 className={style.priceText}>{elem.priceTitle}</h6>
                      </div>
                      <div className={style.stockDetailDiv}>
                        <h6 className={style.stockNumberDetail}>
                          {elem.stockNumber}
                        </h6>
                        <h6 className={style.stockTitleDetail}>
                          {elem.stockTitle}
                        </h6>
                      </div>
                      <div className={style.deleteDetailDiv}>
                        <img src={elem.image2} />
                      </div>
                    </div>
                    <div className={style.accordionDiv}>
                      <Accordion className={style.accordion}>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header className={style.accordionTitle}>
                            {elem.productTitleAccordion}
                          </Accordion.Header>
                          <Accordion.Body>{elem.productDetail}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <div className={style.buttonIncrement}>
                        <button className={style.buttonMinus}>-</button>
                        <h6 className={style.number}>1</h6>
                        <button className={style.buttonAdd}>+</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Col>

            <Col xl={4} lg={5} className={style.Col2Total}>
              <h6 className={style.couponCodeText}>Coupon Code</h6>
              <FloatingLabel
                controlId="floatingInputGrid"
                className={style.formLabelCoupon}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <div className={style.checkButtonDiv}>
                <button className={style.checkButton}>Check</button>
              </div>
              <div className={style.subTotalDiv}>
                <div>
                  <h6 className={style.subtotalText}>subtotal</h6>
                  <h6 className={style.subtotalProduct}>4 product</h6>
                </div>
                <div>
                  <h6 className={style.usdTotal}>$160 USD</h6>
                </div>
              </div>
              <div className={style.totalDiv}>
                <h6>Total</h6>
                <h6 className={style.usdTotal}>$160 USD</h6>
              </div>
              <div className={style.checkButtonDiv}>
                <button className={style.checkButton}>Checkout</button>
              </div>
            </Col>

            <div className={style.divClose}>
              {checkoutData.map((elem) => {
                return (
                  <>
                    <Card className={style.cardAccordion}>
                      <img
                        src={elem.image1}
                        height={200}
                        width={200}
                        className={style.divCloseImage}
                      />
                      <Card.Body>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Product Detail</Accordion.Header>
                            <Accordion.Body>
                              <div className={style.highestMainDiv}>
                                <div className={style.mainDiv}>
                                  <div className={style.productDiv}>
                                    <div className={style.productDetail}>
                                      <h6 className={style.tshirtText}>
                                        {elem.productTitle}
                                      </h6>
                                      <h6 className={style.colorText}>
                                        {elem.productColor}
                                      </h6>
                                    </div>
                                  </div>
                                  <div className={style.priceDetailDiv}>
                                    <h6 className={style.usdText}>
                                      {elem.priceDollar}
                                    </h6>
                                    <h6 className={style.priceText}>
                                      {elem.priceTitle}
                                    </h6>
                                  </div>
                                  <div className={style.stockDetailDiv}>
                                    <h6 className={style.stockNumberDetail}>
                                      {elem.stockNumber}
                                    </h6>
                                    <h6 className={style.stockTitleDetail}>
                                      {elem.stockTitle}
                                    </h6>
                                  </div>
                                </div>
                                <div className={style.accordionDiv}>
                                  <div className={style.deleteDetailDiv}>
                                    <img src={elem.image2} />
                                  </div>
                                  <div className={style.buttonIncrement}>
                                    <button className={style.buttonMinus}>
                                      -
                                    </button>
                                    <h6 className={style.number}>1</h6>
                                    <button className={style.buttonAdd}>
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default WishList;
