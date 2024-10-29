import React, { useState } from 'react'
import Chatbot from './Chatbot';

const Chatbotcomponent = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div>
      <button className="chatbot-toggle" onClick={toggleChatbot}>
        <i className={`fa fa-comments`}></i> Chat
      </button>
      {chatbotVisible && (
        <div className="chatbot-container">
          <Chatbot
          // Add your chatbot configuration here
          />
        </div>
      )}
    </div>
  );
};

export default Chatbotcomponent;
