import React, { useState, useEffect } from "react";
import "./App.css";
import Genres from "./Genres";
import Tracks from "./Tracks";
import Videos from "./Videos";
import { Link } from "react-router-dom";
function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    // console.log(match);
  }, []);

  const [item, setItem] = useState({});
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.discogs.com/releases/${match.params.id}`
    );
    const item = await fetchItem.json();

    setItem(item);
    // console.log(item);
    if (!item.title) {
      alert("RELEASE NOT FOUND");
    }
  };

  return (
    <div className="track-detail">
      <div className="wrapper">
        <div className="main-block">
          <div className="title-wrapper">
            <h1>
              {item.artists_sort} - {item.title}
            </h1>
            <div className="btn-favorites">☆</div>
          </div>
          <div className="description">
            <p className="main-genre">{item.genres}</p>
            <Genres genres={item.styles} />
          </div>
          <Tracks tracklist={item.tracklist} />
          <p className="year">{item.year}</p>
          <p className="country">{item.country}</p>
          <Link to={`/search/`}>
            {" "}
            <button className="button-back">BACK</button>
          </Link>
        </div>
        <div className="second-block">
          <p className="notes">{item.notes}</p>
          <Videos videos={item.videos} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
