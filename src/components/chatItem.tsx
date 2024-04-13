import Link from "next/link";

export default function ChatItem(
    props: {
        title: string;
        id : string;
        lastMessage?: string;
        lastMessageTime?: string;
        unreadCount?: number;
    }
) {



return (
        <Link
            href={`/chat/${props.id}`}
            className="p-4 hover:bg-black/20 text-start flex flex-col">

            <div className={"flex flex-row justify-between items-start w-full"}>
                <div className={"flex flex-col"}>
                    <div>
                        {
                            props.title
                        }
                    </div>
                    <div>
                        {
                            props.lastMessage
                        }
                    </div>


                </div>

                <div className={"flex flex-col"}>
{
                        props.lastMessageTime
                    }
                    {
                        props.unreadCount && (
                            <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                {
                                    props.unreadCount
                                }
                            </div>
                        )
                    }
                </div>

            </div>

        </Link>
    )



}