// import Button from "./Button";
// import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [loading , setLoading] = useState(true);
  const [coins , setCoins] = useState([]);
  const [selectedCoinPrice, setSelected] = useState('');
  const [myCoin , setMyCoin] = useState(0);
  const [canBuyCoinNum , setCanBuyCoinNum] = useState(NaN);
  useEffect(()=>{
    fetch('https://api.coinpaprika.com/v1/tickers?limit=50')
    .then((res)=>res.json())
    .then((j)=>{
      setCoins(j); 
      setLoading(false); 
      setSelected('');
    });
  },[]);
  const onChange = (e)=>setMyCoin(e.target.value)
  const onSelect = (e)=> {
    setSelected(e.target.value);
    // console.log(myCoin)
    // console.log(selectedCoinPrice)
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    countCoin();
  }

  const countCoin = ()=>{
    setCanBuyCoinNum(Math.floor(myCoin / parseFloat(selectedCoinPrice)))
  }

  // useEffect(()=>{
  //   countCoin();
  // },[selectedCoinPrice]);
  
  return (
    <div>
      <h1>COIN! {coins.length}</h1>
      <form onSubmit={onSubmit}>
      <input value={myCoin} onChange={onChange} placeholder="달러로 가진 돈" type="number"/>
      {loading ? <strong>Loading....~</strong>: 
        <select onChange={onSelect}>
          <option value={''}>선택해 주세요</option>
          {
            coins.map(coin=>
              <option value={coin.quotes.USD.price} key={coin.id}>{coin.name}({coin.symbol}): ${coin.quotes.USD.price}</option>
            )
          }
        </select>
      }
        <div>
          <p>살 수 있는 코인 개수</p>
          {/* <p>{canBuyCoinNum }</p>  */}
          {isNaN(canBuyCoinNum) ? <p>살 수 있는 코인이 없다</p> : <p>{canBuyCoinNum }개</p> }
        </div>
      </form>
    </div>
  );
}

export default App;
