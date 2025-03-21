export const saveChat = (chat) => {
    localStorage.setItem('chatHistory', JSON.stringify(chat));
  };
  
  export const loadChat = () => {
    return JSON.parse(localStorage.getItem('chatHistory')) || [];
  };
  
  export const saveMoodHistory = (history) => {
    localStorage.setItem('moodHistory', JSON.stringify(history));
  };
  
  export const loadMoodHistory = () => {
    return JSON.parse(localStorage.getItem('moodHistory')) || [];
  };
  