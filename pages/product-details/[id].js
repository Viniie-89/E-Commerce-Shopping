/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import ProductD from "../../Components/ProductD";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import style from "../../styles/productDetail.module.css";
import productData from "../../Json/ProductData.json";
import cloth from "../../Json/ClotheShop.json";
import { useRouter } from "next/router";
const ProductDetail = () => {
  const [descr, setDesc] = useState(true);
  const [review, setReview] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [productData1, setProductData1] = useState([]);
  const router = useRouter();
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
  console.log("routerLog", router.query.id);

  var productDetailsLog = cloth.filter((i, k) => {
    return router.query.id == i.id;
  });
  console.log("productDetailsLog", productDetailsLog);

  return (
    <>
      <Header />
      {productDetailsLog.length > 0 && (
        <ProductD
          image={productDetailsLog ? productDetailsLog[0].image : "abcd"}
          name={productDetailsLog ? productDetailsLog[0].title : "abcd"}
        />
      )}
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
