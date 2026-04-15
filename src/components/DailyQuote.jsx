import { useState, useEffect } from 'react';

const quotes = [
  "Everybody wants to be a bodybuilder, but nobody wants to lift no heavy-ass weights. - Ronnie",
  "Strength does not come from winning. Your struggles develop your strengths. - Arnold",
  "The worst thing I can be is the same as everybody else. I hate that. - Arnold",
  "If you want something you've never had, you must be willing to do something you've never done.",
  "It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens.",
  "Don't stop when you're tired. Stop when you're done. - Goggins",
  "Light weight, baby! - Ronnie Coleman"
];

export default function DailyQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Pick quote based on day
    const index = new Date().getDay();
    setQuote(quotes[index % quotes.length]);
  }, []);

  return (
    <div className="daily-quote-card">
      <div className="quote-icon">❝</div>
      <p className="quote-text">{quote}</p>
    </div>
  );
}
