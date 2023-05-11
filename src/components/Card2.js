import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';

function ImageAndTextExample() {
  return (
    <div className="d-flex flex-row justify-content-between text-center" style={{marginBottom: "2rem"}}>
      <Card className="border-dark opacity-dark" style={{height: "320px", width: "290px"}}>
        <Card.Img className="opacity-dark border-light p-1" style={{marginBottom: "0", height: "288px", width: "165.64"}} variant="top" src={card1} />
        <Card.Body className="pt-1 pr-2 pl-2 pb-2 opacity">
          <Card.Text className="h6 color-azure" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify color-azure">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-dark opacity-dark" style={{height: "320px", width: "290px"}}>
        <Card.Img className="opacity-dark border-light p-1" style={{marginBottom: "0", height: "288px", width: "165.64"}} variant="top" src={card2} />
        <Card.Body className="pt-1 pr-2 pl-2 pb-2 opacity">
          <Card.Text className="h6 color-azure" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify color-azure">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="border-dark opacity-dark" style={{height: "320px", width: "290px"}}>
        <Card.Img className="opacity-dark border-light p-1" style={{marginBottom: "0", height: "288px", width: "165.64"}} variant="top" src={card3} />
        <Card.Body className="pt-1 pr-2 pl-2 pb-2 opacity">
          <Card.Text className="h6 color-azure" style={{marginBottom: "0.2rem", marginTop: "0.2rem" }} as={Link} to="/Services">
            Service-1
          </Card.Text>
          <Card.Text style={{fontSize: "0.8rem"}} className="justify color-azure">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageAndTextExample;