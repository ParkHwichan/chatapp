import firestore from "./firebase-config";

export type Message = {
  id: string;
  user: string;
  content: string;
  createdAt: string;
};

export type Chatroom = {
  id: string;
  name: string;
  messages: Message[];
};

export async function getChatrooms() {
  const chatrooms = await firestore.collection("chatrooms").get();

  const chatroomList: Chatroom[] = [];

  chatrooms.docs.forEach((chatroom: any) => {
    chatroomList.push({
      id: chatroom.id,
      name: chatroom.data().name,
      messages: chatroom.data().messages,
    });
  });

  return chatroomList;
}

export async function createChatroom(name: string) {
  const uuid = Math.random().toString(36).substring(7);
  const chatroom = await firestore.collection("chatrooms").doc(uuid).set({
    name: name,
    messages: [],
  });
}

export async function createChatroomMessage(
  chatroomId: string,
  message: Message
) {
  const chatroom = await firestore
    .collection("chatrooms")
    .doc(chatroomId)
    .get();
  const messages = chatroom.data().messages;
  messages.push(message);
  await firestore.collection("chatrooms").doc(chatroomId).update({
    messages: messages,
  });
}
