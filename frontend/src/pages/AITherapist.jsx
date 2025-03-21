import React, { useState } from 'react';
import { MessageCircle, Send, HelpCircle } from 'lucide-react';
import './AITherapist.css';

const responses = {
  "I'm feeling stressed about exams. What should I do?": 
    "It's okay to feel stressed. Try breaking your study sessions into smaller chunks, take regular breaks, and practice deep breathing exercises.",
  
  "How can I improve my focus and concentration?": 
    "Ensure you get enough sleep, stay hydrated, and minimize distractions. Try the Pomodoro technique—25 minutes of focused work followed by a 5-minute break.",

  "I'm feeling lonely. How can I cope?": 
    "Reach out to a friend, join a group with shared interests, or talk to someone you trust. You're not alone, and there are people who care about you.",

  "I lack motivation to study. Any tips?": 
    "Set small, achievable goals, reward yourself for completing them, and remind yourself why you’re studying. A study buddy can also help keep you accountable.",

  "How do I manage anxiety before a big test?": 
    "Practice deep breathing, visualize success, and focus on what you can control. A little anxiety is normal and can even improve performance!",

  "I keep procrastinating. How can I stop?": 
    "Break tasks into small steps, set clear deadlines, and eliminate distractions. Try the ‘2-minute rule’—if a task takes less than 2 minutes, do it immediately.",

  "What should I do when I feel overwhelmed?": 
    "Pause, take a deep breath, and list your tasks. Prioritize them and tackle one at a time. Don’t hesitate to seek support from a friend or mentor.",

  "I have trouble sleeping due to overthinking. Any advice?": 
    "Avoid screens before bed, try relaxation techniques, and write down your thoughts in a journal to clear your mind before sleeping."
};

export default function AITherapist() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { text: "Hi, I'm your AI therapist. How are you feeling today?", isUser: false }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const userMessage = message.trim();
    setMessage('');

    setChat(prev => [...prev, { text: userMessage, isUser: true }]);

    setTimeout(() => {
      const response = responses[userMessage] || "I'm here to help. Could you tell me more?";
      setChat(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    setMessage(question);
    handleSend();
  };

  return (
    <div className="ai-therapist-container">
      <h1 className="main-title">AI Therapist - Your Mental Health Companion</h1>

      <div className="content">
        <div className="chat-box">
          <div className="ai-therapist-header">
            <MessageCircle className="header-icon" />
            <h2 className="header-title">AI Therapist</h2>
          </div>

          <div className="chat-container">
            {chat.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.isUser ? 'user-message' : 'ai-message'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSend} className="send-button">
              <Send className="send-icon" />
            </button>
          </div>
        </div>

        {/* Common Questions Section */}
        <div className="questions-section">
          <h2><HelpCircle className="header-icon" /> Common Questions</h2>
          <div className="questions-grid">
            {Object.keys(responses).map((question, index) => (
              <button key={index} className="question-card" onClick={() => handleQuestionClick(question)}>
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
