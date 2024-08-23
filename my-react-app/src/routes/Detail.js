import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

function Detail(){
  const {id} =useParams();

  const [loading , setLoading] = useState(true);
  const [info, setInfo] = useState();
  
  const getMoviesInfo = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setInfo(json.data.movie);
    setLoading(false);
    console.log(json.data.movie)
  }

  useEffect(()=>{
    getMoviesInfo()
  },[]);

  return <div>{loading ? null : <p>{info.title}</p> }</div>
}

export default Detail;