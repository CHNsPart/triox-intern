//import React from 'react'
//import { useEffect, useState } from "react"
import { Button, Form, Col, Row } from "react-bootstrap"

const FormData = () => {
    return (
        <div>
            <Form >
                <Form.Group className="mb-3">
                    <Form.Label>Values ($)</Form.Label>
                    <Form.Control
                        id="value"
                        name="value"
                        type="number"
                        placeholder="($)"

                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Exchange Rate</Form.Label>
                    <Form.Control
                        type="number"
                        name="exchangeRate"
                        placeholder="($)"
                    />
                    <Form.Label>Product ID</Form.Label>
                    <Form.Control
                        type="text-area"
                        name="productID"
                        placeholder="type your product ID"
                    />
                </Form.Group>
                <Button size="sm" type="submit" className="btn-blck">Query</Button>
                <div className="mt-5">
                    <Row className="container c1">
                        <Col className="g1">
                            Insurance 1%
                        </Col>
                        <Col className="output">
                            {`0.0 USD`}
                        </Col>
                    </Row>
                    <Row className="container c1">
                        <Col className="g1">
                            Charge
                        </Col>
                        <Col className="output">
                            0.00 USD
                        </Col>
                    </Row>
                </div>
                <hr />
                <Row className="container c1">
                    <Col className="g1">
                        Total Value
                    </Col>
                    <Col className="output">
                        0.00 USD
                    </Col>
                </Row>
                <Row className="container mar c1">
                    <Col className="g1">
                        A/V
                    </Col>
                    <Col className="output">
                        0.00 TK
                    </Col>
                </Row>
                <Row className="container c1">
                    <Col className="g1">
                        CD
                        <Form.Control className="changebleInput" type="textarea" placeholder="($)" />
                    </Col>
                    <Col className="output">
                        {`0.00 TK`}
                    </Col>
                </Row>
                <Row className="container c1">
                    <Col className="g1">
                        RD
                        <Form.Control className="changebleInput" type="textarea" placeholder="($)"
                        />
                    </Col>
                    <Col className="output">
                        0.00 TK
                    </Col>
                </Row>
                <Row className="container c1">
                    <Col className="g1">
                        SD
                        <Form.Control className="changebleInput" type="textarea" placeholder="($)"
                        />
                    </Col>
                    <Col className="output">
                        0.00 TK
                    </Col>
                </Row>
                <Row className="container c1">
                    <Col className="g1">
                        VAT
                        <Form.Control className="changebleInput" type="textarea" placeholder="($)"
                        />
                    </Col>
                    <Col className="output">
                        0.00 TK
                    </Col>
                </Row>
                <hr />
                <Row className="container c1">
                    <Col className="g1">
                        Total
                    </Col>
                    <Col className="output">
                        0.00 TK
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default FormData

