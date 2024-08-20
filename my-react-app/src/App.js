import Button from "./Button";
import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function Hello() {
  useEffect(()=>{
    console.log('effectFn: creat')
    // 컴포넌트가 destroy되는 시점에 실행됨
    return ()=>console.log('effectFn: destroy');
  },[]);
  return (
    <h1>hello</h1>
  );
}
function App() {
  const [showing , setShowing] = useState(false)
  
  return (
    <div>
      {showing ? <Hello></Hello> : null}
      <button onClick={()=>setShowing((p)=>!p)}>{showing ? 'hide' :'show'}</button>
    </div>
  );
}

export default App;
