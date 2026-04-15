import { useLocalStorage } from '../hooks/useLocalStorage';

export default function HydrationTracker() {
  const [waterMls, setWaterMls] = useLocalStorage('gym_water_ml', 0);

  const addWater = () => {
    setWaterMls(prev => prev + 250);
  };

  const resetWater = () => {
    if(confirm("Reset hydration counter?")) setWaterMls(0);
  };

  return (
    <div className="hydration-widget">
      <div className="water-info">
        <span className="water-icon">💧</span>
        <div className="water-stats">
          <h4>Hydration</h4>
          <p>{waterMls} ml / 3000 ml</p>
        </div>
      </div>
      <div className="water-actions">
        <button onClick={addWater} className="btn-water">+ 250ml</button>
        {waterMls > 0 && <button onClick={resetWater} className="btn-water reset">Reset</button>}
      </div>
    </div>
  );
}
