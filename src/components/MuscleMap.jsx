import React from 'react';

const SVG_CONSTANTS = {
  chest: "M35,35 c10,-5 20,-5 30,0 c0,15 -15,20 -30,0 z",
  back: "M35,35 c10,-5 20,-5 30,0 c5,15 -20,30 -30,0 z",
  abs: "M40,55 c5,0 10,0 20,0 c0,20 -10,25 -20,0 z",
  arms: "M25,35 c-5,10 -10,20 -5,35 c5,-10 10,-20 5,-35 z M75,35 c5,10 10,20 5,35 c-5,-10 -10,-20 -5,-35 z",
  shoulders: "M25,35 c0,-10 10,-15 15,-5 c-5,5 -10,5 -15,5 z M75,35 c0,-10 -10,-15 -15,-5 c5,5 10,5 15,5 z",
  legs: "M40,80 c-5,20 -10,40 -5,55 c5,-10 10,-30 15,-55 z M60,80 c5,20 10,40 5,55 c-5,-10 -10,-30 -15,-55 z"
};

export default function MuscleMap({ sessionTitle }) {
  const t = (sessionTitle || "").toLowerCase();
  
  const isChest = t.includes('chest') || t.includes('upper focus');
  const isBack = t.includes('back');
  const isAbs = t.includes('abs') || t.includes('core') || t.includes('plank');
  const isArms = t.includes('arm') || t.includes('bicep') || t.includes('tricep') || t.includes('forearm');
  const isShoulders = t.includes('shoulder') || t.includes('delt');
  const isLegs = t.includes('leg');

  const highlightClass = "active-muscle";

  return (
    <div className="muscle-map-container">
      <h4 className="muscle-map-title">Target Muscles</h4>
      <svg className="muscle-body" viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Body Silhouette */}
        <path d="M40,15 c5,-10 15,-10 20,0 c5,5 5,15 0,20 c-5,5 -15,5 -20,0 c-5,-5 -5,-15 0,-20 z" className="base-body" />
        <path d="M35,35 c10,-5 20,-5 30,0 c10,5 10,40 5,45 c-5,2 -10,0 -15,0 c-5,0 -10,2 -15,0 c-5,-5 -5,-40 5,-45 z" className="base-body" />
        
        {/* Dynamic Overlays */}
        <path d={SVG_CONSTANTS.chest} className={`overlay-muscle ${isChest ? highlightClass : ''}`} />
        {!isChest && isBack && <path d={SVG_CONSTANTS.back} className={`overlay-muscle ${isBack ? highlightClass : ''}`} />}
        <path d={SVG_CONSTANTS.abs} className={`overlay-muscle ${isAbs ? highlightClass : ''}`} />
        <path d={SVG_CONSTANTS.arms} className={`overlay-muscle ${isArms ? highlightClass : ''}`} />
        <path d={SVG_CONSTANTS.shoulders} className={`overlay-muscle ${isShoulders ? highlightClass : ''}`} />
        <path d={SVG_CONSTANTS.legs} className={`overlay-muscle ${isLegs ? highlightClass : ''}`} />
      </svg>
    </div>
  );
}
