/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import style from "../styles/product.module.css";
import product from "../Json/ProductData.json";
const Product = () => {
  return (
    <Container fluid className={style.productContainer}>
      <Container>
        <Row>
          <Col xl={12}>
            <h5 className={style.productTitle}>
              CHOOSE FROM THE BEST PRODUCTS
            </h5>
            <h3 className={style.productText}>Our Best Seller Product</h3>
            <div className={style.productCategory}>
              <h6 className={style.tshirth6}>Tshirts</h6>
              <h6 className={style.tshirth6}>Jackets</h6>
              <h6 className={style.tshirth6}>shirts</h6>
              <h6 className={style.tshirth6}>Jeans</h6>
            </div>
          </Col>
          {product.map((elem) => {
            return (
              <>
                <Col xl={3} lg={3} md={4} sm={6} xs={12}>
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
        </Row>
      </Container>
    </Container>
  );
};

export default Product;
