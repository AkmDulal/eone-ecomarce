import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import CartProduct from "../components/cart/CartProduct"
import CartTotals from "../components/cart/CartTotals"
function cart() {
    return (
        <div className="product_details_area">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="breadcrumb">
                            <Link to="/">
                                <p> <HiHome /> </p>
                            </Link>
                            <p> Cart </p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <CartProduct />
                    </Col>
                    <Col lg={4}>
                        <CartTotals />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default cart
