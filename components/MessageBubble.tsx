import React from 'react';

interface MessageBubbleProps {
  text: string;
  isTyping?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isTyping }) => {
  return (
    <div className="bg-slate-800 text-white rounded-xl p-3 mb-2 max-w-xs self-start">
      {isTyping ? (
        <div className="animate-pulse">
          {text}
        </div>
      ) : (
        <div>
          {text}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;