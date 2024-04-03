export const getGifs = async () => {
  const url =
    'http://ip172-18-0-8-co6p0liim2rg00943ong-32001.direct.labs.play-with-docker.com/gifstenor';
  const resp = await fetch(url);
  const { gifs } = await resp.json();
  return gifs;
};
