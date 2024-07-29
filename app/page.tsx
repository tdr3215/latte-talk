import Image from "next/image";
import Link from "next/link";
import PreferencesTab from "./components/PreferencesTab";
import ChatLayout from "./components/chat/ChatLayout";
import { cookies } from "next/headers";
import { useState } from "react";

export default function Home() {
 
  // const layout = cookies().get("theme");
  // const defaultLayout = layout ? layout.value : undefined;
  return (
    <main className="flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap 4">
      <PreferencesTab />

      <div className="z-10 border rounded-lg max-w-5xl w-full min-h-[85vh] text-sm ">
        <ChatLayout />
      </div>
    </main>
  );
}
