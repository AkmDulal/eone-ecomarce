import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Rate } from 'antd';
// Component 
import BrandCom from "../components/category/Brand"
import CategoryFilter from "../components/category/CategoryFilter"
// images
import CBanner from "../assets/images/c_banner.png" 
import { BiCart, BiHeart, BiSearchAlt  } from 'react-icons/bi'
import { VscArrowDown } from "react-icons/vsc";
import { Link } from 'react-router-dom'

import { Radio } from 'antd';
import { Input } from 'antd';

import { BiCaretRight } from "react-icons/bi";

export class category extends Component {
    constructor() {
        super()
        this.state = {
            visiable:8,
            flashData: [
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
               
            ]
        }
        this.loadmore = this.loadmore.bind(this);
    }
    loadmore(){
        this.setState((old)=>{
            return { visiable: old.visiable +8 }
        })
    }
    render() {
        const { Search } = Input;
        return (
            <div className="category_area">
                <div className="category_header_full_width">
                    <Container>
                        <h3 className="category_header__a">  Weight Loss Fitness  <span> Home |  Weight Loss Fitness  </span> </h3>
                    </Container>
                </div>
                
                <div className="categore_body_area">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <img className="ctagre_img" src={CBanner} alt="banner"></img>
                                <div className="categore_box_brand">
                                    <BrandCom />
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="categore_title_box  categore_title_box_rsponsive">
                                    <h4> Related Categories </h4>
                                    <p> Hand Washes and Sanitizers </p>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <div className="categore_title_box">
                                    <div className="categore_title_box_text">
                                        <h4> Hand Sanitizer </h4>
                                        <p> 244 items found in Hand Washes </p>
                                    </div>


                                    <div className="section_header">
                                        <div className="rasponsive__filter__">
                                            <CategoryFilter />
                                        </div>
                                        <div className="section_header_right">
                                            <Search className="location_search" placeholder="Search....." />
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                
                            </Col>
                            <Col lg={3}>
                                <div className="categore_filter_area">
                                    <div className="price_filter">
                                        <h3> Price </h3>
                                        <input type="number" className=""></input>
                                        <span> - </span>
                                        <input type="number" className=""></input>
                                        <BiCaretRight className="price_filter_btn" />
                                    </div>
                                    <div className="price_filter">
                                        <h3> Service </h3>
                                        <Radio.Group name="radiogroup" defaultValue={1}>
                                            <Radio className="s_width" value={1}>Cash On Delivery</Radio>
                                            <Radio className="s_width" value={2}>Fulfilled By Eone</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className="price_filter">
                                        <h3> Color Family </h3>
                                        <Radio.Group name="radiogroup" defaultValue={1}>
                                            <Radio className="s_width" value={1}>Pink</Radio>
                                            <Radio className="s_width" value={2}>Green</Radio>
                                            <Radio className="s_width" value={3}>Lemon Yellow</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className="price_filter">
                                        <h3> Rating </h3>
                                        <Rate className="s_width" allowHalf defaultValue={5} />
                                        <Rate className="s_width" allowHalf defaultValue={4.5} />
                                        <Rate className="s_width" allowHalf defaultValue={3.5} />
                                        <Rate className="s_width" allowHalf defaultValue={2.5} />
                                        <Rate className="s_width" allowHalf defaultValue={1.5} />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <div className="categore_box_cntn">
                                    
                                <Row>
                                {this.state.flashData.slice(0,this.state.visiable).map((flashData, i) =>
                                  
                                  <div className="col-6 col-md-4 col-lg-3">
                                      <div key={i}>
                                          <div className="ps_product_box ps_product_standard">
                                              <div className="ps_product__image">
                                                  <figure>
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
                                  </div>
                                )}
                                <Col lg={12}>
                                    <button className="loadMore__btn" type="button" onClick={this.loadmore}> Load More <VscArrowDown /> </button>
                                </Col>
                                </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default category
