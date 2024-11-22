import React from 'react'
import Head from '../Header/Head'
import Menubar from '../Menubar/Menubar'
import { Col, Container, Row} from 'react-bootstrap'
import img from '../assets/contact/carousel.webp'
import img1 from '../assets/contact/blog-banner.png'
import insta1 from '../assets/contact/insta1.jpg'
import insta2 from '../assets/contact/insta2.jpg'
import blog2 from '../assets/contact/blog2.jpg'
import blog3 from '../assets/contact/blog3.jpg'
import { FaCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import blog1 from '../assets/contact/blog1.jpg'
import './Blog.css'
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
    <>
        <Head />
        <Menubar className='Menu' />
        <Container fluid className='blog-banner' >
            <div className="blog-heading ms-lg-5">
                <h2 className='pslg-5 ms-lg-5 lg-black'>Our Latest news</h2>
            </div>
        </Container>
        <Container>
            <Row>
                <Col xs={12} sm={12} md={12} lg={8}>
                <div>
                    <div className="slides mt-4">
                        <div className=" w-100 col-12 col-lg-6 img1">
                            <img src={img} alt="" className='w-100 images'/>
                            <div className="blog bg-light ms-lg-2 ">
                                <p>
                                    <span className=""><FaCalendarAlt /> jan 12</span>
                                    <span className=""><FaTag />Marketing</span>
                                    <span className=""><LuMessageSquare />10</span>
                                </p>
                                <h2 className="heading3">
                                        How to remove coffee stain
                                </h2>
                                <p className="data">
                                To remove a coffee stain, it's important to act quickly. If the stain is fresh, blot it gently with a clean cloth or paper towel to absorb as much coffee as possible without rubbing, which can spread the stain. Then, rinse the fabric under cold water, and apply a small amount of liquid dish soap or laundry detergent directly to the stain. Let it sit for about 5-10 minutes, then rinse again with cold water. For dried stains, soak the fabric in cold water with detergent for around 30 minutes, and use a stain remover to treat the area. Afterward, gently scrub with a soft brush and launder as usual, ensuring the stain is gone before drying. For carpet or upholstery, blot the stain to absorb excess liquid, then use a solution of vinegar, dish soap, and warm water to blot the stain gently, followed by rinsing with clean water. Finally, blot dry and allow the area to air dry completely.
                                </p>
                                <button className='more'>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="slides mt-4">
                        <div className=" w-100 col-12 col-lg-6 img1">
                            <img src={insta2} alt="" className='w-100 images'/>
                            <div className="blog bg-light ms-lg-2 ">
                                <p>
                                    <span className=""><FaCalendarAlt /> jan 12</span>
                                    <span className=""><FaTag />Marketing</span>
                                    <span className=""><LuMessageSquare />10</span>
                                </p>
                                <h2 className="heading8">
                                        How to remove coffee stain
                                </h2>
                                <p className="data">
                                To remove a coffee stain, it's important to act quickly. If the stain is fresh, blot it gently with a clean cloth or paper towel to absorb as much coffee as possible without rubbing, which can spread the stain. Then, rinse the fabric under cold water, and apply a small amount of liquid dish soap or laundry detergent directly to the stain. Let it sit for about 5-10 minutes, then rinse again with cold water. For dried stains, soak the fabric in cold water with detergent for around 30 minutes, and use a stain remover to treat the area. Afterward, gently scrub with a soft brush and launder as usual, ensuring the stain is gone before drying. For carpet or upholstery, blot the stain to absorb excess liquid, then use a solution of vinegar, dish soap, and warm water to blot the stain gently, followed by rinsing with clean water. Finally, blot dry and allow the area to air dry completely.
                                </p>
                                <button className='more'>READ MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col sm={12} md={12} lg={4}>
                    <div className="details bg-light mt-4 ps-lg-2">
                        <div className="search ms-3 mb-4 mb-lg-1">
                            <input type="search mt-lg-4 ms-lg-4" placeholder='Search' />
                            <IoIosSearch  className='search1'/>
                        </div>
                        <h5 className='mt-lg-5 ms-3 head'>Recent Post</h5>
                        <div className="post ">
                            <div className="img2 ms-3">
                                <img src={blog1} alt="" />
                            </div>
                            <div className='ms-4 '>
                                 <p>
                                    Product Two
                                </p >
                                <p className='date'>25th jan 2015</p>
                            </div>
                        </div>
                        <div className="post ">
                            <div className="img2 ms-3">
                                <img src={insta1} alt="" />
                            </div>
                            <div className='ms-4 '>
                                 <p>
                                    
                                    Phone Repair
                                </p>
                                <p className='date'>25th jan 2015</p>
                            </div>
                        </div>
                        <div className="post ">
                            <div className="img2 ms-3">
                                <img src={blog2} alt="" />
                            </div>
                            <div className='ms-4 '>
                                 <p>
                                    Desktop Repair
                                </p>
                                <p className='date'>25th jan 2015</p>
                            </div>
                        </div>
                        <div className="post ">
                            <div className="img2 ms-3">
                                <img src={blog3} alt="" />
                            </div>
                            <div className='ms-4 '>
                                 <p>
                                    Engine Gone
                                </p>
                                <p className='date'>25th jan 2015</p>
                            </div>
                        </div>
                        <h5 className='head mt-4 ms-3'>Post Categories</h5>
                        <div className="list mt-4">
                            <ul>
                                <li>Computer</li>
                                <li>Laptop</li>
                                <li>Monitor</li>
                                <li>Mobile</li>
                                <li>Phone</li>
                            </ul>
                        </div>
                        <h5 className='head mt-4 ms-3'>Instagram</h5>
                        <div className="instagram">
                            <div className="img2 ">
                                    <img src={blog2} alt="" />
                            </div>
                            <div className="img2 ">
                                <img src={insta1} alt="" />
                            </div>
                            <div className="img2 ">
                                <img src={insta2} alt="" />
                            </div>
                        </div>
                        <div className="instagram">
                            <div className="img2 ">
                                <img src={img1} alt="" />
                            </div>
                            <div className="img2 ">
                                <img src={img} alt="" />
                            </div>
                            <div className="img2 ">
                                <img src={blog2} alt="" />
                            </div>
                        </div>
                        <h5 className='head mt-4 ms-3'>Top Tags</h5>
                        <div className="buttons">
                            <button type='button' className='btn bg-dark text-white btn-sm ms-2'>Install</button>
                            <button type='button' className='btn bg-dark text-white btn-sm ms-2'>Design</button>
                            <button type='button' className='btn bg-dark text-white btn-sm ms-2'>Video</button>
                            <button type='button' className='btn bg-dark text-white btn-sm ms-2'>Branding</button>
                            <button type='button' className='btn bg-dark text-white btn-sm ms-2 px-3'>Packing</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <Footer />
    </>
  )
}

export default Blog