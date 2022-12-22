import "./banner.css";
import axios from "./axios";
import requests from "./requests";
import { useEffect, useState } from "react";
import SkeletonBanner from "./SkeletonBanner";

function Banner() {
  function OverViewCut(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const [movie, setmovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <>
      {!movie && <SkeletonBanner />}
      {movie && (
        <div
          className="banner"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banner-content">
            <h1 className="banner-title">
              {movie?.name || movie?.title || movie?.orignal_name}
            </h1>
            <div className="banner-buttons">
              <button className="banner-button">Play</button>
              <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-description">
              {OverViewCut(`${movie?.overview}`, 150)}
            </h1>
          </div>
          <div className="banner-fade" />
        </div>
      )}
    </>
  );
}

export default Banner;
