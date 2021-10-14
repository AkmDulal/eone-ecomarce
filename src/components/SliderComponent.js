import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import CatagorieComponent from './CatagorieComponent';





export default class SliderComponent extends Component {
    
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
                { "image": "assets/images/banner/slider1.jpg"  },
                { "image": "assets/images/banner/slider1.jpg"  },
                { "image": "assets/images/banner/slider1.jpg"  },
            ]
        }
        
    }
    render() {
        
        return (
            <div className="slider_area">
                <Container>
                    <OwlCarousel
                            className="owl-theme product__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
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
                    <Row className="catagore_position">
                        <Col lg={2}>
                            <CatagorieComponent />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
