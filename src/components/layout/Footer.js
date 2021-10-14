import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Input } from 'antd';
// import { VscLock } from "react-icons/vsc";

import NewsLetter from "../../assets/images/newslatter.png"
// import LogoIcon from "../../assets/images/logo_icon.png"
import { Link } from 'react-router-dom';

import PrenentImg from "../../assets/images/mrament.jpg"
import CartComponent from '../CartComponent';
import { BiHeart, BiHome, BiUser } from "react-icons/bi";

export class Footer extends Component {
    render() {
        const { Search } = Input;
        return (
            <div className="full_footer_area">
                <div className="footer_area">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <div className="newsletter_text">
                                    <h5> $20 discount for your first order </h5>
                                    <h3> Join our newsletter and get... </h3>
                                    <p>  Join our email subscription now to get updates on promotions <br></br> and coupons. </p>
                                    <div className="location_find_area">
                                        <div className="location_details search_input">
                                            <Search className="location_search" placeholder="Your email address" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <img className="newsimg" src={NewsLetter} alt="newslatter" ></img>
                            </Col>
                            
                        </Row>
                    </Container>
                    
                </div>
                
                    <div className="footer_text_area">
                        <Container>
                                <Row>
                                    <Col>
                                        <div className="footer_text">
                                            <h3> FRUIT & VEGETABLES </h3>
                                            <Link to="/"> Fresh Vegetables  </Link>
                                            <Link to="/"> Fresh Fruits  </Link>
                                            <Link to="/">  Cuts & Sprouts  </Link>
                                            <Link to="/"> Exotic Fruits & Veggies  </Link>
                                            <Link to="/"> Packaged Produce  </Link>
                                            <Link to="/"> Party Trays  </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="footer_text">
                                            <h3> Breakfast & Dairy </h3>
                                            <Link to="/"> Fresh Vegetables  </Link>
                                            <Link to="/"> Fresh Fruits  </Link>
                                            <Link to="/">  Cuts & Sprouts  </Link>
                                            <Link to="/"> Exotic Fruits & Veggies  </Link>
                                            <Link to="/"> Packaged Produce  </Link>
                                            <Link to="/"> Party Trays  </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="footer_text">
                                            <h3> Meat & Seafood </h3>
                                            <Link to="/"> Fresh Vegetables  </Link>
                                            <Link to="/"> Fresh Fruits  </Link>
                                            <Link to="/">  Cuts & Sprouts  </Link>
                                            <Link to="/"> Exotic Fruits & Veggies  </Link>
                                            <Link to="/"> Packaged Produce  </Link>
                                            <Link to="/"> Party Trays  </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="footer_text">
                                            <h3> Beverages </h3>
                                            <Link to="/"> Fresh Vegetables  </Link>
                                            <Link to="/"> Fresh Fruits  </Link>
                                            <Link to="/">  Cuts & Sprouts  </Link>
                                            <Link to="/"> Exotic Fruits & Veggies  </Link>
                                            <Link to="/"> Packaged Produce  </Link>
                                            <Link to="/"> Party Trays  </Link>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="footer_text">
                                            <h3> Breads & Bakery </h3>
                                            <Link to="/"> Fresh Vegetables  </Link>
                                            <Link to="/"> Fresh Fruits  </Link>
                                            <Link to="/">  Cuts & Sprouts  </Link>
                                            <Link to="/"> Exotic Fruits & Veggies  </Link>
                                            <Link to="/"> Packaged Produce  </Link>
                                            <Link to="/"> Party Trays  </Link>
                                        </div>
                                    </Col>
                                    <Col lg={12}>
                                        <div className="footer_bootm_area">
                                            <p> Copyright 2021 © Eone Theme. All rights reserved. <Link to="/"> Powered </Link> by <Link to="/"> Infinity Infotech </Link>. </p>
                                            {/* <PrenentImg /> */}
                                            <img src={PrenentImg} alt="Prayment"></img>
                                        </div>
                                    </Col>
                                </Row>
                        </Container>



                        <div className="rasponsive__footr_box">
                            <Container>
                                <div className="location_find_area">
                                    <Row>
                                        <div className="col-3 col-lg-3">
                                            <Link className="raspon__footer___btm" to="/">
                                                {/* <img src={LogoIcon} alt=""></img> */}
                                                <BiHome className="registrison_icon" />
                                                <p> Home </p>
                                            </Link>
                                        </div>
                                        <div className="col-3 col-lg-3">
                                            <Link className="raspon__footer___btm" to="/">
                                                <BiHeart className="registrison_icon" />
                                                <p> Wish List </p>
                                            </Link>
                                        </div>
                                        <div className="col-3 col-lg-3">
                                                <Link className="raspon__footer___btm" to="/">
                                                <div className="cart_area">
                                                <CartComponent />
                                            </div>
                                            </Link>
                                        </div>


                                        <div className="col-3 col-lg-3">
                                            <Link className="raspon__footer___btm" to="/">
                                                <BiUser className="registrison_icon" />
                                                <p> Account </p>
                                            </Link>
                                        </div>
                                        
                                    </Row>
                                    
                                </div>
                            </Container>
                    </div>


                    </div>
            </div>
            
        )
    } 
}

export default Footer
