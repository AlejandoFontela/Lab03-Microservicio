import { useEffect, useState } from 'react';
import { getGifs } from '../getGifs';

export const useFetchGifs = () => {
  const [gifs, setGifs] = useState();

  const getImages = async () => {
    const newGifs = await getGifs();
    setGifs(newGifs);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    gifs,
  };
};
