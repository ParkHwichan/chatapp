"use client";
import ChatBox from "@/components/ChatBox";
import { IoMdSend } from "react-icons/io";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useSendMessage from "@/hooks/useSendMessage";
import useFetchMessages from "@/hooks/useFetchMessages";
import ChatInput from "@/app/chat/[...id]/chatInpiut";
import {useEffect, useRef} from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { sendMessage } = useSendMessage(params.id[0]);
  useFetchMessages(params.id[0]);

  const messages = useSelector((state: RootState) => state.chat.messages);
  const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
        }
    }, [messages]);

  return (
    <section
      className={"flex flex-col max-w-lg h-with-navbar overflow-hidden mx-auto w-full border bg-blue-200	"}
    >
      <div
          ref={ref}
          className="flex flex-col h-full flex-grow overflow-y-auto ">
        {messages.map((message) => {
          return <ChatBox key={message.id} {...message} />;
        })}
      </div>
      <ChatInput id={params.id[0]} />
    </section>
  );
}
