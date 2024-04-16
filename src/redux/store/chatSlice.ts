import { Message } from "@/lib/chatroom";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// 가정: Message 타입이 정의되어 있음

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
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
  },
});

export const { setMessages, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
