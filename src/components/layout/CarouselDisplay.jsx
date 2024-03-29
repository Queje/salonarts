import Carousel from 'react-bootstrap/Carousel';
import image1 from 'assets/images/image1.webp';
import image2 from 'assets/images/image2.webp';
import image3 from 'assets/images/image3.webp';
import image4 from 'assets/images/image4.webp';
import image5 from 'assets/images/image5.webp';
import image6 from 'assets/images/image6.webp';
//import image7 from 'assets/images/image7.webp';
//import image8 from 'assets/images/image6.webp';

const CarouselDisplay = () => {
    
  return (
    <>
    <Carousel className='CarouselDisplay' >

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image1}
          alt="salon des arts, Hiver 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Alain Carpentier</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image2}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Caroline Lavisse</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image3}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Bogdan Tolbariu</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image4}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Isabelle D'Arboussier</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image5}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Laurence Poidatz</h4>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image7}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">salon des arts, été 2023</h4>
        </Carousel.Caption>
      </Carousel.Item> */}

      <Carousel.Item className="imagecarousel">
        <img
          className="d-block"
          src={image6}
          alt="salon des arts, été 2023"
        />
        <Carousel.Caption>
          <h4 className="captiontext">Joëlle Troussier</h4>
        </Carousel.Caption>
      </Carousel.Item> 

    </Carousel>
    </>
  )
}
    
export default CarouselDisplay