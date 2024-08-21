// import Button from "./Button";
// import styles from "./App.module.css"; 
import { useEffect, useState } from "react";

function App() {
  const [loading , setLoading] = useState(true);
  const [movies , setMovies] = useState([]);

  const getMovies = async()=>{
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year')).json();
    setMovies(json.data.movies); 
    setLoading(false); 
  }

  useEffect(()=>{
    getMovies()
  },[]);
  const onSelect = (e)=> {
    // console.log(myCoin)
    // console.log(selectedCoinPrice)
  };

  const onSubmit = (e)=>{
    e.preventDefault();
    countCoin();
  }

  const countCoin = ()=>{
  }

  // useEffect(()=>{
  //   countCoin();
  // },[selectedCoinPrice]);
  
  return (
    <div>
      <h1>movies! total:{movies.length}</h1>
      <h2>{loading ? <strong>Loading....~</strong>
      : <div>{movies.map((movie)=>
          <div key={movie.id}>
            <img src={movie.medium_cover_image} alt="medium_cover_image"/>
            <h3>{movie.title}</h3>
            <p>{movie.summary}</p>
            <ul>{movie.genres.map((g)=>
              <li key={g}>{g}</li>)}
            </ul>
          </div>)}
        </div> }
      </h2>
    </div>
  );
}

export default App;
