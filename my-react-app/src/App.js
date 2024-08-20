import Button from "./Button";
import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [todo , setTodo] = useState('');
  const [todos , setTodos] = useState([]);

  const onChange = (e)=>{
    setTodo(e.target.value)
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if(todo === '') return;
    setTodos(currentArr=>[todo, ...currentArr]);
    setTodo('');
  } 

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" placeholder="Write here" />
        <button>ADD</button>
      </form>
      <hr/>
      <ul>
        {
          todos.map((item, idx) => 
            <li key={idx}>{item}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
