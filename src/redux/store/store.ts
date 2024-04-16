import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatSlice";
import chatroomSlice from "./chatroomSlice";

const store = configureStore({
  reducer: {
    chat: chatReducer,
    chatroom: chatroomSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
