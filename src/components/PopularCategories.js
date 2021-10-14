import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
// images 
import Cimg from "../assets/images/catagore/pc_01.png"
import Cimg1 from "../assets/images/catagore/pc_02.png"
import Cimg2 from "../assets/images/catagore/pc_03.png"
export class PopularCategories extends Component {
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
                    items: 6,
                },
            },
            NewArrival: [
                { "title": "Weight Loss Fitness","image": "assets/images/catagore/pc_01.png"  },
                // { "title": "Medicines & Supports ","image": "assets/images/catagore/pc_02.png"  },
                // { "title": "Vitamins & Supplements","image": "assets/images/catagore/pc_03.png"  },
            ]
        }
        
    }

    render() {
        const { Search } = Input;
        return (
            <div className="popular_categories_area">
                <Container>
                    <div className="section_header">
                        <h3> Explore Popular Categories </h3>
                        <div className="section_header_right">
                            <Link className="header__btn" to="/"> View All </Link>
                        </div>
                        <div className="section_header_right">
                            <Search className="location_search" placeholder="Search....." />
                        </div>
                    </div>
                </Container>
                <Container>
                    <OwlCarousel
                            className="owl-theme popular_categories__box"
                            loop
                            margin={10}
                            nav={false}
                            dots={true}
                            autoplay={true}
                            autoplayTimeout={5000}
                            responsive={this.state.responsive}
                        >
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cone" to="/category">
                                    <h6 className="p_catagore_area_title"> Weight Loss Fitness </h6>
                                    <img src={Cimg} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cgreen" to="/category">
                                    <h6 className="p_catagore_area_title"> Medicines & Supports </h6>
                                    <img src={Cimg1} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cblue" to="/category">
                                    <h6 className="p_catagore_area_title"> Vitamins & Supplements </h6>
                                    <img src={Cimg2} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cred" to="/category">
                                    <h6 className="p_catagore_area_title"> Vitamins & Supplements </h6>
                                    <img src={Cimg2} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cyellow" to="/category">
                                    <h6 className="p_catagore_area_title"> Vitamins & Supplements </h6>
                                    <img src={Cimg2} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>
                        <div className="popular_categories__box22">
                            <div className="item">
                                <Link className="p_catagore_area cgreen2" to="/category">
                                    <h6 className="p_catagore_area_title"> Vitamins & Supplements </h6>
                                    <img src={Cimg2} alt="catagore"></img>
                                </Link>
                            </div>
                        </div>

                        
                        {/* <div className="item">
                                <Link className="p_catagore_area" to="/">
                                    <h6 className="p_catagore_area_title">Medicines & Supports</h6>
                                    <img src={Cimg1} alt="catagore"></img>
                                </Link>
                            </div>
                            <div className="item">
                                <Link className="p_catagore_area" to="/">
                                    <h6 className="p_catagore_area_title">Vitamins & Supplements</h6>
                                    <img src={Cimg2} alt="catagore"></img>
                                </Link>
                            </div> */}

                    </OwlCarousel>
                </Container>
                
            </div>
        )
    }
}

export default PopularCategories
