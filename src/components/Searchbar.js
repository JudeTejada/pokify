import React from "react";
const Searchbar = ({ onSearchChange }) => {
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
            onChange={onSearchChange}
            className="nav__input"
          />
        </div>
      </nav>
    </header>
  );
};

export default Searchbar;
