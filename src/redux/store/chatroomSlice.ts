import { Chatroom, ChatroomHero } from "@/lib/chatroom";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ChatRoomsState {
  chatrooms: Chatroom[];
  heroInfo: ChatroomHero[]; // 추후 정의 필요
}

const initialState: ChatRoomsState = {
  chatrooms: [],
  heroInfo: [],
};

const chatroomsSlice = createSlice({
  name: "chatrooms",
  initialState,
  reducers: {
    setChatrooms: (state, action: PayloadAction<Chatroom[]>) => {
      state.chatrooms = action.payload;
    },
    setHeroInfo: (state, action: PayloadAction<ChatroomHero[]>) => {
      state.heroInfo = action.payload;
    },
    addChatroom: (state, action: PayloadAction<Chatroom>) => {
      state.chatrooms.push(action.payload);
    },
  },
});

export const { setChatrooms, setHeroInfo, addChatroom } =
  chatroomsSlice.actions;

export default chatroomsSlice.reducer;
