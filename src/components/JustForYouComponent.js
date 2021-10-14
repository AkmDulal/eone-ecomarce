import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Input } from 'antd';
// icon 
import { BiHeart, BiCart, BiSearchAlt } from "react-icons/bi";
import { VscArrowDown } from "react-icons/vsc";
// Rate 
import { Rate } from 'antd';


export class JustForYouComponent extends Component {
    constructor() {
        super()
        this.state = {
            visiable:12,
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
            return { visiable: old.visiable +12 }
        })
    }
    render() {
        const { Search } = Input;
        return (
            <div className="just_for_tou_area">
                <Container>
                    <div className="section_header">
                        <h3> Just For You </h3>
                        <div className="section_header_right">
                            <Link className="header__btn" to="/"> View All </Link>
                        </div>
                        <div className="section_header_right">
                            <Search className="location_search" placeholder="Search....." />
                        </div>
                    </div>
                    <div className="just_for_tou_product_area">
                        <Row>
                                {this.state.flashData.slice(0,this.state.visiable).map((flashData, i) =>
                                  
                                        <div className="col-6 col-md-4 col-lg-2">
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
                </Container>
            </div>
        )
    }
}

export default JustForYouComponent
