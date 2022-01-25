/**
 * TODO: Write a fetch request to an API url using .then()
 * TODO: Write a fetch request using async/await
 */

export const fetchPinballAsync = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  return data;
};

export const fetchPinballThen = () => {
  const resp = fetch('https://ponball.herokuapp.com/api/v1/machines').then(
    (data) => data.json()
  );
  return resp;
};

export const fetchMovieAsync = async () => {
  const resp = await fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  );
  const data = await resp.json();
  return data;
};

export const fetchMovieThen = () => {
  const resp = fetch(
    'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  ).then((data) => data.json());
  return resp;
};
