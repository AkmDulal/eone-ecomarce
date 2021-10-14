import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export class Brand extends Component {
    constructor() {
        super()
        this.state = {
            responsive:{
                0: {
                    items: 3,
                },
                450: {
                    items: 5,
                },
                600: {
                    items: 5,
                },
                1024: {
                    items: 5,
                },
                1366: {
                    items: 8,
                },
            },
            NewArrival: [
                { "image": "assets/images/brand/b01.png"  },
                { "image": "assets/images/brand/b02.png"  },
                { "image": "assets/images/brand/b03.png"  },
                { "image": "assets/images/brand/b04.png"  },
            ]
        }
        
    }
    render() {
        return (
            <div className="brand_area">
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
                        {this.state.NewArrival.map((NewArrival, i) =>
                            <div className="item" key={i}>
                                <Link to="/">
                                    <div className="product_area">
                                        <div className="product_img">
                                            <img className="images_width" src={NewArrival.image} alt="product images"></img>
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

export default Brand
