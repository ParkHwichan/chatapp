import ChatItem from "@/components/chatItem";

const chatList = [
    {
        id: "afshjdsakfd",
        title: "Chat 1",
        lastMessage: "Hello",
        lastMessageTime: "12:00",
        unreadCount: 3
    },
    {
        id: "fsajkflajskf",
        title: "Chat 2",

    },
    {
        id: "abfaskjfkaslfc",
        title: "Chat 3",
    }
]


export default function Page() {





    return <div className={"flex flex-col max-w-lg mx-auto w-full"}>
        {
            chatList.map((chat) => (
               <ChatItem title={chat.title} id={chat.id}
                    lastMessage={chat.lastMessage}
                    lastMessageTime={chat.lastMessageTime}
                    unreadCount={chat.unreadCount}
               />
            ))
        }
    </div>
}