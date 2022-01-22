import React from "react";

export const GifGridItem = ({ img }) => {
  return (
    <div className="card animate__animated animate__backInDown">
      <img src={img.url} alt={img.title} />
    </div>
  );
};
