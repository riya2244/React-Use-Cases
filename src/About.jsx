import { useEffect, useState } from 'react';

export default function About() {
  const [loadTime, setLoadTime] = useState('');
  
  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setLoadTime(time);
    console.log('ℹ️ About component loaded at:', time);
  }, []);

  return (
    <div className="page-content">
      <h1>ℹ️ About</h1>
      <p className="load-badge">Loaded at {loadTime}</p>
      <p>React lazy loading splits code into smaller chunks that load on-demand.</p>
    </div>
  );
}
