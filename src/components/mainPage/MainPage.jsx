import React from "react";
import { useState } from "react";
import "./MainPage.css";
import MainPageContent from "./MainPageContent";
import MainPageNav from "./MainPageNav";
import SearchCard from "./searchCard/SearchCard";

function MainPage(props) {
  const [shown, setShown] = useState(true);

  return (
    <>
      <div className="main">
        <MainPageNav
          setSearchTerm={props.setSearchTerm}
          searchTerm={props.searchTerm}
          handleSearch={props.handleSearch}
          setShown={setShown}
        />
        {shown ? (
          <MainPageContent
            topMovies={props.topMovies}
            trending={props.trending}
          />
        ) : (
          <div className="search-cards">
            {props.movieList.map((movie) => {
              return (
                <div key={movie.id} className="search-stuff">
                  <SearchCard movie={movie} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default MainPage;
