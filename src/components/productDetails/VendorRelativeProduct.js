import { Row } from 'antd'
import React, { Component } from 'react'
import { Rate } from 'antd';
import { BiCart, BiHeart, BiSearchAlt  } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export class VendorRelativeProduct extends Component {
    constructor() {
        super()
        this.state = {
            flashData: [
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_05.jpg", "image2": "assets/images/fs_06.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_07.jpg", "image2": "assets/images/fs_08.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "50%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_09.jpg", "image2": "assets/images/fs_10.jpg"},
                { "discount": "30%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg"},
                { "discount": "40%", "del":"৳24.00", "price": "৳19.00", "title": "Blue Hot Water Bottle, 2 Quart Capacity", "stock":"In Stock","psc":"39", "image1": "assets/images/fs_03.jpg", "image2": "assets/images/fs_04.jpg"},
               
               
            ]
        }
    }
    render() {
        return (
            <div className="vendorRelativeProduct">
                <div className="vendorRelativeProduct_header">
                <h1> More Products From This Vendor </h1>
                    <Link to="/"> More Products </Link>
                </div>
                <div className="vandor_relative_product_box">
                    <Row>
                    {this.state.flashData.map((flashData, i) =>
                                  
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
                    </Row>
                </div>
            </div>
        )
    }
}

export default VendorRelativeProduct
