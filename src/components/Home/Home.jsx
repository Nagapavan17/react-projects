import React, { useState } from 'react'
import './Home.css'
import { Container ,Row,Col,Form } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoMdSettings } from "react-icons/io";
import { MdOutlinePermIdentity } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import Head from '../Header/Head'
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Head />
      <Menubar />
      <div className='Home-page'>
            {/* carousel */}
            <Container fluid>
              <Row>
                <Col xs={12}>
                    <div>
                    <Carousel fade>
                        <Carousel.Item>
                          <img src={'https://media.licdn.com/dms/image/v2/D5612AQFRzu-x4XRHew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1661795917789?e=2147483647&v=beta&t=MJHTTqjW_jdT9MZs-O96O1X29a_Wwb2RcMLZnw1tt4s'} alt='image' style={{width: '100%'}}/>
                          <Carousel.Caption>
                          <h1>WELCOME TO CORPORATE </h1>
                          <p>With a creativity and knowledge on Corporate field</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={'https://www.onboardmeetings.com/wp-content/uploads/2022/04/The-Basics-of-Corporate-Structure-2-1200x675.jpeg'} alt='image' style={{width: '100%'}}/>
                          <Carousel.Caption className='car-cap'>
                            <h1>WELCOME TO CORPORATE </h1>
                            <p>With a creativity and knowledge on Corporate field</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src={'https://s3.amazonaws.com/ellevate-app-uploads-production/blog_posts/7513/featured_image/large/469034205_copy.jpg?1473282673'} alt='image' style={{width: '100%'}}/>
                          <Carousel.Caption className='car-cap'>
                          <h1>WELCOME TO CORPORATE </h1>
                          <p>With a creativity and knowledge on Corporate field</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Col>
          </Row>
        </Container>
        {/* Carousel */}

        {/* About */}
        <Container>
          <Row>
            <Col xs={12}>
              <div className='text-center'>
                        <h5 className='intro'>OUR INTRO</h5>
                        <h1 style={{fontweight:'bold'}}>Our Company</h1>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card style={{ width: '16rem'}} className='my-3'>
                  <Card.Img variant="top" src={"https://tidytheme.xyz/blackgallery/elizah/html/images/service_3.jpg"} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button className='abt-button'>Read more..</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card style={{ width: '16rem' }} className='my-3'>
                  <Card.Img variant="top" src={"https://tidytheme.xyz/blackgallery/elizah/html/images/service_2.jpg"} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button className='abt-button'>Read more...</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card style={{ width: '16rem' }} className='my-3'>
                  <Card.Img variant="top" src={"https://tidytheme.xyz/blackgallery/elizah/html/images/service_1.jpg"} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button className='abt-button'>Read more..</Button>
                  </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={3}>
                <Card style={{ width: '16rem'}} className='my-3'>
                  <Card.Img variant="top" src={"https://tidytheme.xyz/blackgallery/elizah/html/images/service_3.jpg"} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button className='abt-button'>Read more..</Button>
                  </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        {/* About */}

        {/* service */}
        <Container>
          <Row>
            <Col xs={12}>
              <div className='text-center'>
                        <h5 className='intro'>What We Do</h5>
                        <h1 style={{fontweight:'bold'}}>Our services</h1>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><IoMdSettings  className='sericon'/>Mobile Design</h2>
                    <p className='sercard'>Designers only have a few seconds to catch the attention of mobile users before they abandon an app or site. Following established mobile UX design principles creates a better overall user experience.</p>
                      <div className='Fold'>
                            <div className='folde'>

                            </div>
                      </div>
                  </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><MdOutlinePermIdentity  className='sericon'/>Brand Identity</h2>
                    <p className='sercard'>A brand identity is a company's visual and conceptual representation that helps consumers identify and distinguish a brand
                      corrupti suscipit odio, sit fuga et praesentium maiores.</p>
                      <div className='Fold'>
                            <div className='folde'>

                            </div>
                      </div>
                  </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><FaBook   className='sericon'/>Web Design</h2>
                    <p className='sercard'>the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience
                      corrupti suscipit odio, sit fuga et praesentium maiores.</p>
                      <div className='Fold'>
                            <div className='folde'>

                            </div>
                      </div>
                  </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><FaRegLightbulb    className='sericon'/>Digital marketing</h2>
                    <p className='sercard'>Reach shoppers who are looking for products like yours. Sponsored ads can help drive more visibility, traffic, and sales for your business.
                      corrupti suscipit odio, sit fuga et praesentium maiores.</p>
                      <div className='Fold'>
                            <div className='folde'>
                            
                            </div>
                      </div>
                  </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><MdOutlineLibraryBooks  className='sericon'/>Graphic Design</h2>
                    <p className='sercard'> Graphic Designers create visual concepts to communicate information. They create everything from posters and billboards to packaging, logos and marketing materials. 
                      corrupti suscipit odio maiores.</p>
                      <div className='Fold'>
                            <div className='folde'>

                            </div>
                      </div>
                  </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                  <div className='servcard mb-3'>
                    <h2><FaHome   className='sericon'/>Customer Support</h2>
                    <p className='sercard'>Customer support is a company's assistance to customers who are using or purchasing its products or services
                       sit fuga et praesentium maiores.</p>
                      <div className='Fold'>
                            <div className='folde'>

                            </div>
                      </div>
                  </div>
            </Col>
        

          </Row>
        </Container>
        <Container fluid>
                <Row>
                <Col xs={12}>
                  <div className='servtuto'>
                    <h2>Watch our video tutorial orem ipsum dolor sit amet consectetur adipiscing elit.</h2>

                  </div>
            </Col>
                </Row>
            </Container>
        {/* service */}

        {/* project */}
        <Container>
          <Row>
              <Col xs={12}>
                <div className='text-center'>
                          <h5 className='intro'>Our Work</h5>
                          <h1 style={{fontweight:'bold'}}>Latest project</h1>
                </div>
              </Col>
              
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
              <Col xs={12} md={4} lg={3}>
                <div className='proimg' >
                <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_5.jpg'} alt='image' className='preeimg'/>
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
                <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_6.jpg'} alt='image' className='preeimg'/>
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
                <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_7.jpg'} alt='image' className='preeimg'/>
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
                <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/work_1.jpg'} alt='image' className='preeimg'/>
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

        {/* project */}
        {/* Blogs */}
        <Container>
            <Row>
                <Col xs={12}>
                  <div className='text-center'>
                            <h5 className='intro'>Blogs</h5>
                            <h1 style={{fontweight:'bold'}}>OUR BLOGS</h1>
                  </div>
                </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={4} >
                    <div className='blogcard'>
                      <div>
                        <h2>basic plan</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                      <hr style={{height:"1px" ,color:"Black"}}></hr>
                      <div>
                          <h3><span>$70</span>/ Per Month</h3>
                          <p>Two men for transport</p>
                          <p>Single covered truck</p>
                          <p>Maximum 100 miles
                          </p>
                          <button className='blogbtn'>ORDER NOW</button>
                      </div>
                    </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                    <div className='blogcard'>
                      <div>
                        <h2>basic plan</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                      <hr style={{height:"1px" ,color:"Black"}}></hr>
                      <div>
                          <h3><span>$70</span>/ Per Month</h3>
                          <p>Two men for transport</p>
                          <p>Single covered truck</p>
                          <p>Maximum 100 miles
                          </p>
                          <button className='blogbtn'>ORDER NOW</button>
                      </div>
                    </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                    <div className='blogcard'>
                      <div>
                        <h2>basic plan</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                      </div>
                      <hr style={{height:"1px" ,color:"Black"}}></hr>
                      <div>
                          <h3><span>$70</span>/ Per Month</h3>
                          <p>Two men for transport</p>
                          <p>Single covered truck</p>
                          <p>Maximum 100 miles
                          </p>
                          <button className='blogbtn'>ORDER NOW</button>
                      </div>
                    </div>
              </Col>
            </Row>
          </Container>
          <Container fluid className='my-4'>
                <div className='blogpic'>
                      <div style={{width:"50%"}}>
                          <h5 className='intro'>  Our testimonials</h5>
                          <h1 style={{fontweight:'bold'}}>what client say</h1>
                          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi debitis similique voluptas atque itaque autem sequi voluptatibus beatae dolores, voluptatem labore dignissimos cumque assumenda praesentium repellat repellendus? Earum, harum quo.</p>
                          <h6>John watson</h6>
                          <p>CEO at Facebook</p>
                      </div>
                 </div>
          </Container>

        {/* Blogs */}

        {/* clients */}
          <Container className='my-3'>
          <Row>
                <Col xs={12}>
                  <div className='text-center'>
                            <h5 className='intro'>Clients</h5>
                            <h1 style={{fontweight:'bold'}}>OUR CLIENTS</h1>
                  </div>
                </Col>
            </Row>
           <Row>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-4.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-5.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-6.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-3.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-1.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                <Col xs={6} md={4} lg={2}>
                  <div>
                    <img src={'https://tidytheme.xyz/blackgallery/elizah/html/images/client-2.jpg'} alt='image' className='img-fluid'/>
                  </div>
                </Col>
                
            </Row> 
          </Container>
        {/*  clients*/}
        {/* Contact */}
        <Container className='mt-5'>
        <Row>
                <Col xs={12}>
                  <div className='text-center'>
                            <h5 className='intro'>Contact</h5>
                            <h1 style={{fontweight:'bold'}}>OUR CLIENTS</h1>
                  </div>
                </Col>
            </Row>
                <Row>
                    <Col className='col-12 col-md-6 col-lg-6'>
                        <Form>
                            <Row>
                                <Col className='col-12 col-md-6 col-lg-6 mb-md-3'>
                                    <Form.Control className='input mt-3' type='text' placeholder='Name'></Form.Control>
                                </Col>
                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <Form.Control className='input mt-3' type='text' placeholder='Your Email'></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='col-12 col-md-6 col-lg-6 mb-md-3'>
                                    <Form.Control className='input mt-3' type='text' placeholder='Phone Number'></Form.Control>
                                </Col>
                                <Col className='col-12 col-md-6 col-lg-6'>
                                    <Form.Control className='input mt-3' type='text' placeholder='Subject'></Form.Control>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='message mb-md-3 mt-3'>
                                <textarea name="message" rows="3" cols="30" placeholder='Message'>
                                      </textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className='formbtn'>Submit</button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-6 mt-3 '>
                        <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4361660999957!2d78.39388627331917!3d17.438825901324943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b6148dc3d5%3A0x60f8a7a33e4b8481!2sNavakarana%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1731917194816!5m2!1sen!2sin" width="100%" height="350px"></iframe>   
                        </div>
                    </Col>
                </Row>
            </Container>
        {/* Contact */}

      </div>
      <Footer />
    </>
  )
}

export default Home
