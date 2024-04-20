import { Message } from "@/lib/chatroom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 가정: Message 타입이 정의되어 있음

interface ChatState {
  messages: Message[];
  sender : string,
  input : string,
}

const initialState: ChatState = {
  messages: [],
  sender : "me",
  input : "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setSender: (state, action: PayloadAction<string>) => {
        state.sender = action.payload;
    },
    setInput: (state, action: PayloadAction<string>) => {
        state.input = action.payload;
    }
  },
});

export const { setMessages, addMessage, setInput, setSender } = chatSlice.actions;

export const chatActions = chatSlice.actions;


export const selectChat = (state: { chat: ChatState }) => state.chat;

export default chatSlice.reducer;
