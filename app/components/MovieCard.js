export default function MovieCard({ title, poster, year }) {
  return (
    <div style={{
      width: '180px',
      background: '#222',
      color: 'white',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <img
        src={poster || 'https://via.placeholder.com/210x295?text=No+Image'}
        alt={title}
        style={{ width: '100%', height: '270px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.5rem' }}
      />
      <h2 style={{ fontSize: '1rem', margin: '0.5rem 0' }}>{title}</h2>
      <p style={{ color: '#aaa', fontSize: '0.85rem' }}>{year || 'Unknown Year'}</p>
    </div>
  );
}
