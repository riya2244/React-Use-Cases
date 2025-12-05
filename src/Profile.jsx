import { useEffect, useState } from 'react';

export default function Profile() {
  const [loadTime, setLoadTime] = useState('');
  const [visits, setVisits] = useState(0);
  
  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    setLoadTime(time);
    console.log('👤 Profile component loaded at:', time);
    
    const count = parseInt(localStorage.getItem('profileVisits') || '0') + 1;
    localStorage.setItem('profileVisits', count.toString());
    setVisits(count);
  }, []);

  return (
    <div className="page-content">
      <h1>👤 Profile</h1>
      <p className="load-badge">Loaded at {loadTime}</p>
      <p>You've visited this page {visits} time{visits !== 1 ? 's' : ''}.</p>
    </div>
  );
}
