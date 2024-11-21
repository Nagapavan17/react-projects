import React from 'react'
import './Head.css'
import {Container,Row,Col} from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6"; 
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Head = () => {
  return (
    <>
        <Container fluid className='Head-container'>
            <Row>
                <Col xs={12} sm={12} md={6} >
                    <div className='icon-con'>
                        <span><FaFacebookF /></span>
                        <span><FaInstagram /></span>
                        <span><FaLinkedin /></span>
                        <span><FaTwitter /></span>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} >
                    <div className='headcon'>
                        <p><span><FaPhone /></span> +91123456789</p>
                        <p><span><IoMdMail />
                        </span>corporate@gmail.com</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Head
