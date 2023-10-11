import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
  const carouselStyle = {
    maxWidth: '1000px', // Устанавливаем ширину карусели в 1000px
    margin: '0 auto', // Центрируем карусель по горизонтали
  };

  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.energomash.biz/image/1.JPG"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Описание первой фотографии</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.energomash.biz/image/8.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Описание второй фотографии</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://www.energomash.biz/image/6.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Описание третьей фотографии</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
