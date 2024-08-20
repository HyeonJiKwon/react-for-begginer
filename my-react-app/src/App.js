import Button from "./Button";
import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [value , setValue] = useState(0)
  console.log('all time');

  const onlyOnce = () => {
    console.log('onlyOnce');
  }
  useEffect(onlyOnce, [])
  return (
    <div>
      <h1 className={styles.title}>{value}</h1>
      <button onClick={()=>setValue((p)=>p+1)}>set</button>
    </div>
  );
}

export default App;
