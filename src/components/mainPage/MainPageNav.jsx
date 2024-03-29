import React from "react";
import "./MainPage.css";

function MainPageNav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/" style={{ color: "#00b9ae" }}>
            Movies
          </a>
        </li>
        <li>
          <a href="/">TV Shows</a>
        </li>
        <li>
          <a href="/">Anime</a>
        </li>
        <form action="" onSubmit={props.handleSearch}>
          <input
            type="search"
            placeholder="Press Enter To Search..."
            value={props.searchTerm}
            onChange={(e) => {
              props.setSearchTerm(e.target.value);
            }}
            onKeyDownCapture={() => props.setShown(false)}
            required
          />
        </form>
      </ul>
    </nav>
  );
}

export default MainPageNav;
