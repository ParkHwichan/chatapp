"use client";
import ChatBox from "@/components/ChatBox";
import { IoMdSend } from "react-icons/io";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import useSendMessage from "@/hooks/useSendMessage";
import useFetchMessages from "@/hooks/useFetchMessages";

export default function Page({ params }: { params: { id: string } }) {
  const { text, setText, sendMessage } = useSendMessage(params.id[0]);
  useFetchMessages(params.id[0]);

  const messages = useSelector((state: RootState) => state.chat.messages);

  const changeHandler = (e: any) => setText(e.target.value);
  const clickHandler = () => sendMessage();
  return (
    <section
      className={"flex flex-col max-w-lg mx-auto w-full border bg-blue-200	"}
    >
      <div className="h-[500px] ">
        {messages.map((message) => {
          return <ChatBox key={message.id} {...message} />;
        })}
      </div>
      <div className="flex relative">
        <input
          value={text}
          className="border w-full"
          onChange={changeHandler}
        />
        <IoMdSend className="absolute right-0" onClick={clickHandler} />
      </div>
    </section>
  );
}
