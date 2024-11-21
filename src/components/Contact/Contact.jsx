import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Ratio from 'react-bootstrap/Ratio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';  
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css'
import CardBody from 'react-bootstrap/esm/CardBody';
import Head from '../Header/Head';
import Menubar from '../Menubar/Menubar';
import Footer from '../Footer/Footer';
const Contact = () => {
  return (
    <>
            <Head />
            <Menubar className='Menu' />
            <Container fluid className='banner'>
                <div className='banner1 col-12 col-md-6 col-lg-6 ms-md-5 '>
                        <h1 className='display1 text-start mt-5 '>Contact Us</h1>
                        <p className='text'>We are happy to answer any questions about features, trials, pricing, need a demo, or anything else!</p>
                </div>
            </Container>
            <Container className='mt-5'>
                <Row>
                    <Col className='col-12 col-md-4 col-lg-4'>
                        <Card className='h-100 text-center'>
                            <CardBody>
                                <div>
                                     <FontAwesomeIcon className='icon ms-3' icon={faLocationDot} size='2x' />
                                </div>
                                <div>
                                    <span className="msg">Address</span>
                                </div>
                                <div>
                                    <p className="h6 text-black-50 ">10th floor,
                                    Cyber towers,
                                    Hyderabad, INDIA.</p>  
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-4 col-lg-4'>
                        <Card className='text-center h-100'>
                            <CardBody>
                                <div>
                                    <FontAwesomeIcon className='icon ms-3 ' icon={faEnvelope} size='2x' />
                                </div>
                                <div>
                                    <span className="msg">Gmail</span>
                                </div>
                                <div>
                                    <p className="h6 text-black-50  pointer">
                                        knagapavan17@gmail.com
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className='col-12 col-md-4 col-lg-4'>
                        <Card className='h-100 text-center'>
                            <CardBody>
                                <div>
                                    <FontAwesomeIcon className='icon' icon={faPhone} size='2x' />
                                </div>
                                <div>
                                    <span className="msg">Phone Number</span>
                                </div>
                                <div>
                                    <p className="h6 text-black-50 pointer">
                                    +91 9391792877
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5'>
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
                                    <Form.Control className='text' type='text' placeholder='message' />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control className='send mt-3' type='submit' placeholder='SEND'></Form.Control>
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
            <Footer />
    </>
  )
}

export default Contact