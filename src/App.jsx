import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { workoutPlan } from './data';
import { useLocalStorage } from './hooks/useLocalStorage';

import DailyQuote from './components/DailyQuote';
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
  if (t.includes('chest') || t.includes('upper focus') || t.includes('pec')) return 'badge-chest';
  if (t.includes('back') || t.includes('trap') || t.includes('width') || t.includes('thickness')) return 'badge-back';
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
  const [subCategory, setSubCategory] = useState('Warm-up');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('gym_theme_dark', true);
  
  // Array of completed IDs to be localstorage safe
  const [completedArr, setCompletedArr] = useLocalStorage('gym_completed_exercises_v5', []);
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

  // Switch Theme Context Class
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const dayData = workoutPlan[activeDay];
  
  const totalExercises = dayData.restDay ? 0 : dayData.exercises.length;
  const completedCount = dayData.restDay ? 0 : dayData.exercises.filter(ex => completedExercises.has(ex.id)).length;
  const progressPercent = totalExercises === 0 ? 0 : Math.round((completedCount / totalExercises) * 100);

  // Trigger confetti per full session
  useEffect(() => {
    if (progressPercent === 100 && totalExercises > 0) {
      // Dynamic confetti colors based on the single deep charcoal/orange theme
      const colors = ['#ea580c', '#ffffff', '#00E676'];
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors
      });
    }
  }, [progressPercent, totalExercises]);

  const displayedExercises = dayData.restDay ? [] : dayData.exercises.filter(ex => ex.category === subCategory);

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

      <main className="workout-view" key={`${activeDay}`}>
        <div className="view-header">
           <h2 className="day-title">{dayData.title}</h2>
           {!dayData.restDay && <MuscleMap sessionTitle={dayData.title} />}
        </div>

        {!dayData.restDay && (
          <div className="session-toggle-container sub-toggle">
            <button className={`session-btn ${subCategory === 'Warm-up' ? 'active' : ''}`} onClick={() => setSubCategory('Warm-up')}>Warm-up</button>
            <button className={`session-btn ${subCategory === 'Cardio' ? 'active' : ''}`} onClick={() => setSubCategory('Cardio')}>Cardio</button>
            <button className={`session-btn ${subCategory === 'Workout' ? 'active' : ''}`} onClick={() => setSubCategory('Workout')}>Workout</button>
          </div>
        )}

        {!dayData.restDay && (
          <div className="progress-container">
            <div className="progress-header">
              <span>Workout Progress</span>
              <span>{completedCount} / {totalExercises} ({progressPercent}%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
        )}

        {dayData.restDay ? (
          <div className="rest-day-card">
            <div className="rest-icon">🧘‍♂️</div>
            <p className="quote">"{dayData.quote}"</p>
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
