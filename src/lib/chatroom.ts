import firestore from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore/lite";

export type Writer = string | "me";

export type Message = {
  id: string;
  user: Writer;
  content: string;
  createdAt: Date;
  unreadCount: number;
};

export type Chatroom = {
  docID: string;
  id: string;
  name: string;
  messages: Message[];
};

export type ChatroomHero = {
  docID: string;
  title: string;
  lastMessage: string;
  unreadCount: number;
  lastMessageTime: Date;
};

export async function getChatrooms(): Promise<{ [key: string]: Chatroom }> {
  const chatroomsRef = collection(firestore, "chatrooms");
  const chatroomSnapshot = await getDocs(chatroomsRef);

  const chatroomsMap: { [key: string]: Chatroom } = {}; // 인덱스 시그니처를 추가
  chatroomSnapshot.docs.forEach((doc) => {
    chatroomsMap[doc.id] = chatroomFromDoc({ docID: doc.id, ...doc.data() });
  });

  return chatroomsMap;
}

export async function getChatroomDataFromDoc(documentId: string) {
  // 주어진 ID의 문서 참조를 가져옵니다.
  const docRef = doc(firestore, "chatrooms", documentId);

  // 문서 참조에서 단일 문서의 데이터를 가져옵니다.
  const docSnapshot = await getDoc(docRef);

  // 문서의 데이터를 반환합니다.
  // 존재하지 않으면 undefined를 반환할 수 있도록 조건을 추가합니다.
  return docSnapshot.exists() ? docSnapshot.data() : undefined;
}
export async function createMessage(chatroomId: string, message: Message) {
  try {
    const chatroomDocRef = doc(firestore, "chatrooms", chatroomId);
    console.log(chatroomDocRef);

    // Update the 'messages' field in the specific 'chatroomId' document
    await updateDoc(chatroomDocRef, {
      messages: arrayUnion(message),
    });

    return true; // Success
  } catch (error) {
    console.error("Error adding message to chatroom:", error);
    return false; // Failure
  }
}

function chatroomFromDoc(data: any) {
  try {
    // data 객체에서 필드를 직접 추출합니다.

    const { docID, id, name, messages, unreadCount } = data;
    console.log("docID", docID);
    return {
      docID: docID ?? "-1",
      id: id ?? "-1",
      name: name ?? "Unknown",
      messages: messages?.map(messageFromDoc) ?? ([] as Message[]),
      unreadCount: unreadCount ?? 0,
    } as Chatroom;
  } catch (e) {
    // 예외 처리에서 기본 채팅룸 객체를 반환합니다.
    console.log("error");
    return {
      docID: "-1",
      id: "-1",
      name: "Unknown",
      messages: [] as Message[],
      unreadCount: 0,
    } as Chatroom;
  }
}
function messageFromDoc(data: any) {
  return {
    id: data.id ?? "-1",
    user: data.user ?? "Unknown",
    content: data.content ?? "Unknown",
    createdAt: data.createdAt ?? new Date(),
  } as Message;
}
