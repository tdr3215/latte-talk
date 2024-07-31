"use client";
import Image from "next/image";
import Link from "next/link";
import PreferencesTab from "./components/PreferencesTab";
import ChatLayout from "./components/chat/ChatLayout";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap 4">
      <PreferencesTab />

      <div className="z-10 rounded max-w-5xl w-full min-h-[85vh] text-sm ">
        <ChatLayout />
      </div>
    </main>
  );
}
