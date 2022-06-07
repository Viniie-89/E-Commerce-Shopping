/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import shopStyle from "../styles/shop.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shop from "../Json/shopDetail.json";
import ClotheShop from "../Components/ClotheShop";
import RecommendProduct from "../Components/RecommendProduct";
import style from "../styles/recommendProduct.module.css";
import productData from "../Json/ProductData.json";
const Shop = () => {
  const [data, setData] = useState(productData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },

      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Header />;
      <Container fluid className={shopStyle.shopContainer}>
        <Container className={shopStyle.shopCon}>
          <Row>
            <Col xl={7} lg={7} md={4} sm={12}>
              <div className={shopStyle.homeDiv}>
                <h5 className={shopStyle.homeh5}>Home</h5>
                <h5 className={shopStyle.slash}>/</h5>
                <h5 className={shopStyle.shoph5}>Shop</h5>
              </div>
              <div className={shopStyle.shopTextDiv}>
                <h5 className={shopStyle.shopText}>Shop</h5>
              </div>
            </Col>
            <Col xl={5} lg={5} md={8} sm={12} className={shopStyle.col2shop}>
              <div>
                <Slider {...settings} className="shopArrow">
                  {shop.map((elem) => {
                    return (
                      <>
                        <div className={shopStyle.imageDiv}>
                          <img
                            src={elem.image}
                            height={90}
                            width={90}
                            className={shopStyle.sliderImageClass}
                          />
                        </div>
                        <div className={shopStyle.h6}>
                          <h6 className={shopStyle.sliderTitle}>
                            {elem.title}
                          </h6>
                        </div>
                        {/* </div> */}
                      </>
                    );
                  })}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <ClotheShop />
      <RecommendProduct />
      <Footer />;
    </>
  );
};

export default Shop;
