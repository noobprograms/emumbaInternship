import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
    const [jokes, setJokes] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/jokes").then((response)=>
            setJokes(response.data)
        ).catch((error)=>console.log(error))
    });
    return ( <
        div className = "App" >
            <h1> This is my react app </h1> 
            <p>Jokes {jokes.length}</p>
            {
                jokes.map((joke, index) => ( <div key={joke.index}>
                    <h3>{joke.part1}</h3>
                    <p>{joke.part2}</p>
                </div>))
            }
        </div>
    );
}

export default App;