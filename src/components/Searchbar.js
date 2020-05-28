import React from "react";
const Searchbar = ({ searchChange }) => {
  return (
    <header>
      <nav className="nav">
        <a href="/" className="nav__logo">
          Pokify
        </a>
        <div className="nav__search">
          <input
            type="search"
            placeholder="search a pokemon"
            onChange={searchChange}
            className="nav__input"
          />
          <i className="gg-search nav__icon"></i>
        </div>
      </nav>
    </header>
  );
};

export default Searchbar;
