import React, { useState } from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './jokes.css';


function Jokes() {
    const [joke, setJoke] = useState("");
    //Axios
    const getJoke = () => {
        axios.get("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => {
                setJoke(res.data.joke);
            })
    }
    return (

        <div>
            <div className="titulo">Risología</div>
            <Card className="card">
                <Card.Body >
                    <Card.Title className="texto">PREPARATE PARA REIR xD</Card.Title>
                    <Card.Text className="chistes">{joke}</Card.Text>
                    <Button className="btn w-50" onClick={() => getJoke()}>SIGUIENTE CHISTE</Button>
                </Card.Body>

            </Card>


        </div>
    );

}
export default Jokes
