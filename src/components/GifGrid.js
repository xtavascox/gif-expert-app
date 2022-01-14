import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/GetGifs";
import { useFetchGifs } from "./useFetchGifs";

export const GifGrid = ({ category }) => {
 

  const {data:images,loading} =useFetchGifs(category)

  return (
    <div>
      <h3>{category}</h3>
        {loading && <p>loading</p>}
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
