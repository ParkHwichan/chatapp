"use client";
import ChatItem from "@/components/chatItem";
import { useEffect, useState } from "react";
import { Chatroom, getChatrooms, ChatroomHero } from "@/lib/chatroom";
import { setChatrooms, setHeroInfo } from "@/redux/store/chatroomSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useSelector } from "react-redux";
import useFetchChatrooms from "@/hooks/useFetchChatrooms";

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
  const chatroomHero = useSelector(
    (state: RootState) => state.chatroom.heroInfo
  );
  useFetchChatrooms();
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
