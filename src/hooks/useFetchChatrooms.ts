import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChatrooms } from "@/lib/chatroom";
import { setChatrooms, setHeroInfo } from "@/redux/store/chatroomSlice";

const useFetchChatrooms = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchChatrooms = () => {
      getChatrooms().then((chatrooms) => {
        const chatroomsArray = Object.values(chatrooms);
        dispatch(setChatrooms(chatroomsArray));
        dispatch(
          setHeroInfo(
            chatroomsArray.map((chat) => ({
              docID: chat.docID,
              title: chat.name,
              lastMessage:
                chat.messages[0]?.content.slice(0, 10) ?? "No message",
              unreadCount: chat.messages[0]?.unreadCount ?? 0,
              lastMessageTime: new Date(
                chat.messages[0]?.createdAt ?? Date.now()
              ),
            }))
          )
        );
      });
    };
    fetchChatrooms();
    const intervalId = setInterval(fetchChatrooms, 50000); // 5초마다 데이터 패치

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, [dispatch]); // 의존성 배열에 dispatch 추가
};

export default useFetchChatrooms;
