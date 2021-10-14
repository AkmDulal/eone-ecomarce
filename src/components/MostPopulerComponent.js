import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from 'antd';

// Images 
import Banner from "../assets/images/populer/banner.jpg" 
import Banner02 from "../assets/images/populer/banner02.jpg" 
import Img1 from "../assets/images/populer/p1.jpg" 
import Img2 from "../assets/images/populer/p2.jpg" 
import Img3 from "../assets/images/populer/p3.jpg" 
import Img4 from "../assets/images/populer/p4.jpg" 
import Img5 from "../assets/images/populer/p5.jpg" 
import Img6 from "../assets/images/populer/p6.jpg" 

export class MostPopulerComponent extends Component {
    render() {
        const { Search } = Input;
        return (
            <div className="most_populer_area">
                <Container>
                    <div className="section_header">
                        <h3> Most Popular </h3>
                        <div className="section_header_right">
                            <Link className="header__btn" to="/"> View All </Link>
                        </div>
                        <div className="section_header_right">
                            <Search className="location_search" placeholder="Search....." />
                        </div>
                    </div>
                    <div className="most_populer_box">
                        <Row>
                            <Col lg={4}>
                                <div className="populer_box_width">
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img1} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img2} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img3} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="banner_wrapper">
                                    <img src={Banner02} alt="banner"></img>
                                    <div className="banner_wrapper_contant">
                                        <h3 class="banner_wrapper_title">The freshest<br></br> milk products</h3>
                                        <Link className="product_add_cart" to="/category"> Shop Now </Link>
                                    </div>
                                </div>
                                <div className="banner_wrapper">
                                    <img src={Banner} alt="banner"></img>
                                    <div className="banner_wrapper_contant">
                                        <h3 class="banner_wrapper_title">Yogurt with <br></br> Delicious Fruit</h3>
                                        <Link className="product_add_cart" to="/category"> Shop Now </Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className="populer_box_width">
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img4} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img5} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                    <div className="populer_single_box">
                                        <img className="most_populer_img" src={Img6} alt=""></img>
                                        <div className="populer_box_text">
                                            <h3>Vitamins & Supplements </h3>
                                            <p> Betal Fresh,  Pure, Body Butter, <br></br> Restoring, Honey </p>
                                            <Link className="populer_box_link" to="/category"> Click Here </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default MostPopulerComponent
