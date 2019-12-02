import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Search() {
  const [items, setItems] = useState(() => {
    const localData = sessionStorage.getItem("items");
    return localData ? JSON.parse(localData) : [];
  });

  const fetchItems = async e => {
    e.preventDefault();
    const artist = e.target.elements.artist.value;
    const data = await fetch(
      `https://api.discogs.com/database/search?q=${artist}&?type=releases&key=MiXYmphrxbtTHSxwQtJi&secret=BZhDrPYdzbvEylDLQvxJsHtRGNwRztqO`
    );
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };

  useEffect(() => {
    sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="Search">
      <Form />
      {items.map(item => (
        <h1 className="search-item" key={item.id}>
          <Link className="search-links" to={`/search/${item.id}`}>
            {item.title}
          </Link>
        </h1>
      ))}
    </div>
  );
  function Form() {
    return (
      <form className="form" onSubmit={fetchItems}>
        <input type="text" name="artist" placeholder="search..." />
        <button className="button-search"> </button>
      </form>
    );
  }
}

export default Search;
