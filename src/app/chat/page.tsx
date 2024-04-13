'use client';
import ChatItem from "@/components/chatItem";
import {useEffect, useState} from "react";
import {Chatroom, getChatrooms} from "@/lib/chatroom";

const chatList = [
    {
        id: "afshjdsakfd",
        title: "Chat 1",
        lastMessage: "Hello",
        lastMessageTime: "12:00",
        unreadCount: 3
    },
    {
        id: "fsajkflajskf",
        title: "Chat 2",

    },
    {
        id: "abfaskjfkaslfc",
        title: "Chat 3",
    }
]


export default function Page() {

    const [ChatroomList, setChatroomList] = useState<Chatroom[]>([]);


    useEffect(() => {
        getChatrooms().then((chatrooms) => {
            setChatroomList(chatrooms);
        });
    }, []);

    return <div className={"flex flex-col max-w-lg mx-auto w-full"}>
        {
            JSON.stringify(ChatroomList)
        }
        {
            chatList.map((chat) => (
               <ChatItem
                   key={chat.id}
                   title={chat.title} id={chat.id}
                    lastMessage={chat.lastMessage}
                    lastMessageTime={chat.lastMessageTime}
                    unreadCount={chat.unreadCount}
               />
            ))
        }
    </div>
}