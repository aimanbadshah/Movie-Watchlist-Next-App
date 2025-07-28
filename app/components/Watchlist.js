'use client';

import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function Watchlist() {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=batman')
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.error('Error:', err));
  }, []);

  if (!shows) return <div>Loading watchlist...</div>;

  return (
    <div style={{ padding: '2rem', background: '#111', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', marginBottom: '2rem' }}>My Watchlist</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {shows.map(({ show }) => (
          <MovieCard
            key={show.id}
            title={show.name}
            poster={show.image?.medium}
            year={show.premiered?.split('-')[0]}
          />
        ))}
      </div>
    </div>
  );
}
