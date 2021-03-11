import React, { useState, useEffect } from "react";

export default function Videos({ videos }) {
  return (
    <div className="video-wrapper">
      <div className="videos">
        {videos &&
          videos.map((v) => {
            var wrongLink = "watch?v=";
            var rightLink = "embed/";
            if (videos) {
              return (
                <iframe
                  width="300"
                  src={v.uri.replace(wrongLink, rightLink)}
                ></iframe>
              );
            }
          })}
      </div>
    </div>
  );
}
