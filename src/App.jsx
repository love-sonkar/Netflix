import React from "react";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        LargeRow
      />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrerMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

      <Footer />
    </div>
  );
}

export default App;
