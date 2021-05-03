import React from "react"
import Jokes from "./Jokes"
import Weather from "./Weather"
import { Container, Row, Col } from "react-bootstrap"


function JokesWeather() {
    return (
        <Container fluid className="app-body">
           
            <Row className="justify-content-center align-items-center p-2">
                <Col md={7} className="justify-content-center" >
                    <Row className="justify-content-center p-1">
                        <Col xs={12} md lg={12}>
                            <Jokes />
                        </Col>
                        <Col xs={7} md lg={8}>               
                            <Weather />
                        </Col>
                    </Row>
                </Col>

            </Row>

        </Container >
    )
}

export default JokesWeather
