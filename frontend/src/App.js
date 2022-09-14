import React, { useState, useEffect } from "react";

import "./App.css";

import Select from "react-select";
import api from "./service";

import MapImage from "./assets/map.png";


function App() {
  const [countries, setCountries] = useState([]);
  const [initialCountry, setInitialCountry] = useState("");
  const [finalCountry, setFinalCountry] = useState("");
  const [result, setResult] = useState([]);
  const [stock, setStock] = useState([]);
  const [productName, setProductName] = useState("");
  const [weight, setWeight] = useState("");
  const [value, setValue] = useState("");

  useEffect(()=>{
    const initCountries = async () => {
      const res = await api.get('/countries');
      const parsedCountries = res.data.countries.map((e)=>{
        return {
          value: e,
          label: e
        }
      })
      setCountries(parsedCountries)
    }

    initCountries();
  },[])

  const findPath = async () => {
    const res = await api.post("find_path", {
      source: initialCountry,
      destination: finalCountry
    })
    setResult(res.data.path);
  }

  const registerProduct = async () => {
    setStock([...stock, {productName, weight, value}])
  }

  return (
    <div className="App">

      <h1>RPG MAP</h1>

      <img src={MapImage} alt="Map" className="Map" />

      <div className="InputContainer">

        <Select
          options={countries}
          placeholder="País inicial"
          onChange={(e)=>{
              setInitialCountry(e.value);
          }}
          className="InputField"
        />

        <Select
          options={countries}
          placeholder="País destino"
          onChange={(e)=>{
              setFinalCountry(e.value);
          }}
          className="InputField"
        />

        <button type="submit" onClick={findPath}>Enviar</button>

      </div>

      <div className="InputContainer">
      
        <input placeholder="Nome do produto" 
            value={productName}
            onChange={e=>setProductName(e.target.value)}
        />
        <input placeholder="Peso do produto" 
          value={weight}
          onChange={e=>setWeight(e.target.value)}
        />
        <input placeholder="Valor do produto" 
          value={value}
          onChange={e=>setValue(e.target.value)}
        />

        <button type="submit" onClick={registerProduct}>Registrar</button>

        <ul>
            {stock.map((p) => (
                <p>{p.productName}</p>
            ))}
        </ul>

      </div>

      <ul>
      <p>Instruções para ir de {initialCountry} para {finalCountry}:</p>
        {result.map((country)=>(
          <li> Vá para {country}</li>
        ))}
      </ul>
       
    </div>
  );
}

export default App;
