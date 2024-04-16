import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "@/lib/chatroom";
import { addMessage } from "@/redux/store/chatSlice";
import { v4 as uuidv4 } from "uuid";

function useSendMessage(chatroomId: string) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    const newMessage = {
      id: uuidv4(), // UUID를 사용하여 고유한 ID 생성
      user: "me",
      content: text,
      createdAt: new Date(),
      unreadCount: 1,
    };

    createMessage(chatroomId, newMessage).then((result) => {
      if (result) {
        dispatch(addMessage(newMessage));
        setText("");
      } else {
        console.error("메시지 저장 실패");
      }
    });
  };

  return {
    text,
    setText,
    sendMessage,
  };
}

export default useSendMessage;
