/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import about from "../Json/AboutDta.json";
import { Container, Col, Row } from "react-bootstrap";
import style from "../styles/aboutData.module.css";
const AboutData = () => {
  return (
    <Container fluid className={style.aboutDataContainer}>
      <Container>
        <Row>
          {about.map((item, index) => {
            return index == 1 ? (
              <>
                <Col xl={6} lg={6} className={style.featuresImages}>
                  <img
                    src={item.image}
                    width={590}
                    height={349}
                    className={style.aboutDtaimg1}
                  />
                  <div className={style.absoluteImage2}>
                    <img src="../Images/secondDivImage.png" />
                  </div>
                </Col>
                <Col xl={6} lg={6} className={style.featuresDescriptions}>
                  <h2 className={style.aboutDataTitle}>{item.title}</h2>
                  <p className={style.aboutDatadesc1}>{item.description}</p>
                  <p className={style.aboutDatadesc1}>{item.description1}</p>
                </Col>
              </>
            ) : (
              <>
                <Col xl={6} lg={6} className={style.featuresDescriptionAbout}>
                  <h2 className={style.aboutDataTitle}>{item.title}</h2>
                  <p className={style.aboutDatadesc1}>{item.description}</p>
                  <p className={style.aboutDatadesc1}>{item.description1}</p>
                </Col>
                <Col xl={6} lg={6} className={style.featuresImageAbout}>
                  <img
                    src={item.image}
                    width={590}
                    height={349}
                    className={style.aboutDtaimg2}
                  />
                  <div className={style.absoluteImage2}>
                    <img src="../Images/firstImageDiv.png" />
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default AboutData;
