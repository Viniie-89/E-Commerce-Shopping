/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/brand.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand from "../Json/Brand.json";
const Brand = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Container fluid className={styles.brandContainer}>
      <Container>
        <Row>
          <div>
            <Slider {...settings}>
              {brand.map((elem) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <>
                    <div>
                      <img src={elem.image1} />
                    </div>
                    <div>
                      <img src={elem.image2} />
                    </div>
                    <div>
                      <img src={elem.image3} />
                    </div>
                    <div>
                      <img src={elem.image4} />
                    </div>
                    <div>
                      <img src={elem.image5} />
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Brand;
