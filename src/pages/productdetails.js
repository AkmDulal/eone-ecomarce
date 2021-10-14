import React, { Component } from 'react'

import {  Row, Col, Container } from 'react-bootstrap';
import SliderImage from 'react-zoom-slider';
import { Radio, Rate  } from 'antd';

import MoreProduct from "../components/productDetails/MoreProduct"
import DescriptionTabs from "../components/productDetails/DescriptionTabs"
import VendorRelativeProduct from "../components/productDetails/VendorRelativeProduct"


import { VscCircleFilled, VscAdd, VscChromeMinimize } from "react-icons/vsc";
import { BiCart, BiCar, BiCurrentLocation } from "react-icons/bi";
import { HiHeart, HiHome, HiPhone } from "react-icons/hi";

import BannerImg from "../assets/images/banner3.jpg" 
const data = [
    {
      image: "assets/images/producd/el_img1.jpg",
    },
    {
      image: "assets/images/producd/el_img2.jpg",
    },
    {
      image: "assets/images/producd/el_img3.jpg",
    },
    {
      image: "assets/images/producd/el_img4.jpg",
    },
    {
      image: "assets/images/producd/el_img1.jpg",
    },
    {
      image: "assets/images/producd/el_img2.jpg",
    }
  
  ];

export class productdetails extends Component {
    render() {
        return (
            <div className="product_details_area">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="breadcrumb">
                                <p> <HiHome /> </p>
                                <p> Product Details </p>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="product_box_img">
                            {/* <p> Home >> Product > <strong> Product Details </strong> </p> */}
                            <SliderImage 
                                data={data} 
                                width="100%" 
                                showDescription={true} 
                                responsive={true}
                                direction="right" 
                                /> 
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="pr_details_text">
                                <p> Casual Shirt </p>
                                <h2 className="woo_pr_title">Blue Hot Water Bottle, 2 Quart Capacity</h2>
                                <Rate allowHalf defaultValue={2.5} /> <span> (124 Reviews) </span>
                                <div className="woo_pr_price">
                                    <div className="woo_pr_offer_price">
                                        <h3>$149<sup>.00</sup><span className="org_price">$199<sup>.99</sup></span></h3>
                                    </div>
                                </div>
                                <div className="woo_pr_short_desc">
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores voluptatem quia voluptas sit aspernatur.</p>
                                </div>
                                <div className="woo_pr_color flex_inline_center mb-3">
                                    <div className="woo_pr_varient">
                                        <h6>Size:</h6>
                                    </div>
                                    <div className="woo_colors_list pl-3">
                                        <Radio.Group >
                                            <Radio value={1}>SM</Radio>
                                            <Radio value={2}>M</Radio>
                                            <Radio value={3}>L</Radio>
                                            <Radio value={4}>XL</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                                <div className="insotrk_box">
                                    Availability: <span>129 in stock</span>
                                </div>
                                <div className="product_type">
                                    <p> <VscCircleFilled /> Type: Organic </p>
                                    <p> <VscCircleFilled /> MFG: Jun 4.2020 </p>
                                    <p> <VscCircleFilled /> LIFE: 30 days </p>
                                </div>
                                <div className="cartBtn_box">
                                    <div class="ps-product__quantity">
                                        <label>Quantity: </label>
                                        <div className="def_number_input number_input">
                                            <button className="minus"> <VscChromeMinimize /> </button>
                                            <input className="quantity" min="0" name="quantity" value="10"  type="number"></input>
                                            <button className="minus"> <VscAdd />  </button>
                                        </div>
                                        <button className="product__addcart" > <BiCart /> Add to cart </button>
                                        <HiHeart className="wis__btn" />
                                    </div>
                                </div>
                                <div className="product__category_details_pages">
                                    <p> Brand: <span> FarmMatket </span> </p>
                                    <p> Categories: <span>  Fresh, Vegetales, Olives & Selection Platters </span> </p>
                                    <p> Tags:  <span> meat organic food, beet, healthy, foody </span> </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="free_shipping_area">
                                <div className="shipping_bolck">
                                    <BiCar />
                                    <div className="shipping_bolck_text">
                                        <p>  <b> Free Shipping </b> apply to all orders over $100  </p>
                                    </div>
                                </div>
                                <div className="shipping_bolck">
                                    <BiCurrentLocation />
                                    <div className="shipping_bolck_text">
                                        <p>  Guranteed <b> 100% Organic </b> from natural farmas   </p>
                                    </div>
                                </div>
                            </div>
                            <div className="free_shipping_area">
                                <div className="shipping_bolck">
                                    <div className="shipping_bolck_text">
                                        <p>  Hotline Order: Free 7:00-21:30  </p>
                                        <span> <HiPhone /> 970978-6290 </span>
                                        <span> <HiPhone /> 970978-6290 </span>
                                    </div>
                                </div>
                            </div>
                            <div className="sell_descount">
                                <img src={BannerImg} alt=""></img>
                                <div className="sell_banner_content">
                                    <h3> 40% Off </h3>
                                    <h4>  Ultimate Sale </h4>
                                </div>
                            </div>
                        </Col>

                        <Col lg={9}>
                            <DescriptionTabs />
                        </Col>
                        <Col lg={3}>
                            <div className="sell_descount">
                                <MoreProduct />
                            </div>
                        </Col>

                        <Col lg={12}>
                            <VendorRelativeProduct />
                        </Col>

                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default productdetails
