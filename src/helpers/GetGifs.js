export const getGifs = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=8&q=${encodeURI(category)}&api_key=QHp7gJmGaPnvlwNOZAGRxSLDsfSN98qg`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const infoGif = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images.downsized_medium.url,
      };
    });
    return(infoGif);
  };