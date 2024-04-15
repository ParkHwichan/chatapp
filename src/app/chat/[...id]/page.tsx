"use client";
import ChatBox from "@/components/ChatBox";
import { IoMdSend } from "react-icons/io";

import {
  Chatroom,
  Message,
  getChatroomDataFromDoc,
  getChatrooms,
} from "@/lib/chatroom";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);

  const router = useRouter();
  console.log(params?.id[0]);
  useEffect(() => {
    getChatroomDataFromDoc(params?.id[0]).then((res) => {
      setMessages(res?.messages);
    });
  }, []);

  const clickHandler = () => {
    console.log("click");
  };
  return (
    <section
      className={"flex flex-col max-w-lg mx-auto w-full border bg-blue-200	"}
    >
      <div className="h-[500px] ">
        {messages.map((message) => {
          console.log(message);
          return <ChatBox key={message.id} {...message} />;
        })}
      </div>
      <div className="flex relative">
        <input className="border w-full" />
        <IoMdSend className="absolute right-0" onClick={clickHandler} />
      </div>
    </section>
  );
}
