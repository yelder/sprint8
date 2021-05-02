import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Jokes() {

    const [joke, setJoke] = useState("");

    //API FETCH
    const getJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setJoke(res.joke));
    };
    return (
        <div>
            <h1>Aquí tendrás los mejores chistes!!!</h1>
            <div>{joke}</div>
            <Button onClick={() => getJoke()}>Siguiente</Button>
        </div>
    );


}


export default Jokes