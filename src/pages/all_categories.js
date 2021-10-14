import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class Allcategories extends Component {
    constructor() {
        super()
        this.state = {
            catagores: [
                { 
                    "id": "1",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_01.png"
                },
                { 
                    "id": "2",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_02.png"
                },
                { 
                    "id": "3",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_03.png"
                },
                { 
                    "id": "3",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_04.png"
                },
                { 
                    "id": "3",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_05.png"
                },
                { 
                    "id": "3",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_06.png"
                },
                { 
                    "id": "7",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_01.png"
                },
                { 
                    "id": "8",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_02.png"
                },
                { 
                    "id": "9",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_03.png"
                },
                { 
                    "id": "10",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_04.png"
                },
                { 
                    "id": "11",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_05.png"
                },
                { 
                    "id": "12",
                    "cLink": [
                        {"id": "1", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "2", "link":"/category", "name": " Fitness   " },
                        {"id": "3", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "4", "link":"/category", "name": " Fitness   " },
                        {"id": "5", "link":"/category", "name": " Weight Loss Fitness  " },
                        {"id": "6", "link":"/category", "name": " Fitness   " },
                    ],
                    "images": "/assets/images/catagore/pc_06.png"
                },
            ]
        }
        
    }
    render() {
        return (
            <div className="all_categories_Area">
                <div className="popular_categories__box22">
                    <Container>
                        <Row>
                            {this.state.catagores.map((item, i) =>
                                <Col lg={2} Key={i} className="counter-column">
                                    <Link className="p_catagore_area cone2" to="/category">
                                        <div className="p_catagore_area_title">
                                            {item.cLink.map((sitem, c) =>
                                                <Link key={c} to={sitem.link}> {sitem.name} </Link>
                                            )}
                                        </div>
                                        <img src={item.images} alt="catagore"></img>
                                    </Link>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Allcategories

