/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col, Accordion, Form, Card } from "react-bootstrap";
import style from "../styles/clotheShop.module.css";
import cloth from "../Json/ClotheShop.json";
const ClotheShop = () => {
  return (
    <Container fluid className={style.filterContainer}>
      <Container>
        <Row>
          <Col xl={4} lg={4} md={4} sm={12} className={style.col1}>
            <h2 className={style.tshirtText}>T-shirt</h2>
            <div className={style.filterDiv}>
              <h6 className={style.filterH6}>Filter</h6>
              <button className={style.filterButton}>
                <img src="../Images/filterImage.png" />
              </button>
            </div>

            <div className={style.categoryAccordion}>
              <Accordion defaultActiveKey="0" className={style.accordionDiv}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.accordionTitle}>
                    Categories
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={style.categoryDiv}>
                      <div>
                        <button className={style.menButton}>Men</button>
                      </div>
                      <div>
                        <button className={style.womenButton}>Women</button>
                      </div>
                      <div>
                        <button className={style.childrenButton}>
                          Children
                        </button>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <hr className={style.hrline1} />

            <div className={style.categoryAccordion}>
              <Accordion defaultActiveKey="0" className={style.accordionDiv}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.accordionTitle}>
                    Price
                  </Accordion.Header>
                  <Accordion.Body>
                    <>
                      <Form.Label>Range</Form.Label>
                      <Form.Range />
                      <div className={style.priceRange}>
                        <h6>$40</h6>
                        <h6>$500</h6>
                      </div>
                    </>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <hr className={style.hrline1} />
            <div className={style.categoryAccordion}>
              <Accordion defaultActiveKey="0" className={style.accordionDiv}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.accordionTitle}>
                    Color
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <button className={style.colorButton}>
                        <img src="../Images/greenCircle.png" />
                      </button>

                      <button className={style.colorButton}>
                        <img src="../Images/yellowCircle.png" />
                      </button>

                      <button className={style.colorButton}>
                        <img src="../Images/redCircle.png" />
                      </button>

                      <button className={style.colorButton}>
                        <img src="../Images/blueCircle.png" />
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <hr className={style.hrline1} />
            <div className={style.categoryAccordion}>
              <Accordion defaultActiveKey="0" className={style.accordionDiv}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className={style.accordionTitle}>
                    Size
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={style.sizeDiv}>
                      <button className={style.colorButton}>
                        <h6>S</h6>
                        <img src="../Images/greyCircle.png"></img>
                      </button>

                      <button className={style.colorButton}>
                        <h6>M</h6>
                        <img src="../Images/greyCircle.png"></img>
                      </button>

                      <button className={style.colorButton}>
                        <h6>L</h6>
                        <img src="../Images/greyCircle.png"></img>
                      </button>

                      <button className={style.colorButton}>
                        <h6>XL</h6>
                        <img src="../Images/greyCircle.png"></img>
                      </button>

                      <button className={style.colorButton}>
                        <h6>XXL</h6>
                        <img src="../Images/greyCircle.png"></img>
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <hr className={style.hrline1} />
          </Col>
          <Col xl={8} lg={8} md={8} sm={12} className={style.col2}>
            <Row>
              {cloth.map((elem) => {
                return (
                  <>
                    <Col
                      xl={4}
                      lg={4}
                      md={6}
                      sm={6}
                      className={style.filterCard}
                    >
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
            <div className={style.loadDiv}>
              <button className={style.loadButton}>Load More</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ClotheShop;
