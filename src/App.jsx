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
  if (t.includes('chest')) return 'badge-chest';
  if (t.includes('back') || t.includes('trap')) return 'badge-back';
  if (t.includes('leg') || t.includes('quad') || t.includes('hamstring') || t.includes('glute') || t.includes('calf') || t.includes('calves')) return 'badge-legs';
  if (t.includes('arm') || t.includes('bicep') || t.includes('tricep') || t.includes('forearm') || t.includes('brachioradialis')) return 'badge-arms';
  if (t.includes('shoulder') || t.includes('delt')) return 'badge-shoulders';
  if (t.includes('abs') || t.includes('core') || t.includes('oblique')) return 'badge-core';
  return '';
};

function App() {
  const [activeDay, setActiveDay] = useState(1);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('gym_theme_dark', true);
  
  // We store array of completed IDs to be localstorage safe
  const [completedArr, setCompletedArr] = useLocalStorage('gym_completed_exercises', []);
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

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const currentWorkout = workoutPlan[activeDay];
  
  const totalExercises = currentWorkout.restDay ? 0 : currentWorkout.exercises.length;
  const completedCount = currentWorkout.restDay ? 0 : currentWorkout.exercises.filter(ex => completedExercises.has(ex.id)).length;
  const progressPercent = totalExercises === 0 ? 0 : Math.round((completedCount / totalExercises) * 100);

  // Trigger confetti
  useEffect(() => {
    if (progressPercent === 100 && totalExercises > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#ffffff', '#0056b3']
      });
    }
  }, [progressPercent, totalExercises]);

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

      <div className="day-selector-container">
        <div className="day-selector">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <button
              key={day}
              className={`day-btn ${activeDay === day ? 'active' : ''}`}
              onClick={() => setActiveDay(day)}
            >
              Day {day}
            </button>
          ))}
        </div>
      </div>

      <main className="workout-view" key={activeDay}>
        <div className="view-header">
           <h2 className="day-title">{currentWorkout.title}</h2>
           {!currentWorkout.restDay && <MuscleMap activeDay={activeDay} workoutData={workoutPlan} />}
        </div>

        {!currentWorkout.restDay && (
          <div className="progress-container">
            <div className="progress-header">
              <span>Daily Progress</span>
              <span>{completedCount} / {totalExercises} ({progressPercent}%)</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
        )}

        {currentWorkout.restDay ? (
          <div className="rest-day-card">
            <div className="rest-icon">🧘‍♂️</div>
            <p className="quote">"{currentWorkout.quote}"</p>
          </div>
        ) : (
          <div className="exercise-grid">
            {currentWorkout.exercises.map((exercise) => (
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
