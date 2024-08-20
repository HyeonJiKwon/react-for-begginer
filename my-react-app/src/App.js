import Button from "./Button";
import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [value , setValue] = useState(0)
  const [keyword , setKeyword] = useState("")
  const onChange = (e) => setKeyword(e.target.value)
  // console.log('all time');
  const onlyOnce = () => {
    console.log('onlyOnce');
  }
  useEffect(onlyOnce, [])
  useEffect(()=>{
    console.log('run when change keyword')
    if(keyword && keyword.length > 5){
      console.log('keyword ',keyword)
    }
  }, [keyword]);

  useEffect(()=>{
    console.log('run when change value')
  }, [value]);

  useEffect(()=>{
    console.log('run when change both')
  }, [keyword,value]);
  return (
    <div>
      <input onChange={onChange} value={keyword} type="text"/>
      <h1 className={styles.title}>{value}</h1>
      <button onClick={()=>setValue((p)=>p+1)}>set</button>
    </div>
  );
}

export default App;
