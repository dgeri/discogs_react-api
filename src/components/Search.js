import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Search() {
  const [items, setItems] = useState(() => {
    const localData = sessionStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  const fetchItems = async (e) => {
    e.preventDefault();
    const artist = e.target.elements.artist.value;
    var searchResults = [];
    const data = await fetch(
      `https://api.discogs.com/database/search?q=+${artist}&type=releases&key=MiXYmphrxbtTHSxwQtJi&secret=BZhDrPYdzbvEylDLQvxJsHtRGNwRztqO`
    );
    const items = await data.json();

    items.results.map((elem) => {
      if (elem.type == "release") {
        searchResults.push(elem);
        searchResults.sort((a, b) => (a.year > b.year ? 1 : -1));
      }
    });
    setItems(searchResults);
  };

  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  if (items.length <= 0) {
    return (
      <div className="Search">
        {" "}
        <Form />
        <div className="error-msg">no such releases :-( </div>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <Form />
        {items.map((item) => (
          <h1 className="search-item" key={item.id}>
            <Link className="search-links" to={`/search/${item.id}`}>
              {item.title} ({item.year})
            </Link>
          </h1>
        ))}
      </div>
    );
  }

  function Form() {
    return (
      <div>
        <form className="form" onSubmit={fetchItems}>
          <input type="text" name="artist" placeholder="explore releases from all over the world" />
          <button className="button-search"> </button>
        </form>
      </div>
    );
  }
}

export default Search;
