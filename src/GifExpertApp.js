import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  return (
    <div>
      <div className="header">
      <h2 className="header-title">Gif Expert App</h2>
      <p className="header-text">Search a Gifs</p>
      <AddCategory setCategories={ setCategories }/>
      </div>
      <ol>
        {
            categories.map(category => 
                <GifGrid key={category} category={category}/>
            )
        }
      </ol>
    </div>
  );
};
