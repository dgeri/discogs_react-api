import React, { useState, useEffect } from "react";
import "./App.css";
import Arr from "./Arr";
import { Link } from "react-router-dom";
function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.discogs.com/releases/${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };
  return (
    <div className="item-detail">
      <h1>{item.artists_sort}</h1>
      <h2>{item.title}</h2>
      <p className="genre">{item.genres}</p>
      <Arr styles={item.styles} />
      <p className="year">{item.year}</p>
      <p className="country">{item.country}</p>
      <p className="notes">{item.notes}</p>
      <Link to={`/search/`}>
        {" "}
        <button className="button-back">BACK</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
