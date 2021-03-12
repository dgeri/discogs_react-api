import React from "react";

export default function Genres({ genres }) {
  return (
    <div>
      <ul  className="style-list">
        {genres && genres.map(genre => <li key={genre.toString()}>{genre}</li>)}
      </ul>
    </div>
  );
}
