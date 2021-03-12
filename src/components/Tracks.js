import React, { useState, useEffect } from "react";

export default function Tracks({ tracklist }) {
  return (
    <div>
      <ul className="track-list">
        {tracklist &&
          tracklist.map((el) => {
            if (el.artists) {
              return (
                <li key={el.title.toString()} className="tracks-wrapper-ext">
                  <p className="tracks-title">{el.artists[0].name}</p>
                  <span>-</span>
                  <p>{el.title}</p>
                </li>
              );
            } else {
              return <li  key={el.position.toString()} className="tracks-wrapper">{el.title}</li>;
            }
          })}
      </ul>
    </div>
  );
}
