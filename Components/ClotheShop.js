/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form, Card } from "react-bootstrap";
import style from "../styles/clotheShop.module.css";
import cloth from "../Json/ClotheShop.json";
import Flip from "react-reveal";
import Link from "next/link";
import Range from "../Components/Range";
import Fade from "react-reveal/Fade";
import { valueToPercent } from "@mui/base";
const ClotheShop = () => {
  const [shopProduct] = useState(cloth);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const [showData, setShowData] = useState(false);
  const [isActive6, setIsActive6] = useState(true);
  const [data1, setData1] = useState([]);

  useEffect(() => {}, [data1]);

  useEffect(() => {
    clickMen();
  }, []);

  const clickMen = () => {
    const abc = shopProduct.filter((i) => {
      return i.categoryname === "mens";
    });
    setData1(abc);
    setIsActive6(true);
    console.log("filterLogMens", abc);
  };

  const clickWomen = () => {
    const abc = shopProduct.filter((i) => {
      return i.categoryname === "womens";
    });
    setData1(abc);
    setIsActive6(false);
    console.log("filterLogwomen", abc);
  };

  const clickChildren = () => {
    const abc = shopProduct.filter((i) => {
      return i.categoryname === "children";
    });
    setData1(abc);
    setIsActive6(false);
    console.log("filterLogchildren", abc);
  };

  const loadData = () => {
    setShowData(true);
  };
  useEffect(() => {
    SmallButton();
  }, []);
  const SmallButton = () => {
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };

  const mediumButton = () => {
    setIsActive(false);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
  };
  const largeButton = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setIsActive4(false);
  };
  const extraLargeButton = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setIsActive4(false);
  };
  const XXLButton = () => {
    setIsActive(false);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(true);
  };
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
                        <button
                          className={style.menButton}
                          onClick={clickMen}
                          style={{
                            background: isActive6 ? "#5463ff" : "white",
                            color: isActive6 ? "white" : "black",
                          }}
                        >
                          Men
                        </button>
                      </div>
                      <div>
                        <button
                          className={style.womenButton}
                          onClick={clickWomen}
                        >
                          Woman
                        </button>
                      </div>
                      <div>
                        <button
                          className={style.childrenButton}
                          onClick={clickChildren}
                        >
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
                    {/* <>
                      <Form.Label>Range</Form.Label>
                      <Form.Range />
                      <div className={style.priceRange}>
                        <h6>$40</h6>
                        <h6>$500</h6>
                      </div>
                    </> */}
                    <Range />
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
                      <button
                        className={style.colorButton}
                        active="true"
                        onClick={SmallButton}
                      >
                        <h6>S</h6>
                        <div
                          style={{
                            backgroundColor: isActive ? "#5463FF" : "white",
                            color: isActive ? "white" : "black",
                            height: isActive ? "10px" : "0px",
                            width: isActive ? "10px" : "0px",
                          }}
                          className={style.divCircle}
                        ></div>
                      </button>

                      <button
                        className={style.colorButton}
                        onClick={mediumButton}
                        active={isActive1}
                      >
                        <h6>M</h6>
                        <div
                          style={{
                            backgroundColor: isActive1 ? "#5463FF" : "white",
                            color: isActive1 ? "white" : "black",
                            height: isActive1 ? "10px" : "0px",
                            width: isActive1 ? "10px" : "0px",
                          }}
                          className={style.divCircle}
                        ></div>
                      </button>

                      <button
                        className={style.colorButton}
                        onClick={largeButton}
                        active={isActive2}
                      >
                        <h6>L</h6>
                        <div
                          style={{
                            backgroundColor: isActive2 ? "#5463FF" : "white",
                            color: isActive2 ? "white" : "black",
                            height: isActive2 ? "10px" : "0px",
                            width: isActive2 ? "10px" : "0px",
                          }}
                          className={style.divCircle}
                        ></div>
                      </button>

                      <button
                        className={style.colorButton}
                        onClick={extraLargeButton}
                        active={isActive3}
                      >
                        <h6>XL</h6>
                        <div
                          style={{
                            backgroundColor: isActive3 ? "#5463FF" : "white",
                            color: isActive3 ? "white" : "black",
                            height: isActive3 ? "10px" : "0px",
                            width: isActive3 ? "10px" : "0px",
                          }}
                          className={style.divCircle}
                        ></div>
                      </button>

                      <button
                        className={style.colorButton}
                        onClick={XXLButton}
                        active={isActive4}
                      >
                        <h6>XXL</h6>
                        <div
                          style={{
                            backgroundColor: isActive4 ? "#5464FF" : "white",
                            color: isActive4 ? "white" : "black",
                            height: isActive4 ? "10px" : "0px",
                            width: isActive4 ? "10px" : "0px",
                          }}
                          className={style.divCircle}
                        ></div>
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
              {data1.map((elem, ind) => {
                if (ind <= 4) {
                  return elem.categorydetail.map((val) => (
                    <>
                      <Col
                        xl={4}
                        lg={4}
                        md={6}
                        sm={6}
                        className={style.filterCard}
                      >
                        <Card className={style.productCard}>
                          <Link href={`/product-details/${val.id}`}>
                            <img src={val.image} className={style.shopImage} />
                          </Link>
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
                }
              })}

              {showData &&
                cloth.map((elem, ind) => {
                  if (ind >= 7) {
                    return elem.categorydetail.map((val) => (
                      <>
                        <Col
                          xl={4}
                          lg={4}
                          md={6}
                          sm={6}
                          className={style.filterCard}
                        >
                          <Fade bottom>
                            <Card className={style.productCard}>
                              <Link href={`/product-details/${val.id}`}>
                                <img
                                  src={val.image}
                                  className={style.shopImage}
                                />
                              </Link>
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
                          </Fade>
                        </Col>
                      </>
                    ));
                  }
                })}
            </Row>
            <div className={style.loadDiv}>
              <button className={style.loadButton} onClick={loadData}>
                Load More
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ClotheShop;
