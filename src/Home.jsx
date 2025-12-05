import { useEffect, useState } from 'react';

export default function Home() {
  const [loadTime, setLoadTime] = useState('');
  
  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setLoadTime(time);
    console.log('🏠 Home component loaded at:', time);
  }, []);

  return (
    <div className="page-content">
      <h1>🏠 Home</h1>
      <p className="load-badge">Loaded at {loadTime}</p>
      <p>This component was lazy loaded when you navigated here.</p>
    </div>
  );
}
