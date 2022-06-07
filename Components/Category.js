/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import categoryStyles from "../styles/category.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import category from "../Json/categoryData.json";
const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Container fluid className={categoryStyles.categoryContainer}>
      <Container>
        <Row>
          <Col xl={8} lg={8} md={8} sm={12}>
            <h6 className={categoryStyles.categoryTitle}>
              Choose your category
            </h6>
            <h3 className={categoryStyles.categoryText}>Categories Style</h3>
            <p className={categoryStyles.categoryPara}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget
              gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus
              ullamcorper.
            </p>
          </Col>

          <Col xl={4} lg={4} md={4} sm={12} className={categoryStyles.cardCol}>
            <div>
              <Slider {...settings} className="middleCat">
                {category.map((elem) => {
                  return (
                    <>
                      <Card>
                        <img
                          src={elem.image}
                          height={230}
                          width={360}
                          className={categoryStyles.sliderImage}
                        />
                        <Card.Body className={categoryStyles.cardBody}>
                          <Card.Title className={categoryStyles.cardTitle}>
                            {elem.title}
                          </Card.Title>
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

export default Category;
