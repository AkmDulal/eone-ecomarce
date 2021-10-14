import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

import CheckoutInput from "../components/checkout/CheckoutInput"
import CheckOutDetails from "../components/checkout/CheckOutDetails"
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'

export class CheckOut extends Component {
    render() {
        return (
            <div className="product_details_area">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="breadcrumb">
                                <Link to="/">
                                    <p> <HiHome /> </p>
                                </Link>
                                <p> Checkout </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="billing_details_box">
                                <CheckoutInput />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="billing_details_box">
                                <CheckOutDetails />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default CheckOut
