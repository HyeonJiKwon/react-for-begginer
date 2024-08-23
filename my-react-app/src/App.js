// import Button from "./Button";
// import styles from "./App.module.css"; 
import { useEffect, useState } from "react";
import { BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return(
  <Router >
    <Switch>
      <Route path='/hello'>
        <h1>hello</h1>
      </Route>
      <Route path='/movie/:id'>
        <Detail/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
