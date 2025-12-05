import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Bible from './pages/Bible';
import Worship from './pages/Worship';
import Challenges from './pages/Challenges';
import Settings from './pages/Settings';
import { UserProgress } from './types';
import { AudioProvider } from './contexts/AudioContext';

const INITIAL_PROGRESS: UserProgress = {
  readChapters: [],
  lastRead: null,
  streak: 0,
  lastLoginDate: null,
};

const App: React.FC = () => {
  // Initialize progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lumina_progress');
    if (!saved) {
      localStorage.setItem('lumina_progress', JSON.stringify(INITIAL_PROGRESS));
    } else {
      const parsed = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];
      if (parsed.lastLoginDate !== today) {
        const updated = { ...parsed, lastLoginDate: today };
        localStorage.setItem('lumina_progress', JSON.stringify(updated));
      }
    }
    
    // Check Theme preference
    const savedTheme = localStorage.getItem('lumina_theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <AudioProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/app" element={<Home />} />
            <Route path="/bible" element={<Bible />} />
            <Route path="/worship" element={<Worship />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </AudioProvider>
  );
};

export default App;