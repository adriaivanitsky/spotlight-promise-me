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

export const fetchDogAsync = async () => {
  const resp = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await resp.json();
  return data;
};

export const fetchDogThen = () => {
  const resp = fetch('https://dog.ceo/api/breeds/image/random').then((data) =>
    data.json()
  );
  return resp;
};

export const fetchMusicAsync = async () => {
  const resp = await fetch(
    'https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json'
  );
  const data = await resp.json();
  return data;
};

export const fetchMusicThen = () => {
  const resp = fetch(
    'https://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json'
  ).then((data) => data.json());
  return resp;
};

export const fetchHolidaysAsync = async () => {
  const resp = await fetch(
    'https://date.nager.at/api/v2/publicholidays/2020/US'
  );
  const data = await resp.json();
  return data;
};

export const fetchHolidaysThen = () => {
  const resp = fetch(
    'https://date.nager.at/api/v2/publicholidays/2020/US'
  ).then((data) => data.json());
  return resp;
};
