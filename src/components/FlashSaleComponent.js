import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
import OwlCarousel from 'react-owl-carousel';
// Component 
import FlashTimeCountComponent from './FlashTimeCountComponent';

// icon 
import { BiHeart, BiCart, BiSearchAlt } from "react-icons/bi";
// Rate 
import { Rate } from 'antd';
// Time Count 
const time = new Date();
time.setSeconds(time.getSeconds() + 10000);

export class FlashSaleComponent extends Component {
    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 2,
                },
                450: {
                    items: 2,
                },
                600: {
                    items: 2,
                },
                1024: {
                    items: 4,
                },
                1366: {
                    items: 5,
                },
            },
            flashData: [
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
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
                                dots={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                responsive={this.state.responsive}
                            >
                            {this.state.flashData.map((flashData, i) =>
                                <div className="item" key={i}>
                                    <div className="item ps_product_box ps_product_standard">
                                        <div className="ps_product__image">
                                            <figure>
                                                {/* <Link to="/product-details"> */}
                                                <Link to="/product-details">
                                                    <img src={flashData.image1} alt=""></img>
                                                    <img src={flashData.image2} alt=""></img>
                                                </Link>
                                                
                                            </figure>
                                            <div className="ps_product__actions">
                                                <BiHeart className="ps_product__item" />
                                                <BiSearchAlt className="ps_product__item" />
                                                <BiCart className="ps_product__item" />
                                            </div>
                                            <div className="ps_product__percent"> {flashData.discount} </div>
                                        </div>
                                        <div className="product_content_wrapper">
                                            <span className="price">
                                                <del> {flashData.del} </del>
                                                <span> {flashData.price} </span>
                                            </span>
                                            <p> {flashData.title}</p>
                                            <div className="in_stock"> {flashData.stock} </div>
                                            <Rate allowHalf defaultValue={3.5} />
                                            <div className="product_pcs">the available products : <span> {flashData.psc} </span></div>
                                            <Link className="product_add_cart" to="/"> Add to cart </Link>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </OwlCarousel>
                    </div>
                </Container>
            </div>
        )
    }
}

export default FlashSaleComponent
