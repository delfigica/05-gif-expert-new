import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="category-title animate__animated animate__flash">Gifs of {category}</h3>

      <div className="cards-container">
        {images.map(img => (
          <GifGridItem key={img.id} img={img} />
        ))}
      </div>

    </>
  );
};
