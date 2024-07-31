import React from "react";

const ChatBubbles = () => {
  return (
    <div className="w-8/12  place-content-end ">
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">
          It's over Anakin,
          <br />I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">First</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-secondary">Second</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-accent">Third</div>
      </div>
    </div>
  );
};

export default ChatBubbles;
