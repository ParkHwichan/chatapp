import {IoMdSend} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {chatActions, selectChat} from "@/redux/store/chatSlice";
import useSendMessage from "@/hooks/useSendMessage";

export default function ChatInput(
    props: { id: string }

) {



    const {input } = useSelector(selectChat);
    const {sendMessage} = useSendMessage( props.id[0]);
    const dispatch = useDispatch();


    const handleSubmit = async () => {
        sendMessage(
            input,
            () => {
                dispatch(chatActions.setInput(""));
            }
        );
    }

    return <div className="flex relative flex-shrink-0">
        <input
            value={input}
            className="border w-full"
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault()
                    handleSubmit();
                }
            }
            }onChange={
                (e) => {dispatch(chatActions.setInput(
                    e.target.value
                ))}

            }
        />
        <IoMdSend className="absolute right-0" onClick={handleSubmit}/>
    </div>
}