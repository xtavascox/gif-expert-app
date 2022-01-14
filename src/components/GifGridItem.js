import React from "react";

export const GifGridItem=({title,url})=>{

    return(
        <div className="galeria__item">
            <img src={url} alt={`gif resultado busqueda`} />
            <h3 className="galeria__item--titulo">{title}</h3>
        </div>
    )
}