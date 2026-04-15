import { useState } from 'react';

const MusicIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

export default function MusicWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`music-widget-container ${isOpen ? 'open' : ''}`}>
      <button className="music-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <MusicIcon />
      </button>
      
      {isOpen && (
        <div className="music-embed-wrapper">
          <iframe 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZq91oLsHZvy?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      )}
    </div>
  );
}
