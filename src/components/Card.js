import './component.css';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';

function ImageAndTextExample() {
  return (
    <div className="d-flex flex-row justify-content-between text-center" style={{marginBottom: "2rem"}}>
      <Card style={{height: "400px", width: "300px", backgroundColor: "light-grey"}}>
        <Card.Img className="border-light p-1" style={{marginBottom: "0", height: "250px", width: "100%"}} variant="top" src={card1} />
        <Card.Body className="p-1 bg-light-grey">
          <Card.Text className="h6" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{height: "400px", width: "300px", backgroundColor: "light-grey"}}>
        <Card.Img style={{marginBottom: "0", height: "250px", width: "100%"}} variant="top" src={card2} />
        <Card.Body className="p-1 bg-light-grey">
          <Card.Text className="h6" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{height: "400px", width: "300px", backgroundColor: "light-grey"}}>
        <Card.Img style={{marginBottom: "0", height: "250px", width: "100%"}} variant="top" src={card3} />
        <Card.Body className="p-1 bg-light-grey">
          <Card.Text className="h6" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageAndTextExample;