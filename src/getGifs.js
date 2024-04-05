export const getGifs = async () => {
  const url =
    'http://ip172-18-0-43-co7lo8a91nsg00e0gg8g-32001.direct.labs.play-with-docker.com/gifstenor';
  const resp = await fetch(url);
  const { gifs } = await resp.json();
  return gifs;
};
