import './component.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpg';

function UncontrolledExample() {
  return (
      <div className="opacity pl-5 pr-5 pt-4 pb-4 margin-0">
        <Carousel className="container">
          <Carousel.Item>
              <img
                style={{height: "60vh", opacity: "0.8"}}
                className="w-100 img-center"
                src={img1}
                alt="First slide"
              />
            <Carousel.Caption>
              <div className="shadow">
                <h3>Plan your Working Hours Flexibly</h3>
                <p>Improve work life balance</p>
                <p>Increase productivity</p>
                <p>Better health</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                style={{height: "60vh", opacity: "0.8"}}
                className="w-100"
                src={img2}
                alt="Second slide"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
                style={{height: "60vh", opacity: "0.8"}}
                className="w-100"
                src={img3}
                alt="First slide"
              />
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default UncontrolledExample;