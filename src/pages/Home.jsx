import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col, Image } from "react-bootstrap";
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/salonartscaranteccut.webp";
import { SocialIcon } from 'react-social-icons';
import affiche1 from "../assets/images/affiche1.webp";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="Home">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href="./brush_black_18dp.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Salon des arts de Carantec, situé dans la baie de Morlaix, dans le Finistère, en Bretagne. 
          Nous réalisons des expositions de peintures et de sculptures deux fois par an, en été et en hiver. 
          Vous pouvez proposer votre candidature pour participer aux évenements, faire des démonstrations et des ateliers pour les plus jeunes."
        />
        <link rel="apple-touch-icon" href="./brush_black_18dp.svg" />
        <link rel="manifest" href="https://www.salonartcarantec.com/manifest.json" />
        <link rel="canonical" href="https://www.salonartcarantec.com" />
        <title>Salon des Arts Carantec</title>
        <meta http-equiv="Content-Security-Policy" 
							content="default-src 'self' https://assets7.lottiefiles.com/packages/lf20_eBcQGa.json; 
											script-src 'self' 'unsafe-inline'; 
											style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; 
											font-src 'self' https://fonts.gstatic.com;
											img-src 'self' https://cdnjs.cloudflare.com data:; 
                      manifest-src https://www.salonartcarantec.com/manifest.json;
											base-uri 'self';" 
				/>
      </Helmet>
      <ImageJumbotron/>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} data-aos="zoom-in-right">
            <h1 className="titlecustom text-center">
              <Image className="logo2" src={logo} alt="logo association salon des arts Carantec"/>
            </h1>
            <div className="presentation">
              <p className="presentationtext">{t("presentation1")}</p>
              <p className="presentationtext">{t("presentation2")}</p>
              <p className="presentationtext">{t("presentation3")}</p>
              <p className="text-center">
                <span>
                  <Link className="btn buttoncustom bigbutton" to="/contacts">{t("contactus")}</Link>
                </span>
              </p>
            </div>
            <div>
              <p className="presentationtext">
                {t("presentation4")}
                <span className="importanttextmedium"> {t("workshop")} </span> 
                {t("presentation5")}
                <span className="importanttextmedium"> {t("discovery")}</span>. 
              </p>
              <p className="presentationtext"> 
                {t("presentation6")} 
              </p>
              <p className="importanttexthome text-center">
                {t("followus")}
              </p>
              <div className="text-center">
                <SocialIcon 
                  data-aos="flip-up" 
                  className="socialicon m-2" 
                  url="https://fr-fr.facebook.com/ArtCarantec/" 
                  alt="facebook icon"
                  target="_blank" 
                  rel="noreferrer noopener"
                />
                <SocialIcon 
                  data-aos="flip-up" 
                  className="socialicon m-2" 
                  url="https://www.instagram.com/saloncarantec/" 
                  alt="instagram icon"
                  target="_blank" 
                  rel="noreferrer noopener"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} data-aos="zoom-in-left">
            <Image
              src={affiche1}
              alt="Poster adverting Carantec's Salon des Arts"
              className="posterimage"
              />
          </Col>
        </Row>
        <Row className="d-flex justify-content-md-center mt-4">
          <CarouselDisplay/>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
