import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
 
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        characters.map((char, index) =>{
          return < Character name={char.name} key={index} birthDate={char['birth_year']} />
        })
      }
    </div>
  );
}

export default App;
