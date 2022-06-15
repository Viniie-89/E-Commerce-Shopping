/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, NavLink } from "react-bootstrap";
import style from "../styles/product.module.css";
import product from "../Json/ProductData.json";
import Flip from "react-reveal/Flip";
import categories from "../Json/categories.json";
import { Fade } from "react-reveal";
const Product = () => {
  const [productData] = useState(categories);
  const [isActive, setIsActive] = useState(true);
  const [data1, setData1] = useState([]); //filtered data
  useEffect(() => {
    // console.log(
    //   "get floor list",
    //   data1.map((i) => i)
    // );
  }, [data1]);

  useEffect(() => {
    clickTshirt();
  }, []);

  const clickTshirt = () => {
    const abc = productData.filter((i) => {
      return i.categoryname === "Tshirts";
    });
    setData1(abc);
    setIsActive(true);
    console.log("filterLogTshirt", abc);
  };

  const clickJacket = () => {
    const abc = productData.filter((i) => {
      return i.categoryname === " jackets";
    });
    setData1(abc);
    setIsActive(false);
    console.log("filterLogJacket", abc);
  };

  const clickShirt = () => {
    const abc = productData.filter((i) => {
      return i.categoryname === "shirts";
    });
    setData1(abc);
    setIsActive(false);
    console.log("filterLogJacket", abc);
  };

  const clickJeans = () => {
    const abc = productData.filter((i) => {
      return i.categoryname === "jeans";
    });
    setData1(abc);
    setIsActive(false);
    console.log("filterLogJacket", abc);
  };
  return (
    <Container fluid className={style.productContainer}>
      <Container>
        <Row>
          <Col xl={12}>
            <h5 className={style.productTitle}>
              CHOOSE FROM THE BEST PRODUCTS
            </h5>

            <Fade Top>
              <h3 className={style.productText}>Our Best Seller Product</h3>
            </Fade>
            <div className={style.productCategory}>
              <NavLink
                className={style.tshirth6}
                onClick={clickTshirt}
                style={{
                  color: isActive ? "#5463ff" : "#5463FF",
                  textDecoration: "underline",
                }}
              >
                T-shirts
              </NavLink>
              <NavLink className={style.tshirth6} onClick={clickJacket}>
                Jackets
              </NavLink>
              <NavLink className={style.tshirth6} onClick={clickShirt}>
                shirts
              </NavLink>
              <NavLink className={style.tshirth6} onClick={clickJeans}>
                Jeans
              </NavLink>
            </div>
          </Col>

          {data1.map((elem) => {
            return elem.categorydetail.map((val) => (
              <>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Card className={style.productCard}>
                    <img src={val.image} className={style.productImage} />
                    <Card.Body className={style.cardBody1}>
                      <Card.Title className={style.cardTitle}>
                        {val.title}
                      </Card.Title>
                      <Card.Title className={style.cardTitles}>
                        {val.title1}
                      </Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Title className={style.cardTitle1}>
                        {val.title2}
                      </Card.Title>
                      <img src={val.star} height={18} width={106} />
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ));
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Product;
