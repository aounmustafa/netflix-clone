import axios from "./axios";
import React from "react";
import "./Row.css";
const baseImg_url = "https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [props.fetchUrl]);

  const getData = async () => {
    const request = await axios.get(props.fetchUrl);
    setMovies(request.data.results);
    //  console.log(movies);
  };
  return (
    <div className="row">
      <h2 className="row_title">{props.title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${props.isLargeRow && "large_poster"}`}
            src={`${baseImg_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
