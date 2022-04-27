import { Nav, Navbar, Button, Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import image from "../images/shrek.jpg"

const Slider = () => {
    return ( 
      <Carousel>
          <Carousel.Item style={{height:"697px"}}>
              <img src={image} alt="shrek" className="d-block w-100"/>
              <Carousel.Caption>
                  <h3>Shrek</h3>
                  <p>Somebody...</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"697px"}}>
              <img src={image} alt="shrek" className="d-block w-100"/>
              <Carousel.Caption>
                  <h3>Shrek</h3>
                  <p>Once told me...</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{height:"697px"}}>
              <img src={image} alt="shrek" className="d-block w-100"/>
              <Carousel.Caption>
                  <h3>Shrek</h3>
                  <p>The world is gonna roll me</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    )
}

export default Slider;