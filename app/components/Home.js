'use client';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function Home() {
  const [shows, setShows] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows?page=1')
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (!shows) return <div>Loading movies...</div>;

  return (
    <div>
      <h1 style={{ color: 'black', marginBottom: '2rem' }}>Recommended Shows for You</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '2rem' }}>
        {shows.map(show => (
          <MovieCard
            key={show.id}
            title={show.name}
            poster={show.image?.medium || ''}
            year={show.premiered ? show.premiered.split('-')[0] : 'N/A'}
          />
        ))}
      </div>
    </div>
  );
}
