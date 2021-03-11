import React, { useState, useEffect } from "react";

export default function Videos({ videos }) {
  return (
    <div className="video-wrapper">
      {videos &&
        videos.map((v) => {
          var wrongLink = "watch?v=";
          var rightLink = "embed/";
          if (videos) {
            return (
              <iframe
                src={v.uri.replace(wrongLink, rightLink)}
              ></iframe>
            );
          } else {
            return <div></div>;
          }
        })}
    </div>
  );
}
