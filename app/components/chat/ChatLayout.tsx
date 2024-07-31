import { cookies } from "next/headers";
import React from "react";
import ThemeToggle from "../buttons/ThemeToggle";
import ContactList from "./ContactList";
import ChatBubbles from "./ChatBubbles";
interface ChatLayoutProps {
  defaultLayout: string;
}

const ChatLayout = () => {
  return (
    <div className="h-full rounded-lg flex items-grow bg-neutral">
      {/* Contacts */}
      <ContactList />
      {/* Chat */}
      <ChatBubbles />
    </div>
  );
};

export default ChatLayout;
