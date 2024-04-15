import { Message } from "@/lib/chatroom";
import React from "react";

const ChatBox = ({ id, user, content, createdAt, unreadCount }: Message) => {
  const alignmentClass = user === "me" ? "justify-end" : "justify-start";
  const bgcolor = user === "me" ? "bg-yellow-200" : "bg-white";
  return (
    <section className={`flex ${alignmentClass} p-4`}>
      <div className={`flex gap-4 border p-2 bg-white ${bgcolor}`}>
        <div className="border rounded-md ">{user}</div>
        <div>{content}</div>
      </div>
    </section>
  );
};

export default ChatBox;
