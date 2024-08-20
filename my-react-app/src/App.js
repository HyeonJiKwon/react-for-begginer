import Button from "./Button";
import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [loading , setLoading] = useState(true);
  const [coins , setCoins] = useState([]);
  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers?limit=50')
    .then((res)=>res.json())
    .then((j)=>{
      setCoins(j); 
      setLoading(false); 
    });
  },[]);
  
  return (
    <div>
      <h1>COIN! {coins.length}</h1>
      {loading ? <strong>Loading....~</strong>: 
        <ul>
          {
            coins.map(coin=>
              <li key={coin.id}>{coin.name}({coin.symbol}): ${coin.quotes.USD.price}</li>
            )
          }
        </ul>
      }
    </div>
  );
}

export default App;
