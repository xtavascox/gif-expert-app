import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=8&q=${category.trim()}&api_key=QHp7gJmGaPnvlwNOZAGRxSLDsfSN98qg`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const infoGif = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images.downsized_medium.url,
      };
    });
    setImages(infoGif);
  };
  return (
    <div>
      <h3>{category}</h3>

      <div className="galeria">
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </div>
  );
};

GifGrid.proprTypes = {
  category: PropTypes.string.isRequired,
};
