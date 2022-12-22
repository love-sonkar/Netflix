import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "./axios";
import "./row.css";
import SkeletonRow from "./SkeletonRow";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import demoimg from "./poster.jpg";

const BaseURl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, LargeRow }) {
  const [movie, setmovie] = useState(null);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      let request = await axios.get(fetchUrl);
      setmovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handle(movie) {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(
        null,
        { tmdbId: movie.id } || movie?.orignal_name || movie?.name
      )
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="max-12">
      {!movie && <SkeletonRow />}
      {movie && (
        <div className="row">
          <h2>{title}</h2>
          <div className="row-wrapper">
            {movie.map((movie) => {
              return (
                <LazyLoadImage
                  className={`row-img ${LargeRow && "row-large"}`}
                  key={movie.id}
                  onClick={() => {
                    handle(movie);
                  }}
                  src={`${BaseURl}${
                    LargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  effect="blur"
                  height="200px"
                  width="150px"
                  placeholderSrc={demoimg}
                  scrollPosition="X"
                />
              );
            })}
          </div>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
      )}
    </div>
  );
}

export default Row;
