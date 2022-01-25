import { useEffect } from 'react';
import { fetchPinballAsync, fetchPinballThen } from './services/promise-me';

export default function App() {
  useEffect(() => {
    // fetchPinballAsync();
    console.log(fetchPinballAsync());
    // fetchPinballThen();
    console.log(fetchPinballThen());
  });

  return <h1>Hello World</h1>;
}
