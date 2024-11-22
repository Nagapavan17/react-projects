import React from 'react'
import Head from '../Header/Head'
import Menubar from '../Menubar/Menubar'
import Footer from '../Footer/Footer'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Container,Row,Col,Card, CardImg, CardBody, CardText, CardTitle } from 'react-bootstrap'
import { IoPeople } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import img from '../assets/contact/people.png'
import pavan from '../assets/contact/pavan.jpg'
import deva from '../assets/contact/deva.jpg'
import ban from '../assets/contact/banner.jpeg'
import nenu from '../assets/contact/pavan2.jpg'
import { motion } from 'framer-motion';
import './About.css'
const About = () => {
  return (
    <>
        
        <Head />
        <Menubar className='Menu' />

        <Container fluid className='Banner w-100'>
            <Container className='bg-black-50 pt-5 pt-md-3 pt-lg-5 pe-lg-5'>
                  <Row className='pt-5 pt-lg-4 pe-lg-5 me-5'>
                    <Col className='ms-5  pt-lg-0 pe-5'>
                        <h1 className='display1 bolder'>Our About</h1>
                        <p className='para pe-lg-5 text-break'>How do you create a remarkable change? By hiring, celebrating and nurturing the best people from all walks of life.</p>
                    </Col>
                  </Row>
            </Container>
        </Container>
        
        <Container fluid className='about mt-3 mt-lg-5 ps-lg-5'>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
                <div className="heading col-12 mt-3">
                  <h4>Welcome to ReachAll</h4>
                  <p className='enti'>ReachAll is seen as a benchmark in its outreach to investors, in its transparency and disclosures, publicly communicating its strategy, risks and opportunities, reducing information asymmetries and enabling fair valuation of the stock.
                  </p>
                </div>
                <div className="icons mt-4">
                  <div className="project mt-3 ">
                      <div className="people d-flex mt-3">
                          <div>
                            <IoPeople className='icon' />
                          </div>
                          <div className='title'>
                             Business Develop
                          </div>
                      </div>
                      <div className="para1 text-break mt-2">
                          <p>ReachAll is seen as a benchmark in its outreach to investors, in its transparency and disclosures, publicly communicating its strategy, risks and opportunities, reducing information asymmetries and enabling fair valuation of the stock.</p>
                      </div>
                  </div>
                  <div className="project mt-4 mt-lg-5">
                      <div className="creative d-flex mt-3 ">
                         <div>
                              <IoSettings className='icon' />
                         </div>
                         <div className='title'>
                               Creative Work
                         </div>
                      </div>
                      <div className="para1 text-break mt-2">
                          <p>ReachAll is seen as a benchmark in its outreach to investors, in its transparency and disclosures, publicly communicating its strategy, risks and opportunities, reducing information asymmetries and enabling fair valuation of the stock.</p>
                      </div>
                  </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} >
                <motion.div
                initial={{opacity:0 ,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1}} >
                    <img src={img} className='img-fluid' alt="" />
                </motion.div>
            </Col>
          </Row>
        </Container>

        <Container fluid className='data bg-light mt-lg-5 pb-lg-5'>
              <Row>
                  <Col sm={12} md={12} lg={12}>
                        <h2 className='text-center mt-5 skills mb-lg-5'>Our Skills</h2>
                  </Col>
              </Row>
              <Row>
                <Col sm={12} md={6} lg={6}>
                      <h2>How we work</h2>
                      <p className="text1 mt-3">
                          At ReachAll, we go beyond helping businesses transform through technology. We help them make a meaningful difference; to their customers, 
                          and to the communities they serve.
                      </p>
                      <p className="text1 ">
                          The technology industry drives business transformations in other sectors. Encompassing a range of businesses from semiconductor 
                          manufacturers and network technology companies to industrial electronics and software and professional services, this sector needs a 
                          high level of digital maturity and supply chain resilience. Accelerated innovation, coupled with a focus on as-a-service models and 
                          ecosystem play, will help technology companies develop innovative solutions for the industries they serve and deliver compelling experiences that will shape the world. 
                      </p>
                      <div className="section d-flex justify-content-around">
                          <div className="">
                              <p className="">
                                <TiTick />
                                  Global Chain Solutions
                              </p>
                              <p className="">
                                <TiTick />
                                    24 Hours - Technical Support
                              </p>
                              <p className="">
                                <TiTick />
                                    Mobile Shipment Tracking
                              </p>
                          </div>
                          <div className="">
                          <p className="">
                                <TiTick />
                                  Global Chain Solutions
                              </p>
                              <p className="">
                                <TiTick />
                                    24 Hours - Technical Support
                              </p>
                              <p className="">
                                <TiTick />
                                    Mobile Shipment Tracking
                              </p>
                          </div>
                      </div>
                </Col>
                <Col sm={12} md={6} lg={6}>  
                   <div className="prograss">
                      <motion.div
                      initial={{opacity:0 ,scale:0}}
                      whileInView={{opacity:1,scale:1}}
                      transition={{duration:1}}
                       className="bar">
                          <h5 className='mb-3 mt-lg-3 mt-3'>Finance</h5>
                          <ProgressBar variant="sucess" now={80} label={80} />
                      </motion.div>
                      <motion.div 
                       initial={{opacity:0 ,scale:0}}
                       whileInView={{opacity:1,scale:1}}
                       transition={{duration:1}}
                      className="bar">
                          <h5 className='mb-3 mt-lg-3 mt-3'>Marketings</h5>
                          <ProgressBar variant="danger" now={60} label={60} />
                      </motion.div>
                      <motion.div
                       initial={{opacity:0 ,scale:0}}
                       whileInView={{opacity:1,scale:1}}
                       transition={{duration:1}}
                       className="bar">
                          <h5 className='mb-3 mt-lg-3 mt-3'>Resource</h5>
                          <ProgressBar variant="dark" now={90} label={90} />
                      </motion.div>
                      <motion.div
                       initial={{opacity:0 ,scale:0}}
                       whileInView={{opacity:1,scale:1}}
                       transition={{duration:1}}
                       className="bar">
                          <h5 className='mb-3 mt-lg-3 mt-3'>Development</h5>
                          <ProgressBar variant="info" now={50} label={50} />
                      </motion.div>
                   </div>
                </Col>
              </Row>
        </Container>
        <Container fluid className='pb-4 our-team'>
          <Row>
              <Col sm={12} >
                  <h2 className="team">Meet Our Team</h2>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <motion.div
                  initial={{opacity:0 ,scale:0}}
                  whileInView={{opacity:1,scale:1}}
                  transition={{duration:1}}>
                  <Card>
                    <CardImg src={deva} className='team-img' />
                    <CardBody className='text-center'>
                      <CardText className='text-black-50' >Lead Developer</CardText>
                      <CardTitle className='fw-bold'>Devendra Goud</CardTitle>
                    </CardBody>
                  </Card>
                  </motion.div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                <motion.div
                initial={{opacity:0 ,scale:0}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:1}}>
                <Card>
                    <CardImg src={pavan} className='team-img' />
                    <CardBody className='text-center'>
                      <CardText className='text-black-50' >Full Stack Developer</CardText>
                      <CardTitle className='fw-bold'>Naga Pavan</CardTitle>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <motion.div
                  initial={{opacity:0 ,scale:0}}
                  whileInView={{opacity:1,scale:1}}
                  transition={{duration:1}}>
                  <Card>
                    <CardImg src={ban} className='team-img' />
                    <CardBody className='text-center'>
                      <CardText className='text-black-50' >Extra Player</CardText>
                      <CardTitle className='fw-bold'>Pallavi</CardTitle>
                    </CardBody>
                  </Card>
                  </motion.div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3}>
                  <motion.div
                  initial={{opacity:0 ,scale:0}}
                  whileInView={{opacity:1,scale:1}}
                  transition={{duration:1}}>
                      <Card>
                        <CardImg src={nenu} className='team-img' />
                        <CardBody className='text-center'>
                          <CardText className='text-black-50' >HR Manager</CardText>
                          <CardTitle className='fw-bold'>Gokul Karthik</CardTitle>
                        </CardBody>
                      </Card>
                  </motion.div>
              </Col>
          </Row>
        </Container>
        <Footer />
    </>
  )
}

export default About