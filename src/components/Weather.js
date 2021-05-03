import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Card, Col, Row } from "react-bootstrap"
import './weather.css'


function Weather() {
    const [fetching, setFetching] = useState(false);

    //BARCELONA
    const [cityBcn, setCityBcn] = useState([])
    const [tempBcn, setTempBcn] = useState([])
    const [weatherBcn, setWeatherBcn] = useState([])

    //Fetching local data BARCELONA
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios.get('http://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Barcelona&aqi=no', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

            console.log(result.data)
            setCityBcn(`${result.data.location.name}`)
            setTempBcn(`${result.data.current.temp_c}`)
            setWeatherBcn(`${result.data.current.condition.text}`)

        };
        fetchData();
    }, [fetching]);

    
    return (
        <Container fluid className="weather">
            <Card.Title className="titleWeather">El Clima de Barcelona hoy!!!</Card.Title>
            {/* BARCELONA */}
            <Card className=" mt-3 border-0">
                <Card.Body className="card-city">
                    <Row className="align-items-center" >
                        <Col><Card.Title className="weather-temp mb-0">{tempBcn}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{cityBcn}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherBcn}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            </Container>
    )
}

export default Weather
