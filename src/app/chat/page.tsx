"use client";
import ChatItem from "@/components/chatItem";
import { useEffect, useState } from "react";
import {
  Chatroom,
  getDocumentIdsFromCollection,
  getChatrooms,
  ChatroomHero,
} from "@/lib/chatroom";

const chatList = [
  {
    id: "afshjdsakfd",
    title: "Chat 1",
    lastMessage: "Hello",
    lastMessageTime: "12:00",
    unreadCount: 3,
  },
  {
    id: "fsajkflajskf",
    title: "Chat 2",
  },
  {
    id: "abfaskjfkaslfc",
    title: "Chat 3",
  },
];

export default function Page() {
  const [chatroomList, setChatroomList] = useState<Chatroom[]>([]);
  const [chatroomHero, setChatroomHero] = useState<ChatroomHero[]>();
  useEffect(() => {
    getChatrooms().then((chatrooms) => {
      const chatroomsArray = Object.values(chatrooms);
      setChatroomList(chatroomsArray);
      setChatroomHero(
        chatroomsArray.map((chat) => ({
          docID: chat.docID,
          title: chat.name,
          lastMessage: chat.messages[0]?.content.slice(0, 10) ?? "No message",
          unreadCount: chat.messages[0]?.unreadCount ?? 0,
          lastMessageTime: new Date(chat.messages[0]?.createdAt ?? Date.now()),
        }))
      );
    });
  }, []);

  return (
    <div className={"flex flex-col max-w-lg mx-auto w-full"}>
      {chatroomHero?.map((chat) => (
        <ChatItem
          key={chat.docID}
          title={chat.title}
          id={chat.docID}
          lastMessage={chat.lastMessage}
          unreadCount={chat.unreadCount}
          lastMessageTime={chat.lastMessageTime}
        />
      ))}
    </div>
  );
}
