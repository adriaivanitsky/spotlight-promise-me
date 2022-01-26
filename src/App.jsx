import { useEffect } from 'react';
import {
  fetchPinballAsync,
  fetchPinballThen,
  fetchMovieAsync,
  fetchMovieThen,
  fetchDogAsync,
  fetchDogThen,
  fetchMusicAsync,
  fetchMusicThen,
  fetchHolidaysAsync,
  fetchHolidaysThen,
} from './services/promise-me';

export default function App() {
  useEffect(async () => {
    await fetchPinballAsync();
    await fetchPinballThen();
    await fetchMovieAsync();
    await fetchMovieThen();
    await fetchDogAsync();
    await fetchDogAsync();
    await fetchMusicAsync();
    await fetchMusicThen();
    await fetchHolidaysThen();
    fetchHolidaysAsync();
    console.log(await fetchHolidaysThen());
  });

  return <h1>Hello World</h1>;
}
