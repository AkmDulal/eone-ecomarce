import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

// images 
import Icon01 from "../assets/images/icon_01.png"
import Icon02 from "../assets/images/icon_02.png"
import Icon03 from "../assets/images/icon_03.png"
import Icon04 from "../assets/images/icon_04.png"

export class FacilitatedComponent extends Component {
    render() {
        return (
            <div className="facilitated_area">
                <Container>
                    <Row>
                    <Col lg={3}></Col>
                    <Col lg={2}>
                        <div className="facilitated_box">
                            <img src={Icon01} alt="Icon"></img>
                            <div className="facilitated_text">
                                <h3> Fast Delivery </h3>
                                <p> Within 1-4 business days </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="facilitated_box">
                            <img src={Icon02} alt="Icon"></img>
                            <div className="facilitated_text">
                                <h3> Return & Refund </h3>
                                <p> 30 days return policy </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="facilitated_box">
                            <img src={Icon03} alt="Icon"></img>
                            <div className="facilitated_text">
                                <h3> Safe Shopping </h3>
                                <p> 100% secure payment </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className="facilitated_box">
                            <img src={Icon04} alt="Icon"></img>
                            <div className="facilitated_text">
                                <h3> Click & Collect </h3>
                                <p> Collect in any of our stores </p>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FacilitatedComponent
