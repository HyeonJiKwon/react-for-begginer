// import Button from "./Button";
// import styles from "./App.module.css"; 
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
  return (
    <div>
      <h1>movies! total:{movies.length}</h1>
      <h2>{loading ? <strong>Loading....~</strong>
      : <div>{movies.map((movie)=>
          <Movie 
            id={movie.id}
            medium_cover_image={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary}
            genres={movie.genres} 
            key={movie.id}
          />)}
        </div> }
      </h2>
    </div>
  );
}

export default Home;
