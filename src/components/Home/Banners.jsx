import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// moveing images
import Admining1 from '../assets/Admining1.avif'
import Acountimg1 from '../assets/Acountimg1.jpg'
import Legalimg from '../assets/Legalimg.jpg'
import Envimg from '../assets/Envimg.jpeg'
import Resource from '../assets/Resource.jpeg'
import It from '../assets/It.avif'
import Suplay from '../assets/Suplay.jpg'
import Digital from '../assets/Digital.jpg'


function Banners() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <div className="slider-container" style={{padding:'29px'}}>
      <Slider {...settings}>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Admining1}  style={{height:'200px',width:'100%'}}/>
      <Card.Body>
        <Card.Title>Managed IT Services</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Acountimg1} style={{height:'200px',width:'100%'}}/>
      <Card.Body>
        <Card.Title>Website Design and Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title
          bulk
        </Card.Text>
        <Button variant="info">click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Legalimg} style={{height:'200px',width:'100%'}} />
      <Card.Body>
        <Card.Title>UX/UI Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Envimg} style={{height:'200px',width:'100%'}}/>
      <Card.Body>
        <Card.Title>E-commerce Solutions</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Resource} style={{height:'200px',width:'100%'}}/>
      <Card.Body>
        <Card.Title>Branding and Graphic Design</Card.Title>
        <Card.Text>
          Some quick example text to band e
          bulk.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={It} style={{height:'200px',width:'100%'}} />
      <Card.Body>
        <Card.Title>IT Services</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Suplay} style={{height:'200px',width:'100%'}} />
      <Card.Body>
        <Card.Title>IT and Digital Services</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Digital} style={{height:'200px',width:'100%'}}/>
      <Card.Body>
        <Card.Title>Cloud Computing Services</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">Click</Button>
      </Card.Body>
    </Card>
        </div>
      </Slider>
    </div>
    </>
  );
}

export default Banners
