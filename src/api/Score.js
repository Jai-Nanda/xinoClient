const API_KEY = "qZnM0O90ToIjBiq9GvT9382";

export const getMatches = () => {
  const url = 'https://api.cricapi.com/v1/currentMatches?apikey=7de5e83d-2218-4990-b91f-8dec911066eb&offset=0';
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};