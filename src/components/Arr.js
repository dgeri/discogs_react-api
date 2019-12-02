import React, { useState, useEffect } from "react";


export default function Arr({ styles }) {
  return (
    <div>
      <ul className="style-list">
        {styles && styles.map(style => <li>{style}</li>)}
      </ul>
    </div>
  );
}
