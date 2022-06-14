/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Footer from "../Components/Footer";
import OffCanvasHeader from "../Components/OffCanvasHeader";

import ProductD from "../Components/ProductD";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import style from "../styles/productDetail.module.css";
import productData from "../Json/ProductData.json";
const ProductDetail = () => {
  const [descr, setDesc] = useState(true);
  const [review, setReview] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const description = () => {
    setDesc(true);
    setReview(false);
    setIsActive(true);
  };

  const reviews = () => {
    setReview(true);
    setDesc(false);
    setIsActive(false);
  };

  return (
    <>
      <OffCanvasHeader />
      <ProductD />
      <Container fluid className={style.ReviewContainer}>
        <Container>
          <Row>
            <Col>
              <div className={style.descriptionReviewSelector}>
                <NavLink
                  className={style.descriptionH6}
                  onClick={description}
                  active={isActive}
                >
                  Description
                </NavLink>
                <NavLink className={style.ReviewH6} onClick={reviews}>
                  Reviews
                </NavLink>
              </div>
              {descr && (
                <div>
                  <h6 className={style.detailProductText}>Detail Product</h6>
                  <ul>
                    <li className={style.detailList}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </li>
                    <li className={style.detailList}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </li>
                    <li className={style.detailList}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </li>
                  </ul>
                </div>
              )}

              {review && (
                <div>
                  <h6 className={style.detailProductText}>
                    Our Client Reviewss
                  </h6>
                  <ul>
                    <li className={style.detailList}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </li>
                    <li className={style.detailList}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </li>
                  </ul>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={style.sameProductContainer}>
        <Container>
          <Row>
            <h6 className={style.sameProductText}>Same Product</h6>
            {productData.map((elem) => {
              return (
                <>
                  <Col xl={3} lg={3} md={4} className={style.sameProductCard}>
                    <Card className={style.productCard}>
                      <img src={elem.image} />
                      <Card.Body className={style.cardBody1}>
                        <Card.Title className={style.cardTitle}>
                          {elem.title}
                        </Card.Title>
                        <Card.Title className={style.cardTitles}>
                          {elem.title1}
                        </Card.Title>
                      </Card.Body>
                      <Card.Body>
                        <Card.Title className={style.cardTitle1}>
                          {elem.title2}
                        </Card.Title>
                        <img src={elem.star} height={18} width={106} />
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
            <div className={style.sameProductButtonDiv}>
              <button className={style.seemoreText}>See More</button>
            </div>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
