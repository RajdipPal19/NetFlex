import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from './axios';
import YouTube from 'react-youtube';
import movieTralier from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  // State is a short term memory.
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // If [], run once when the row loads, and don't run again.
    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request);
      return request; // Corrected the capitalization of 'request'

    }
    fetchData();
  }, [fetchUrl]);

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay: 1,
    },
  };

  // const handleClick = (movie)=>{
  //   if(trailerUrl) {
  //     setTrailerUrl('');
  //   }else{
  //     movieTralier(movie?.name || "")
  //     .then((url)=>{
  //       const urlParams = new URLSearchParams(new URL(url).search);
  //       setTrailerUrl(urlParams.get("v"));
  //     }).catch((error)=> console.log(error));
  //   }
  // }
  const handleClick = (movie)=>{
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      console.log("Clicked movie:", movie.name); // Log the movie name
      movieTralier(movie?.name || "")
      .then((url)=>{
        console.log("Trailer URL:", url);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      }).catch((error)=> console.log(error));
    }
  }
  

  return (
    <div className="rows">
      {/* Title */}
      <h2>{title}</h2>
      {/* Container -> Poster */}
      <div className='row_posters'>
        {movies.map(movie => (//key is for optimizing the code, it uses the cache to show the same data again, and again.Show we reduce the time to refresh.
          <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow?movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
