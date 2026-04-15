import { useState, useEffect, useRef } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Icons
const FullscreenIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TimerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default function ExerciseCard({ exercise, isCompleted, toggleComplete, badgeClass }) {
  const videoId = `video-${exercise.id}`;
  const [prData, setPrData] = useLocalStorage(`gym_pr_${exercise.id}`, { weight: '', reps: '' });
  
  // Timer State
  const [timerLeft, setTimerLeft] = useState(0); // 0 means not running
  const [timerActive, setTimerActive] = useState(false);
  const audioCtxRef = useRef(null);

  const startTimer = () => {
    setTimerLeft(60);
    setTimerActive(true);
  };

  const playBeep = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if(ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  };

  useEffect(() => {
    let interval = null;
    if (timerActive && timerLeft > 0) {
      interval = setInterval(() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
    } else if (timerActive && timerLeft === 0) {
      setTimerActive(false);
      playBeep();
    }
    return () => clearInterval(interval);
  }, [timerActive, timerLeft]);

  const handlePrChange = (field, value) => {
    setPrData(prev => ({ ...prev, [field]: value }));
  };

  const handleFullscreen = () => {
    const videoElement = document.getElementById(videoId);
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
    }
  };

  // 60 sec circle calculation (strokeDasharray ~ 113 for r=18)
  const circleOffset = 113 - (113 * timerLeft) / 60;

  return (
    <div className={`exercise-card ${isCompleted ? 'completed' : ''}`}>
      <div className="exercise-header">
        <div className="exercise-info">
          <h3 className="exercise-title">{exercise.name}</h3>
          <span className={`muscle-badge ${badgeClass}`}>{exercise.targetMuscle}</span>
        </div>
        <button 
          className="complete-btn" 
          onClick={() => toggleComplete(exercise.id)}
          title="Mark card as complete"
        >
          <CheckIcon />
        </button>
      </div>

      <div className="video-wrapper">
        <div className="video-container">
          <video
            id={videoId}
            src={`/videos/${exercise.name}.mp4`}
            controls
            loop
            muted
            autoPlay
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="fullscreen-btn" onClick={handleFullscreen} title="Fullscreen">
           <FullscreenIcon />
        </button>
      </div>

      {/* Tools Section */}
      <div className="card-tools">
        {/* PR Tracker */}
        <div className="pr-tracker">
          <div className="input-group">
            <label>Weight (kg)</label>
            <input 
              type="number" 
              value={prData.weight} 
              onChange={(e) => handlePrChange('weight', e.target.value)} 
              placeholder="e.g. 50"
            />
          </div>
          <div className="input-group">
            <label>Reps</label>
            <input 
              type="number" 
              value={prData.reps} 
              onChange={(e) => handlePrChange('reps', e.target.value)} 
              placeholder="e.g. 12"
            />
          </div>
        </div>

        {/* Rest Timer */}
        <div className="timer-wrapper">
          {timerLeft > 0 ? (
            <div className="active-timer">
               <svg className="timer-svg" width="40" height="40">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#333" strokeWidth="4" />
                  <circle cx="20" cy="20" r="18" fill="none" stroke="var(--accent)" strokeWidth="4" strokeDasharray="113" strokeDashoffset={circleOffset} transform="rotate(-90 20 20)" style={{transition: 'stroke-dashoffset 1s linear'}} />
               </svg>
               <span className="timer-text">{timerLeft}</span>
            </div>
          ) : (
            <button className="btn-timer" onClick={startTimer}>
               <TimerIcon />
               Start Rest
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
