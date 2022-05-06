import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import LeftBar from "./components/leftBar/LeftBar";
import MainPage from "./components/mainPage/MainPage";
import RightBar from "./components/rightBar/RightBar";
import Spinner from "./components/Spinner";

const api = {
  key: "966cd08768c920d72843139978c98d3d",
};

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${api.key}&query=`;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  // Api Requests

  const GetTopMovies = async () => {
    const temp = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api.key}`
    ).then((res) => res.json());
    setTopMovies(temp.results.slice(0, 10));
  };

  const GetTrending = async () => {
    const temp = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${api.key}&language=en-US&page=1`
    ).then((res) => res.json());
    setTrending(temp.results.slice(0, 8));
  };

  const GetUpcoming = async () => {
    const temp = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api.key}&language=en-US&page=1`
    ).then((res) => res.json());
    setUpcoming(temp.results.slice(0, 6));
  };

  const GetGenres = async () => {
    const temp = await fetch(
      `
      https://api.themoviedb.org/3/genre/movie/list?api_key=${api.key}&language=en-US`
    ).then((res) => res.json());
    setGenres(temp.genres);
  };

  const fetchMovies = async (query) => {
    const temp = await fetch(`${SEARCH_API}+${searchTerm}`).then((res) =>
      res.json()
    );
    setMovieList(temp.results);
  };

  // Call Api Functions

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm);
  };

  useEffect(() => {
    GetTopMovies();
    GetTrending();
    GetUpcoming();
    GetGenres();
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="App">
          <LeftBar />
          <MainPage
            topMovies={topMovies}
            movieList={movieList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
            trending={trending}
            loading={loading}
          />
          <RightBar upcoming={upcoming} genres={genres} />
        </div>
      )}
    </>
  );
}

export default App;
