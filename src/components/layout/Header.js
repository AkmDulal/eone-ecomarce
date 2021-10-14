import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap';
// Component 
import LocationComponent from "../LocationComponent"
import CartComponent from "../CartComponent"
// Images 
import TopBanner from "../../assets/images/top_banner.png";
import Logo from "../../assets/images/logo.gif";
// Icon
import { BiX } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
// Routing 
import { Link } from 'react-router-dom';

import { Input } from 'antd';
import RasponsiveCatagores from '../RasponsiveCatagores';





export class Header extends Component {
    constructor(){
        super()
        this.state={
            showMe:true
        }
    }
     // Menu Scrolled 
     componentDidMount(){
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if(isTop !== true){
                this.setState({ scrolled: true });
            } else {
                this.setState({ scrolled: false })
            }
        });
    }

    operation(){
        this.setState({
            showMe: false
        })
    }
    render() {
        const { Search } = Input;
        return (
            <div className="custom_container">
                {
                    this.state.showMe?
                    <div className="top_banner_area">
                        <Container>
                            <h2 onClick={()=>this.operation()}>  <BiX /> </h2>
                            <img className="top_header_Banner" src={TopBanner} alt="Top Banner"></img>
                        </Container>
                    </div>
                    :null
                }
                    <div className="header__logo_search_area">
                <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
                        <Container>
                            <Row>
                                <Col lg={2} >
                                    <div className="logo">
                                        <Link className="rspnsiv____ogo" to="/">
                                            <img src={Logo} alt="logo"></img>
                                           
                                        </Link>
                                        <div className="location_find_area rspnsiv____search">
                                            <div className="location_details search_input">
                                                <Search className="location_search" placeholder="Search for products..." />
                                            </div>
                                        </div>
                                        <div className="rspn_nav_">
                                            <RasponsiveCatagores />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className="location_find_area ">
                                        <div className="location_rasponsive_class">
                                            <LocationComponent />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} >
                                    <div className="location_find_area rspnsiv____search___">
                                        <div className="location_details search_input">
                                            <Search className="location_search" placeholder="Search for products..." />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={2} >
                                    <div className="location_find_area location_find_area__raspn">
                                        <Link to="/dashboard">
                                            <BsPersonFill className="registrison_icon" />
                                        </Link>
                                        <div className="cart_area">
                                            <CartComponent />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="header_bottom_catagore">
                                        <RasponsiveCatagores />
                                    </div>
                                    <div className="header_bottom">
                                        <Link to="/coming-soon"> SAVE MORE ON APP </Link>
                                        <Link to="/coming-soon"> sell on Eone </Link>
                                        <Link to="/coming-soon"> customer care </Link>
                                        <Link to="/coming-soon"> Track my order </Link>
                                        <Link to="/login"> Login </Link>
                                        <Link to="/singup"> Singup </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                </div>
                    </div>
            </div>
        )
    }
}

export default Header



