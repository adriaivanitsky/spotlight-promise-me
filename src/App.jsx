import { useEffect } from 'react';
import {
  fetchPinballAsync,
  fetchPinballThen,
  fetchMovieAsync,
  fetchMovieThen,
} from './services/promise-me';

export default function App() {
  useEffect(async () => {
    await fetchPinballAsync();
    await fetchPinballThen();
    await fetchMovieAsync();
    await fetchMovieThen();
  });

  return <h1>Hello World</h1>;
}
