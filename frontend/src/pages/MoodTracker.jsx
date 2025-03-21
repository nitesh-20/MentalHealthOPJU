import React, { useState } from 'react';
import { Brain, TrendingUp, MessageCircle } from 'lucide-react';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

export default function MoodTracker() {
  const [entry, setEntry] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);
  const [suggestion, setSuggestion] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const suggestions = {
    positive: [
      "You're doing amazing! Keep spreading positivity. 😊",
      "Your energy is inspiring. Consider journaling your happy moments!",
      "You're in a great mood! How about sharing this joy with a friend?",
      "Keep shining! Maybe try a new hobby or activity today?"
    ],
    neutral: [
      "A calm state of mind is great! Maybe take a nature walk?",
      "You seem reflective today. Writing down thoughts might help!",
      "How about watching a relaxing movie or listening to soft music?",
      "Some quiet time might be refreshing. Try a few deep breaths!"
    ],
    negative: [
      "It's okay to have bad days. You're stronger than you think. ❤️",
      "Try listening to your favorite song or talking to someone close.",
      "Deep breaths! Maybe take a short break or meditate?",
      "You’re not alone. Maybe journaling your thoughts will help?"
    ]
  };

  const predefinedQuestions = [
    "How was your day?",
    "What made you smile today?",
    "Did anything stress you out today?",
    "Are you feeling motivated or tired?",
    "Do you need to take a break?"
  ];

  const analyzeMood = () => {
    const result = sentiment.analyze(entry);
    const score = result.score;

    const newMood = {
      date: new Date().toLocaleDateString(),
      text: entry,
      score: score
    };

    setMoodHistory(prev => [...prev, newMood]);

    if (score > 0) {
      setSuggestion(suggestions.positive[Math.floor(Math.random() * suggestions.positive.length)]);
    } else if (score < 0) {
      setSuggestion(suggestions.negative[Math.floor(Math.random() * suggestions.negative.length)]);
    } else {
      setSuggestion(suggestions.neutral[Math.floor(Math.random() * suggestions.neutral.length)]);
    }

    setEntry('');
  };

  return (
    <div className="mood-tracker-container">
      <div className="mood-header">
        <Brain className="header-icon" />
        <h2>AI Mood Tracker</h2>
      </div>

      <div className="mood-input-section">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="How are you feeling today? Write your thoughts..."
          className="mood-textarea"
          rows={4}
        />
        <button onClick={analyzeMood} className="analyze-button">
          Analyze Mood
        </button>
      </div>

      {suggestion && (
        <div className="suggestion-box">
          <p>{suggestion}</p>
        </div>
      )}

      {moodHistory.length > 0 && (
        <div className="mood-history-section">
          <div className="history-header">
            <TrendingUp className="history-icon" />
            <h3>Mood History</h3>
          </div>
          <div className="mood-list">
            {moodHistory.map((mood, index) => (
              <div key={index} className={`mood-item ${mood.score > 0 ? 'positive' : mood.score < 0 ? 'negative' : 'neutral'}`}>
                <span>{mood.date}</span>
                <span className="mood-text">{mood.text}</span>
                <span className="mood-score">
                  {mood.score > 0 ? 'Positive' : mood.score < 0 ? 'Negative' : 'Neutral'}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="questions-section">
        <div className="question-header">
          <MessageCircle className="question-icon" />
          <h3>Need Some Help?</h3>
        </div>
        <div className="questions-grid">
          {predefinedQuestions.map((question, index) => (
            <button key={index} onClick={() => setEntry(question)} className="question-card">
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
