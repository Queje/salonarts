import ImageJumbotron from "components/layout/ImageJumbotron";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import CarouselDisplay from "components/layout/CarouselDisplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="Home">
      <ImageJumbotron/>
      <Container>
        <Row className="align-items-center text-center">
          <Col data-aos="zoom-in-right">
            <h1>Salon des Arts - Carantec</h1>
            <ul>
              <li>
                blablablabalb
              </li>
              <li>
                blablablabalb
              </li>
              <li>
                blablablabalb
              </li>
            </ul>
            <p> {t("partnership")}
              <span>
                <Button>
                  <Link className="text-light" to="/contacts">{t("contactus")}</Link>
                </Button>
              </span>
            </p>
          </Col>
          <Col data-aos="zoom-in-left">
            <Player
              autoplay={true}
              loop={true}
              controls={false}
              src="https://assets7.lottiefiles.com/packages/lf20_ggw4qc1o.json"
              style={{ height: '400px', width: '400px' }}
              alt="artist animation"
              ></Player>
          </Col>
        </Row>
          <h5 className="m-auto">Quelques Oeuvres des editions précédentes : </h5>
        <Row data-aos="zoom-in" className="d-flex justify-content-md-center">
          <CarouselDisplay/>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
