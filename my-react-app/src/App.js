import Button from "./Button";
import styles from "./App.module.css"; 

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Welcome</h1>
      <Button text={'hi'}></Button>
      <Button></Button>
    </div>
  );
}

export default App;
