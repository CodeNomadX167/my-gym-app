import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { workoutPlan } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';

import DailyQuote from './components/DailyQuote';
import HydrationTracker from './components/HydrationTracker';
import MusicWidget from './components/MusicWidget';
import MuscleMap from './components/MuscleMap';
import ExerciseCard from './components/ExerciseCard';

import './index.css';

// Root SVGs
const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const getMuscleBadgeClass = (target) => {
  if(!target) return '';
  const t = target.toLowerCase();
  if (t.includes('warmup')) return 'badge-warmup';
  if (t.includes('chest') || t.includes('upper focus')) return 'badge-chest';
  if (t.includes('back') || t.includes('trap')) return 'badge-back';
  if (t.includes('leg') || t.includes('quad') || t.includes('hamstring') || t.includes('glute') || t.includes('calf') || t.includes('calves')) return 'badge-legs';
  if (t.includes('arm') || t.includes('bicep') || t.includes('tricep') || t.includes('forearm') || t.includes('brachioradialis')) return 'badge-arms';
  if (t.includes('shoulder') || t.includes('delt')) return 'badge-shoulders';
  if (t.includes('abs') || t.includes('core') || t.includes('oblique')) return 'badge-core';
  if (t.includes('cardio')) return 'badge-cardio';
  return '';
};

const dayMapping = [
  { key: 1, label: "Mon" },
  { key: 2, label: "Tue" },
  { key: 3, label: "Wed" },
  { key: 4, label: "Thu" },
  { key: 5, label: "Fri" },
  { key: 6, label: "Sat" },
  { key: 0, label: "Sun" },
];

function App() {
  const [activeDay, setActiveDay] = useState(() => new Date().getDay());
  const [activeSession, setActiveSession] = useState('morning'); // 'morning' | 'afternoon'
  const [subCategory, setSubCategory] = useState('Warm-up');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('gym_theme_dark', true);
  
  // Array of completed IDs to be localstorage safe
  const [completedArr, setCompletedArr] = useLocalStorage('gym_completed_exercises_v3', []);
  const completedExercises = new Set(completedArr);

  const toggleComplete = (id) => {
    const newSet = new Set(completedExercises);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCompletedArr(Array.from(newSet));
  };

  // Switch Theme & Context Class
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.body.className = `theme-${activeSession}`;
  }, [isDarkMode, activeSession]);

  // Handle switching main session
  const handleSessionChange = (session) => {
    setActiveSession(session);
    setSubCategory('Warm-up'); // Default to warmup on switch
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const dayData = workoutPlan[activeDay];
  const currentSessionData = dayData[activeSession];
  
  const totalExercises = currentSessionData.restDay ? 0 : currentSessionData.exercises.length;
  const completedCount = currentSessionData.restDay ? 0 : currentSessionData.exercises.filter(ex => completedExercises.has(ex.id)).length;
  const progressPercent = totalExercises === 0 ? 0 : Math.round((completedCount / totalExercises) * 100);

  // Trigger confetti per full session
  useEffect(() => {
    if (progressPercent === 100 && totalExercises > 0) {
      // Dynamic confetti colors based on session
      const colors = activeSession === 'morning' ? ['#38bdf8', '#ffffff', '#00E676'] : ['#ea580c', '#ffffff', '#00E676'];
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors
      });
    }
  }, [progressPercent, totalExercises, activeSession]);

  // Filter exercises for sub-category display
  const displayedExercises = currentSessionData.restDay ? [] : currentSessionData.exercises.filter(ex => ex.category === subCategory);

  return (
    <div className="app-container">
      {/* Absolute Music Widget */}
      <MusicWidget />

      <div className="header-top">
        <div className="header-text">
          <h1>Gym <span>Dashboard</span></h1>
          <DailyQuote />
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      <div className="dashboard-top-widgets">
        <HydrationTracker />
      </div>

      {/* Day Selector */}
      <div className="day-selector-container">
        <div className="day-selector">
          {dayMapping.map((dayObj) => (
            <button
              key={dayObj.key}
              className={`day-btn ${activeDay === dayObj.key ? 'active' : ''}`}
              onClick={() => setActiveDay(dayObj.key)}
            >
              {dayObj.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Session Toggle */}
      <div className="session-toggle-container main-toggle">
        <button 
          className={`session-btn ${activeSession === 'morning' ? 'active' : ''}`}
          onClick={() => handleSessionChange('morning')}
        >
          Morning Session
        </button>
        <button 
          className={`session-btn ${activeSession === 'afternoon' ? 'active' : ''}`}
          onClick={() => handleSessionChange('afternoon')}
        >
          Afternoon Session
        </button>
      </div>

      {/* Sub Category Toggle */}
      {!currentSessionData.restDay && (
        <div className="session-toggle-container sub-toggle">
          {activeSession === 'morning' ? (
            <>
              <button className={`session-btn ${subCategory === 'Warm-up' ? 'active' : ''}`} onClick={() => setSubCategory('Warm-up')}>Warm-up</button>
              <button className={`session-btn ${subCategory === 'Abs' ? 'active' : ''}`} onClick={() => setSubCategory('Abs')}>Abs</button>
              <button className={`session-btn ${subCategory === 'Cardio' ? 'active' : ''}`} onClick={() => setSubCategory('Cardio')}>Cardio</button>
            </>
          ) : (
            <>
              <button className={`session-btn ${subCategory === 'Warm-up' ? 'active' : ''}`} onClick={() => setSubCategory('Warm-up')}>Warm-up</button>
              <button className={`session-btn ${subCategory === 'Gym Workout' ? 'active' : ''}`} onClick={() => setSubCategory('Gym Workout')}>Gym Workout</button>
            </>
          )}
        </div>
      )}

      <main className="workout-view" key={`${activeDay}-${activeSession}-${subCategory}`}>
        <div className="view-header">
           <h2 className="day-title">{currentSessionData.title} <span style={{opacity: 0.5, fontSize: '0.6em', marginLeft: '10px'}}>{subCategory}</span></h2>
           {!currentSessionData.restDay && <MuscleMap sessionTitle={currentSessionData.title} />}
        </div>

        {!currentSessionData.restDay && (
          <div className="progress-container">
            <div className="progress-header">
              <span>Full Session Progress</span>
              <span>{completedCount} / {totalExercises} ({progressPercent}%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
        )}

        {currentSessionData.restDay ? (
          <div className="rest-day-card">
            <div className="rest-icon">🧘‍♂️</div>
            <p className="quote">"{currentSessionData.quote}"</p>
          </div>
        ) : (
          <div className="exercise-grid">
            {displayedExercises.map((exercise) => (
              <ExerciseCard 
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.has(exercise.id)}
                toggleComplete={toggleComplete}
                badgeClass={getMuscleBadgeClass(exercise.targetMuscle)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
