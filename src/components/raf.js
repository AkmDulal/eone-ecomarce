import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import OwlCarousel from 'react-owl-carousel';
// Component 
import FlashTimeCountComponent from './FlashTimeCountComponent';
// images
import Fso1 from "../assets/images/fs_01.jpg" 
import Fso2 from "../assets/images/fs_02.jpg" 

// icon 
import { BiHeart, BiCart, BiSearchAlt } from "react-icons/bi";
// Time Count 
const time = new Date();
time.setSeconds(time.getSeconds() + 10000);
// BiHeart
export class FlashSaleComponent extends Component {
    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 5,
                },
            },
            NewArrival: [
                { "image": "assets/images/banner/slider1.jpg"  },
                { "image": "assets/images/banner/slider1.jpg"  },
                { "image": "assets/images/banner/slider1.jpg"  },
            ]
        }
        
    }

    render() {
        const { Search } = Input;
        return (
            <div className="flash_sale_area">
                <Container>
                    <div className="section_header">
                        <h3> Best Deals of the week! <FlashTimeCountComponent expiryTimestamp={time} /> </h3>
                        <div className="section_header_right">
                            <Link className="header__btn" to="/"> View All </Link>
                        </div>
                        <div className="section_header_right">
                            <Search className="location_search" placeholder="Search....." />
                        </div>
                    </div>
                    <div className="flas_shell_product">
                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={false}
                            autoplay={false}
                            autoplayTimeout={2000}
                            responsive={this.state.responsive}
                        >
                            <div className="item ps_product_box ps_product_standard">
                                <Link to="/">
                                    <div className="ps_product__image">
                                        <figure>
                                            <img src={Fso1} alt=""></img>
                                            <img src={Fso2} alt=""></img>
                                        </figure>
                                        <div className="ps_product__actions">
                                            <BiHeart className="ps_product__item" />
                                            <BiSearchAlt className="ps_product__item" />
                                            <BiCart className="ps_product__item" />
                                        </div>
                                        <div className="ps_product__percent">-30%</div>
                                    </div>
                                    <div className="product_content_wrapper">
                                        <span className="price">
                                            <del> $24.00 </del>
                                            <span> $19.50 </span>
                                        </span>
                                        <p> Blue Hot Water Bottle, 2 Quart Capacity </p>
                                        <div className="in_stock">In Stock</div>
                                    </div>
                                </Link>
                            </div>

                    </OwlCarousel>
                    </div>
                </Container>
            </div>
        )
    }
}

export default FlashSaleComponent
