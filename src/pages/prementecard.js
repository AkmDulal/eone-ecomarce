import React, {useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
function Prementecard() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')
    return (
        <div className="prement_cart_area">
            <Container>

            <Row>
                <Col lg={8}>
                <div className="user__fild user__fild__cart _area">
                    <div className="form_group">
                        <input 
                            type='text' 
                            name='number' 
                            placeholder='Card Number' 
                            value={number} 
                            onChange={e => setNumber(e.target.value)}
                            onFocus={e => setFocus(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="form_group">
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Name' 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                            onFocus={e => setFocus(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="form_group">
                        <input 
                            type='tel' 
                            name='expiry' 
                            placeholder='MM/YY Expiry' 
                            value={expiry} 
                            onChange={e => setExpiry(e.target.value)}
                            onFocus={e => setFocus(e.target.value)}
                            >
                        </input>
                    </div>
                    <div className="form_group">
                        <input 
                            type='tel' 
                            name='cvc' 
                            placeholder='CVC' 
                            value={cvc} 
                            onChange={e => setCvc(e.target.value)}
                            onFocus={e => setFocus(e.target.value)}
                            >
                        </input>
                    </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <Cards 
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focus}
                    />
                </Col>
            </Row>


            </Container>
        </div>
    )
}

export default Prementecard
