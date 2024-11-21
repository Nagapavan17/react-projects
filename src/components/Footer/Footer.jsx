import React from 'react'
import { Container ,Row,Col } from 'react-bootstrap'
import './Footer.css'
import { SiMinutemailer } from "react-icons/si";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} lg={3}>
                            <div>
                                <h3>About Us</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur quod dolor non facere eos odit tempora quos aspernatur numquam fugit! Obcaecati in aspernatur explicabo tempora inventore labore dolor voluptatibus asperiores?</p>
                            </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div>
                            <h3>Helpful Link</h3>
                            <p>Why choose Us</p>
                            <p>About US</p>
                            <p>Services</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div>
                            <h3>Latest Post</h3>
                            <p>Loren ipsum dolor consectetur elitdo</p>
                            <p>Loren ipsum dolor consectetur elitdo</p>
                            <p>Loren ipsum dolor consectetur elitdo</p>
                            <p>Loren ipsum dolor consectetur elitdo</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div>
                            <h3>Subscribe Now</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A fugit doloremque laborum. Provident magnam commodi quas. Ducimus ex assumenda nihil site .</p>
                            <div className='ffrm'>
                            <input type='email' id='form' placeholder='Enter your email adress'/>
                            <button className='fbutton'><SiMinutemailer /></button>
                            </div>
                        </div>
                    </Col>
                    <hr></hr>
                    <Col xs={12}>
                        <div className='footpolicy'>
                            <p>Privacy Policy | © 2024 Quadrant Technologies</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer
