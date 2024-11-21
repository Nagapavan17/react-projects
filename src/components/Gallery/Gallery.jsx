import React from 'react'
import './Gallery.css'
import {Container ,Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import Head from '../Header/Head';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';

const Gallery = () => {
  return (
    <>
        <Head />
        <Menubar />
        <div>
            {/* banner */}
                <div className='galle'>
                            <Container>
                            <div>
                              <h1>Our Gallery</h1>
                            </div>
                            </Container>
                </div>

            {/* banner */}


              <Container>
                <Row>
                    <Col xs={12}>
                      <div className='text-center'>
                                
                                <h1 style={{fontSize:'50px'}} className='my-4'>Work with kc company</h1>
                      </div>
                    </Col>
                </Row>

                <Row>
                      <Col xs={12} lg={8}>
                          <div>
                          <Carousel>
                                <Carousel.Item>
                                      <img src={'https://img.freepik.com/free-photo/business-partners-handshake-global-corporate-with-technology-concept_53876-102615.jpg?semt=ais_hybrid'} alt='image' style={{width:"100%", height:"415px"}}/>
                                </Carousel.Item>
                                <Carousel.Item>
                                      <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/blog_2.jpg'} alt='image'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                      <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/blog_1.jpg'} alt='image'/>
                                </Carousel.Item>
                              </Carousel>
                          </div>
                          <div>
                            <h2>Project overview
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Invidunt ut labore et dolore magna stet clita kasd gubergrenLorem ipsum dolor sit amet, consetetur sadipscing elitr<br></br>

                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren accusam et justo duo</p>
                          </div>

                      </Col>
                      <Col xs={12} lg={4}>
                          <div>
                            <h4 className='text-center my-2'>Project Detail</h4>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>Uma mam</p>
                            </div>
                            <hr></hr>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>Jyothi babu</p>
                            </div>
                            <hr></hr>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>umar</p>
                            </div>
                            <hr></hr>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>Devendra</p>
                            </div>
                            <hr></hr>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>Pujitha</p>
                            </div>
                            <hr></hr>
                            <div className='galcl'>
                              <p>Client Name </p>    
                              <p>Naga pavan</p>
                            </div>
                            <hr></hr>

                          </div>
                          <div>
                            <h2>Share this project</h2>
                            <p><FaInstagram /> <FaFacebook /> <FaTwitter />  <FaGooglePlusSquare /></p>
                          </div>
                      </Col>
                </Row>
              </Container>
              <Container>
              <Row>
                    <Col xs={12}>
                      <div className='text-center mt-4'>
                                
                                <h1 style={{fontSize:'50px'}}>Related work</h1>
                      </div>
                    </Col>
                </Row>
                <Row className='mb-5'>
                          <Col xs={12} md={4} lg={3}>
                          <div className='proimg' >
                          <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_1.jpg'} alt='image' className='preeimg'/>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                          </div>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                          <div className='proimg' >
                          <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_2.jpg'} alt='image' className='preeimg'/>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                          </div>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                          <div className='proimg' >
                          <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_3.jpg'} alt='image' className='preeimg'/>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                          </div>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                          <div className='proimg' >
                          <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_4.jpg'} alt='image' className='preeimg'/>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                          </div>
                          <div className='procls'>
                                  <h6>project Title</h6>                      
                          </div>
                        </Col>
                </Row>
              </Container>
        </div>
        <Footer />
    </>
  )
}

export default Gallery
