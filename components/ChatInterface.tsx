"use client";

import React, { useState, useEffect } from 'react';
import MessageBubble from '@/components/MessageBubble.tsx'; // Adjust path if needed

const ChatInterface: React.FC = () => {
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [saraMessage, setSaraMessage] = useState('');

  useEffect(() => {
    // Initial delay of 2 seconds
    setTimeout(() => {
      setShowTypingIndicator(true); // Show typing indicator after 2 seconds

      // Typing indicator duration of 2 seconds
      setTimeout(() => {
        setShowTypingIndicator(false); // Hide typing indicator after 2 seconds
        setSaraMessage('Hey, cutie :)'); // Show Sara's message
      }, 2000); // 2 seconds
    }, 2000); // 2 seconds
  }, []);

  return (
    <div className="flex flex-col h-screen bg-slate-900 justify-end p-4"> {/* Modified justify-content */}
      <div className="mb-4"> {/* Container for messages (optional margin) */}
        {showTypingIndicator && (
          <MessageBubble text="Sara is typing..." isTyping={true} />
        )}
        {saraMessage && (
          <MessageBubble text={saraMessage} />
        )}
      </div>
      <div className="w-full"> 
        <input
          type="text"
          placeholder="Chat with Sara"
          className="w-full p-3 rounded-lg bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>
  );
};

export default ChatInterface;