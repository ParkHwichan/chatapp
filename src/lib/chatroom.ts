import firestore from "./firebase-config";
import {collection, getDocs} from "firebase/firestore/lite";

export type Message = {

    id: string,
    user : string,
    content: string,
    createdAt: Date,

}

export type Chatroom = {
  id: string;
  name: string;
  messages: Message[];
};

export async function getChatrooms() {
  const chatrooms = await firestore.collection("chatrooms").get();

<<<<<<< HEAD
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
=======
    const chatrooms = collection(firestore, "chatrooms")
    const chatroomSnapshot = await getDocs(chatrooms);
    const chatroomList  = chatroomSnapshot.docs.map((doc) => {
        return doc.data();
    } );


return chatroomList.map(chatroomFromDoc);


}

function chatroomFromDoc(data: any) {

    try {
        return {
            id : data.id ?? "-1",
            name: data.name ?? "Unknown",
            messages: data.messages ? data.messages.map(messageFromDoc) : [] as Message[],
        } as Chatroom;
    }  catch (e) {
        return {
            id: "-1",
            name: "Unknown",
            messages: [] as Message[],
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
>>>>>>> bffca8ee0e2f209003bed878911e3f6540162b1b
