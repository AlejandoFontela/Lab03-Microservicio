import { useState, useEffect } from 'react';
import { useFetchGifs } from './hooks/useFetchGifs';

function App() {
  const [gifUrls, setGifUrls] = useState([]);

  const { gifs } = useFetchGifs();

  useEffect(() => {
    if (gifs && gifs.length > 0) {
      const urls = gifs.map((item) => {
        if (item.media && item.media.length > 0) {
          return item.media[0].gif.url;
        }
        return null;
      });

      const urlCorrecta = urls.filter((url) => url !== null);

      setGifUrls(urlCorrecta);
    }
  }, [gifs]);

  return (
    <div>
      <h1>Laboratorio 03 - Consumiendo microservicio</h1>
      {gifUrls.map((url, index) => (
        <img key={index} src={url} alt={`Gif ${index}`} />
      ))}
    </div>
  );
}

export default App;
