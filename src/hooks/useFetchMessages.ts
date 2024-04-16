// hooks/useFetchMessages.ts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChatroomDataFromDoc } from "@/lib/chatroom";
import { setMessages } from "@/redux/store/chatSlice";

function useFetchMessages(chatroomId: string) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChatroomData = () => {
      getChatroomDataFromDoc(chatroomId).then((chatroom) => {
        if (chatroom && chatroom.messages) {
          dispatch(setMessages(chatroom.messages));
        }
      });
    };

    fetchChatroomData(); // 컴포넌트 마운트 시 한 번 실행
    const intervalId = setInterval(fetchChatroomData, 50000); // 5초마다 반복 실행

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, [chatroomId, dispatch]);
}

export default useFetchMessages;
