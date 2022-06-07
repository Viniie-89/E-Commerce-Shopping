/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import style from "../styles/recommendProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from "../Json/ProductData.json";
const RecommendProduct = () => {
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
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Container fluid className={style.recommendContainer}>
      <Container>
        <Row>
          <h3 className={style.recommendText}>Recommend Product</h3>
          <Col>
            <div>
              <Slider {...settings} className="recommendArrow">
                {product.map((elem) => {
                  return (
                    <>
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
                    </>
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RecommendProduct;
