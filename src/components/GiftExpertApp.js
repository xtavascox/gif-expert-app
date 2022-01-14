import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Katekyo Hitman Reborn"]);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category}/>
        })}
      </ol>

      
    </>
  );
};
