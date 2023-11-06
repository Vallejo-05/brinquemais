import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/bomdiaipanema.com.br/wp-content/uploads/2019/12/loja-LEGO.jpg?resize=678%2C381&ssl=1" height={570} 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://z2r3u4a8.stackpathcdn.com/wp-content/uploads/2016/06/Kitson_Kids-02.jpg" height={570}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.gazetadopovo.com.br/2023/06/27145640/superlegal-divulgacao-960x540.jpg" height={570} 
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;