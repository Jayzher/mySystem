import './pages.css'
import Card from '../components/Card';
import Carousel from '../components/Carousel';

function UncontrolledExample() {
  return (
    <div>
      <Carousel/> 
      <h1 style={{textAlign: "center", marginTop: "2rem", marginBottom: "2rem", color: "black"}}>Services</h1>
      <Card />
    </div>
  );
}

export default UncontrolledExample;