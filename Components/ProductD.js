/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Row, Col, Container, Accordion } from "react-bootstrap";
import style from "../styles/productDetail.module.css";
import Link from "next/link";
const ProductD = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
          <div className={style.productDiv}>
            <h5 className={style.homeText}>Home</h5>
            <h5 className={style.slash1}>/</h5>
            <h5 className={style.shopText}>Shop</h5>
            <h5 className={style.slash2}>/</h5>
            <h5 className={style.tshirtText}>Smart T-shirt </h5>
          </div>
          <Col xl={6} lg={6} md={6} className={style.productDetailCol}>
            <img
              src="../Images/productDetail.png"
              height={400}
              width={588}
              className={style.imageProduct}
            />

            <div className={style.productDetailImageDiv}>
              <div>
                <img
                  src="../Images/productDetailImage1.png"
                  className={style.image1}
                ></img>
              </div>
              <div>
                <img
                  src="../Images/productDetailImage2.png"
                  className={style.image1}
                ></img>
              </div>
              <div>
                <img
                  src="../Images/productDetailImage3.png"
                  className={style.image1}
                ></img>
              </div>
            </div>
          </Col>

          <Col xl={6} lg={6} md={6} className={style.detailCol}>
            <h2 className={style.smartText}>Smart T-shirt</h2>
            <p className={style.smartPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </p>
            <div>
              <img src="../Images/starsss.png" />
              <span className={style.starText}>(2k)</span>
            </div>

            <div className={style.colorDiv}>
              <div className={style.threeColor}>
                <h6 className={style.colorText}>Color</h6>
                <img
                  src="../Images/blackCircle.png"
                  className={style.blackCircle}
                />
                <img
                  src="../Images/whiteCircle.png"
                  className={style.blackCircle}
                />
                <img
                  src="../Images/greenCircle.png"
                  className={style.blackCircle}
                />
              </div>
              <div className>
                <h6 className={style.likes}>Stock</h6>
                <div className="d-flex">
                  <h6 className={style.stockText}>(1234)</h6>
                  <img
                    src="../Images/cartImage1.png"
                    height={24}
                    width={24}
                  ></img>
                </div>
              </div>
            </div>
            <div className={style.sizeDiv}>
              <div>
                <h6 className={style.sizeText}>Size</h6>
                <button className={style.smallButton}>
                  <h6>S</h6>
                </button>
                <button className={style.smallButton}>
                  <h6>M</h6>
                </button>
                <button className={style.smallButton}>
                  <h6>L</h6>
                </button>
                <button className={style.smallButton}>
                  <h6>XL</h6>
                </button>
              </div>
            </div>
            <div className={style.incrementDiv}>
              <div>
                <h5 className={style.quantityText}>Quantity</h5>
                <div className={style.displayButton}>
                  <button className={style.incrementButton}>-</button>
                  <h6 className={style.numberDynamic}>1</h6>
                  <button className={style.incrementButton}>+</button>
                </div>
              </div>
              <div>
                <h2 className={style.dollarH6}>$40 USD</h2>
              </div>
            </div>
            <div className={style.checkoutButtonDiv}>
              <Link href="/CheckOut">
                <button className={style.checkoutButton}>Checkout</button>
              </Link>
              <button className={style.bagButton}>
                <img src="../Images/bagImage.png" />
              </button>
            </div>

            <div className={style.detailAccordion}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.detail}>
                    Detail
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={style.accordionColorDiv}>
                      <div className={style.colorsDiv}>
                        <h6 className={style.colorsText}>Color</h6>
                        <img
                          src="../Images/blackCircle.png"
                          className={style.blacksCircle}
                        />
                        <img
                          src="../Images/whiteCircle.png"
                          className={style.blacksCircle}
                        />
                        <img
                          src="../Images/greenCircle.png"
                          className={style.blacksCircle}
                        />
                      </div>
                      <div className="d-flex">
                        <img
                          src="../Images/starImage.png"
                          width={152}
                          height={24}
                          className={style.starImage}
                        />
                        <h6 className={style.likess}>(21k)</h6>
                      </div>
                    </div>
                    <div className={style.sizesDiv}>
                      <div>
                        <h6 className={style.sizesText}>Size</h6>
                        <img
                          src="../Images/smallSize.png"
                          className={style.sizesImage}
                        />
                        <img
                          src="../Images/mediumSize.png"
                          className={style.sizesImage}
                        />
                        <img
                          src="../Images/largeSize.png"
                          className={style.sizesImage}
                        />
                        <img
                          src="../Images/extraLarge.png"
                          className={style.sizesImage}
                        />
                      </div>
                      <h3 className={style.dollars}>50$</h3>
                    </div>

                    <p className={style.oblongersPara}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam mollis, justo nec porttitor auctor, erat sapien
                      faucibus lectus, vel tempor dolor augue et lectus. Proin
                      et lacus blandit quam semper placerat
                    </p>
                    <div className={style.buttoNDivs}>
                      <button className={style.orderButton}>Order Now</button>
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

export default ProductD;
