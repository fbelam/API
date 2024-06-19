import React, {useState} from "react"
import axios from "axios";

export default function Getcep() {

  const [cep, SetCep] = useState("")
  const [pokedex, setPokedex] = useState(null)
  
  async function handlePokedex() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
      setAddress(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Procure seu pokemon</h1>
      <input type="text" onChange={(e) => setPokedex(e.target.value)}/>
      <button onClick={handlePokedex}>Eu escolho você</button>
  
      }
    </div>  
    )
}