import React from 'react'
import './services.css'
//cards 

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//card images imports
import cardCor1 from '../assets/cardCor1.png'
import cardcor2 from '../assets/cardCor2.jpg'
import cardcor4 from '../assets/Cardcor4.jpeg'
import bconsban from '../assets/bconsban.jpg'
// sevices imagses imports
import Serimg1 from '../assets/Serimg1.jpg'
import Serimg2 from '../assets/Serimg2.webp'
import Serimg3 from '../assets/Serimg3.avif'
import Serimg6 from '../assets/Serimg6.jpeg'
import Serimg8 from '../assets/Serimg8.jpg'
import Serimg9 from '../assets/Serimg9.jpg'
// Carousel imports
import Carousel from 'react-bootstrap/Carousel';
import Corimg1 from '../assets/Corimg1.jpg'
import Corimg2 from '../assets/Corimg2.jpg'
import Corimg3 from '../assets/Corimg3.jpg'
import { Container, Row , Col,  } from 'react-bootstrap';
import Banners from '../Home/Banners';
import Head from '../Header/Head';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';

//COLOR IMG

//moveing services



const Services = () => {

  return (
    <>
    <Head />
    <Menubar />
    <Container fluid>
      <Row className='img'>
        <h1 className='service'> GLOBAL SERVICES</h1>
      </Row>
       
       <Row className='d-flex jus'>
              <Col sm={12} md={12} lg={4} className='mt-3'>
            
              <Card style={{width: '18rem' }}>
                <Card.Img variant="cardimg1" src={cardCor1} style={{height:'auto', width:'100%'}} />
                <Card.Body>
                  <Card.Title>BUSINESS CONSULTING</Card.Title>
                  <Card.Text>
                      Our team of experienced professionals provides tailored business consulting solutions to help companies achieve their goals.
                   
                      </Card.Text>
                        <Button variant="danger">SUBSCRIBE</Button>
              </Card.Body>
              </Card>
              </Col>
        <Col sm={12} md={12} lg={4} className='mt-3'>
        <Card style={{width: '18rem' }}>
                <Card.Img variant="cardcor2" src={cardcor2} style={{height:'150px', width:'100%'}} />
                <Card.Body>
                  <Card.Title>CORPORATE CONSULTING</Card.Title>
                  <Card.Text>
                     Our  consulting solutions to help companies achieve their goals.
                    From strategic planning to operational efficiency.
                      </Card.Text>
                        <Button variant="danger">SUBSCRIBE</Button>
              </Card.Body>
              </Card>
       
        </Col>

        <Col sm={12} md={12} lg={4} className='mt-3'>
        <Card style={{width: '18rem' }}>
                <Card.Img variant="Cardcor4" src={cardcor4} style={{height:'150px', width:'100%'}} />
                <Card.Body>
                  <Card.Title>DIGITAL  CONSULTING</Card.Title>
                  <Card.Text>
                      Our Digital  business consulting solutions to help companies achieve their goals.
                    From strategic planning to operational efficiency.
                      </Card.Text>
                        <Button variant="danger">SUBSCRIBE</Button>
              </Card.Body>
              </Card>
       
        </Col>
        
       </Row>

       <Row>
       <img src={bconsban} style={{height:'450px',width:'100%',}}/>
       </Row>

       <Row className='services' >
      
         <h1 className='precious'>OUR PRECIOUS SERVICES</h1>
         <Col sm={12} md={12} lg={4} className='services'>
                              
        <ul>
          <li> <b>Managed IT Services</b></li>
          <li> <b>Website Design and Development</b></li>
          <li><b>UX/UI Design</b></li>
          <li><b>E-commerce Solutions</b></li>
        </ul>
        </Col>
        <Col  sm={12} md={12} lg={4} className='services'>
        <ul>
          <li><b>Branding and Graphic Design</b></li>
          <li><b>IT and Digital Services</b></li>
          <li><b> SEO and Digital Marketing Integration</b></li>
          <li><b>Hosting and Domain Management</b></li>
        </ul>
        
        </Col>
        <Col sm={12} md={12} lg={4} className='services'>
        <ul>
          <li> <b>Analytics and Performance Monitoring</b></li>
          <li> <b> Cloud Computing Services</b></li>
          <li><b> Cybersecurity Servicest</b></li>
          <li><b>Software Development Services</b></li>
        </ul>
       </Col>

       </Row>


       <Row className='Cardimg'>
        <Col sm={12} md={12} lg={4} className='mt-4' >
        <img src={Serimg1} style={{height:'350px',width:'350px'}}/>
        </Col>
        <Col sm={12} md={12} lg={4} className='mt-4'>
        <img src={Serimg2} style={{height:'350px',width:'350px'}}/>
        </Col>
        <Col sm={12} md={12} lg={4} className='mt-4'>
       < img src={Serimg3} style={{height:'350px',width:'350px'}}/>
        </Col>
        
        
        <Col sm={12} md={12} lg={4} className='mt-4'>
       < img src={Serimg6} style={{height:'350px',width:'350px'}}/>
        </Col>
        <Col sm={12} md={12} lg={4} className='mt-4'>
       < img src={Serimg8} style={{height:'350px',width:'350px'}}/>
        </Col>
        <Col sm={12} md={12} lg={4} className='mt-4'>
       < img src={Serimg9} style={{height:'350px',width:'350px'}}/>
        </Col>
 
       </Row>

      <Carousel className='corsel'>
      <Carousel.Item>
        <img src={Corimg1} alt='' style={{height:'700px', width:'100%'}}/>
        <Carousel.Caption>
          <h2>PRECIOUS</h2>
          <h3>IT CONSULTING SERVICES</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Corimg2} alt='' style={{height:'700px', width:'100%'}}/>
        <Carousel.Caption>
          <h3>GLOBAL CLOUD COMPUTING</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Corimg3} alt='' style={{height:'700px', width:'100%'}}/>
        <Carousel.Caption>
          <h3>ARTIFICIAL INTELLIGENCE</h3>
          <p>

          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

        <Row>

          <h2 className='cardsmake mt-3'>Making precious services</h2>

          <Banners/>
        </Row>
          <Row className='Carers'>
            <h3 className=''> Greater futures through innovation </h3>
        
      
             
                <Col sm={12} md={12} lg={4}>
                  <ul>
                    <li className='heading'>Industries</li>
                      <li>Banking</li>
                      <li>Capital Markets</li>
                      <li>Consumer Goods and Distribution</li>
                        <li>Consumer Goods and Distribution</li>
                        <li>Healthcare</li>
                        <li>Retail</li>
                        <li>Life Sciences</li>
                  </ul>
            

                </Col>

                <Col sm={12} md={12} lg={4}>
                  <ul>
                      <li className='heading'>Services</li>
                      <li>Artificial Intelligence</li>
                      <li>Cybersecurity</li>
                        <li>Data and Analytics</li>
                        <li>Network Solutions and Services</li>
                        <li>Cloud Technology</li>
                        <li>Consulting</li>
                  </ul>
            

                </Col>


                <Col sm={12} md={12} lg={4}>
                  <ul>
                      <li className='heading'>Careers</li>
                      <li>Investor Relations</li>
                      <li>Corporate Social Responsibility</li>
                        <li>Consumer Goods and Distribution</li>
                        <li>Healthcare</li>
                        <li>Retail</li>
                        <li>Life Sciences</li>
                  </ul>
            

                </Col>

           


          </Row>
          
        
    </Container>
    <Footer />
    </>
  )
}

export default Services
