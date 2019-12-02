import React, { useState, useEffect } from "react";


export default function Tracks({ tracklist }) {
  return (
    <div>
      <ul className="track-list">
        {tracklist && tracklist.map(el => <li>{el.title}</li>)}
      </ul>
    </div>
  );
}
