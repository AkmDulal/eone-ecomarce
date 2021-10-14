import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import FooterImg from "../assets/images/footer01.jpg" 
import FooterImg2 from "../assets/images/footer02.jpg" 
import FooterImg3 from "../assets/images/footer03.jpg" 
export default function FooterFacilitatedComponent() {
    return (
        <div className="footer_facilitated_area">
            <Container>
                <Row>
                    <Col lg={4}>
                        <img className="footer__img" src={FooterImg} alt="footer"></img>
                    </Col>
                    <Col lg={4}>
                        <img className="footer__img" src={FooterImg2} alt="footer"></img>
                    </Col>
                    <Col lg={4}>
                        <img className="footer__img" src={FooterImg3} alt="footer"></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
