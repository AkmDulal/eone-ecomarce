import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Rate  } from 'antd';
// im

export class MoreProduct extends Component {
    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 1,
                },
                450: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
            NewArrival: [
                { "image": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg", "image3": "assets/images/fs_03.jpg"  },
                { "image": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg", "image3": "assets/images/fs_03.jpg"  },
                { "image": "assets/images/fs_01.jpg", "image2": "assets/images/fs_02.jpg", "image3": "assets/images/fs_03.jpg"  },
            ]
        }
        
    }

    render() {
        return (
            <div className="product_details_more_p_area">
                <div className="p_d_more_p_h">
                    <h3 className="link_title"> More Products </h3>
                </div>
                <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={true}
                            dots={false}
                            autoplay={false}
                            autoplayTimeout={2000}
                            responsive={this.state.responsive}
                        >
                        {this.state.NewArrival.map((NewArrival, i) =>
                            <div className="item" key={i}>
                                <Link to="/product-details">
                                    <div className="p_d_m_s_p_a">
                                        <img src={NewArrival.image} alt="product images"></img>
                                        <div className="p_d_m_s_cntn">
                                            <h3> Skate Pan </h3>
                                            <Rate allowHalf defaultValue={5} />
                                            <h5> $278.00 </h5>
                                        </div>
                                    </div>
                                    <div className="p_d_m_s_p_a">
                                        <img src={NewArrival.image2} alt="product images"></img>
                                        <div className="p_d_m_s_cntn">
                                            <h3> Skate Pan </h3>
                                            <Rate allowHalf defaultValue={5} />
                                            <h5> $278.00 </h5>
                                        </div>
                                    </div>
                                    <div className="p_d_m_s_p_a">
                                        <img src={NewArrival.image3} alt="product images"></img>
                                        <div className="p_d_m_s_cntn">
                                            <h3> Skate Pan </h3>
                                            <Rate allowHalf defaultValue={5} />
                                            <h5> $278.00 </h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </OwlCarousel>
            </div>
        )
    }
}

export default MoreProduct
