import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

// Add delay to simulate network - helps visualize lazy loading
const delayForDemo = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 800);
  }).then(() => promise);
};

// Lazy loading components
const Home = lazy(() => delayForDemo(import("./Home")));
const About = lazy(() => delayForDemo(import("./About")));
const Profile = lazy(() => delayForDemo(import("./Profile")));

// Enhanced loading component
function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>x
      <p className="loading-text">Loading...</p>
    </div>
  );
}

// Navigation with active link highlighting
function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
        🏠 Home
      </Link>
      <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
        ℹ️ About
      </Link>
      <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
        👤 Profile
      </Link>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">🚀 Lazy Loading Demo</h1>
      </header>

      <Navigation />

      <main className="main-content">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

