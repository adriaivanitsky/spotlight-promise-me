import { useEffect } from 'react';
import { fetchPinballAsync, fetchPinballThen } from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchPinballAsync();
    fetchPinballThen();
  });

  return <h1>Hello World</h1>;
}
