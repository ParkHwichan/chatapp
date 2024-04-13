import firestore from "./firebase-config";
import {collection, getDocs} from "firebase/firestore/lite";

export type Message = {
    id: string,
    user : string,
    content: string,
    createdAt: Date,

}

export type Chatroom = {
    id: string,
    name: string,
    messages: Message[],
}

export async function getChatrooms() {

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